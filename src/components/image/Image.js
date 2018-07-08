// mileslei
import React from 'react';
import PropTypes from 'proptypes';

import './Image.css';
import recognize from './recognize';

class Image extends React.Component {
    state = {
        top: this.props.top,
        left: this.props.left
    }

    // 鼠标按下坐标，单位为 px
    mouseStart = {
        x: 0,
        y: 0
    }

    // 选区坐标，值为 0-1
    selectArea = {
        x: [0, 1],
        y: [0, 1]
    }

    hasMouseDown: false
    hasMouseMoved: false

    componentDidMount() {
        const { img } = this;
        img.onload = this.handleResize;
        window.addEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        const { canvas, img } = this;

        const {
            offsetLeft: left,
            offsetTop: top,
            offsetHeight: height,
            offsetWidth: width,
        } = img;

        canvas.style.left = `${left}px`;
        canvas.style.top = `${top}px`;
        canvas.style.height = `${height}px`;
        canvas.style.width = `${width}px`;
        canvas.height = height;
        canvas.width = width;
    }

    handleMouseDown = (e) => {
        const { canvas } = this;
        const { clientX, clientY } = e;
        const { offsetLeft, offsetTop, width, height } = canvas;

        this.hasMouseDown = true;
        this.mouseStart = {
            x: clientX - offsetLeft,
            y: clientY - offsetTop
        };

        const context = canvas.getContext('2d');
        context.clearRect(0, 0, width, height);
        context.fillStyle = 'rgba(0, 0, 0, .5)';
        context.fillRect(0, 0, width, height);
    }

    handleMouseMove = (e) => {
        if (!this.hasMouseDown) return;
        this.hasMouseMoved = true;

        const { canvas } = this;
        const { clientX, clientY } = e;
        const { offsetLeft, offsetTop, width, height } = canvas;
        const { x: prevX, y: prevY } = this.mouseStart;

        const x = clientX - offsetLeft;
        const y = clientY - offsetTop;

        const context = canvas.getContext('2d');
        context.clearRect(0, 0, width, height);
        context.fillStyle = 'rgba(0, 0, 0, .5)';
        context.fillRect(0, 0, width, height);
        context.clearRect(prevX, prevY, x - prevX, y - prevY);
    }

    handleMouseUp = (e) => {
        this.hasMouseDown = false;

        const { canvas } = this;
        const { onCancel, key } = this.props;
        const { offsetLeft, offsetTop, width, height } = canvas;

        if (!this.hasMouseMoved) {
            onCancel({ key });
            return;
        }

        const { clientX, clientY } = e;
        const { x: prevX, y: prevY } = this.mouseStart;

        const x = clientX - offsetLeft;
        const y = clientY - offsetTop;

        const selectArea = {
            x: [prevX / width, x / width],
            y: [prevY / height, y / height]
        };

        this.selectArea = this.sortSelectArea(selectArea);

        if (selectArea.x[0] === selectArea.x[1] || selectArea.y[0] === selectArea.y[1]) {
            const context = canvas.getContext('2d');
            context.clearRect(0, 0, width, height);
        }

        this.hasMouseMoved = false;
    }

    sortSelectArea(paramSelectArea) {
        const selectArea = {
            x: paramSelectArea.x.sort(),
            y: paramSelectArea.y.sort(),
        };

        if (selectArea.x[0] < 0) {
            selectArea.x[0] = 0;
            if (selectArea.x[1] < 0) {
                selectArea.x[1] = 0;
            }
        }

        if (selectArea.x[1] > 1) {
            selectArea.x[1] = 1;
            if (selectArea.x[0] > 1) {
                selectArea.x[0] = 1;
            }
        }

        if (selectArea.y[0] < 0) {
            selectArea.y[0] = 0;
            if (selectArea.y[1] < 0) {
                selectArea.y[1] = 0;
            }
        }

        if (selectArea.y[1] > 1) {
            selectArea.y[1] = 1;
            if (selectArea.y[0] > 1) {
                selectArea.y[0] = 1;
            }
        }

        return selectArea;
    }

    handleRecognize = async (e) => {
        const { src, onData, key } = this.props;
        const selectArea = { ...this.selectArea };
        const img = document.createElement('img');
        img.src = src;
        await new Promise((resolve) => {
            img.onload = () => {
                resolve();
            };
        });
        const { width, height } = img;

        const { x, y } = this.selectArea;
        const newCanvas = document.createElement('canvas');
        const context = newCanvas.getContext('2d');

        newCanvas.width = width * (x[1] - x[0]);
        newCanvas.height = height * (y[1] - y[0]);

        context.drawImage(img, -(x[0] * width), -(y[0] * height), width, height);

        const blob = await new Promise((resolve) => {
            newCanvas.toBlob((blob) => {
                resolve(blob);
            });
        });

        const result = await recognize(blob);
        onData({
            result: result,
            selectArea,
            key,
        });
    }

    render() {
        const { src } = this.props;

        return (
            <div
                className="image-mask"
                onMouseDown={this.handleMouseDown}
                onMouseMove={this.handleMouseMove}
                onMouseUp={this.handleMouseUp}
            >
                <img
                    className="image-image"
                    src={src}
                    ref={ele => { this.img = ele }}
                />
                <canvas
                    className="image-canvas"
                    ref={ele => { this.canvas = ele }}
                />
                <div
                    className="image-button"
                    onClick={this.handleRecognize}
                    onMouseDown={e => e.stopPropagation()}
                    onMouseMove={e => e.stopPropagation()}
                    onMouseUp={e => e.stopPropagation()}
                >
                    开始识别
                </div>
            </div>
        );
    }
}

Image.propTypes = {
    src: PropTypes.string,
    key: PropTypes.string,
    onData: PropTypes.func,
    onCancel: PropTypes.func,
};

Image.defaultProps = {
    src: '',
    key: '',
    onData: () => {},
    onCancel: () => {}
};

export default Image;
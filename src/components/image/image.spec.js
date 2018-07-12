import React from 'react';
import { mount } from 'enzyme';

import Image from './Image';
jest.mock('./recognize');

const root = mount(
    <Image src="success"/>,
    { attachTo: global.document.getElementById('root') },
);

// mock window 对象的属性及事件
let offsetWidth = 0;
Object.defineProperty(root.find('.image-image').instance(), 'offsetWidth', {
    get() {
        return offsetWidth;
    }
});

const resizeEvent = document.createEvent('Event');
resizeEvent.initEvent('resize', true, true);

global.window.resizeTo = (width, height) => {
    global.window.innerWidth = width || global.window.innerWidth;
    global.window.innerHeight = width || global.window.innerHeight;
    global.window.dispatchEvent(resizeEvent);
};

Object.defineProperty(global.Image.prototype, 'src', {
    get() {
        return '';
    },
    set(src) {
        if (src === 'fail') {
            setTimeout(() => this.onerror(new Error('mocked error')));
        } else if (src === 'success') {
            setTimeout(() => this.onload());
        }
    },
});

describe('图片组件检测', () => {
    describe('界面检测', () => {
        it('节点数检测', () => {
            expect(root.find('.image-mask').children()).toHaveLength(3);
        });

        it('resize 检测', () => {
            offsetWidth = 100;
            window.resizeTo(300, 300);
            expect(root.find('.image-image').instance().offsetWidth + 'px')
                .toEqual(root.find('.image-canvas').instance().style.width);
        });
    });


    describe('框选功能检测', () => {
        let selectArea = {};
        let canceled = true;
        root.setProps({
            onData: (e) => {
                canceled = false;
                selectArea = e.selectArea;
            },
            onImageClose: () => {
                canceled = true;
            }
        });

        describe('正常框选检测', () => {
            it('框选后点击识别', (done) => {
                root.find('.image-button').childAt(1).simulate('click');
                setTimeout(() => {
                    expect(selectArea.x).toEqual(expect.arrayContaining([0, 1]));
                    done();
                }, 100);
            });
        });
        
        describe('异常框选检测', () => {
            it('鼠标移动后返回原点不关闭窗口', () => {
                root.find('.image-mask').simulate('mouseDown', { clientX: 0, clientY: 0 });
                root.find('.image-mask').simulate('mouseMove', { clientX: 100, clientY: 100 });
                root.find('.image-mask').simulate('mouseUp', { clientX: 0, clientY: 0 });
                expect(canceled = false);
            });

            it('原地点击鼠标关闭窗口', () => {
                root.find('.image-mask').simulate('mouseDown', { clientX: 0, clientY: 0 });
                root.find('.image-mask').simulate('mouseUp', { clientX: 0, clientY: 0 });
                expect(canceled = true);
            });

            it('没有按下鼠标的情况下不产生影响', () => {
                root.find('.image-mask').simulate('mouseMove', { clientX: 100, clientY: 100 });
                expect(canceled = true);
            });

            it('点击重选不关闭窗口', () => {
                root.find('.image-mask').simulate('mouseDown', { clientX: 0, clientY: 0 });
                root.find('.image-mask').simulate('mouseMove', { clientX: 100, clientY: 100 });
                root.find('.image-mask').simulate('mouseUp', { clientX: 0, clientY: 0 });
                root.find('.image-button').childAt(0).simulate('click');
                expect(canceled = false);
            });

            it('按下 esc 键关闭窗口', () => {
                root.find('.image-mask').simulate('keyDown', { keyCode: 27 });
                expect(canceled = true);
            });
        });
    });
});
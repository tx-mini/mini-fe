import React from 'react';
import { mount } from 'enzyme';

import Image from './Image';
jest.mock('./recognize');

let selectArea = {};
let canceled = true;

function handleData(e) {
    canceled = false;
    selectArea = e.selectArea;
}

function handleCancel() {
    canceled = true;
}

const root = mount(
    <Image
        src="success"
        onData={handleData}
        onCancel={handleCancel}
    />,
    { attachTo: global.document.getElementById('root') },
);

const mask = root.find('.image-mask');
const image = root.find('.image-image');
const canvas = root.find('.image-canvas');
const button = root.find('.image-button');

let offsetWidth = 0;
Object.defineProperty(image.instance(), 'offsetWidth', {
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

describe('组件挂载', () => {
    it('DOM 检测', () => {
        expect(mask.children()).toHaveLength(3);
    });

    it('resize 检测', () => {
        offsetWidth = 100;
        window.resizeTo(300, 300);
        expect(image.instance().offsetWidth + 'px')
            .toEqual(canvas.instance().style.width);
    });

    it('框选检测', (done) => {
        button.simulate('click');
        setTimeout(() => {
            expect(selectArea.x).toEqual(expect.arrayContaining([0, 1]));
            done();
        }, 1000);
    });

    it('取消框选检测', () => {
        mask.simulate('mouseDown', { clientX: 0, clientY: 0 });
        mask.simulate('mouseMove', { clientX: 100, clientY: 100 });
        mask.simulate('mouseUp', { clientX: 0, clientY: 0 });
        expect(canceled = false);

        mask.simulate('mouseDown', { clientX: 0, clientY: 0 });
        mask.simulate('mouseUp', { clientX: 0, clientY: 0 });
        expect(canceled = true);
    });
});
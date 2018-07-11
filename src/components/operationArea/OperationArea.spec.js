import React from 'react';
import { shallow } from 'enzyme';

import OperationArea from './OperationArea';
jest.mock('../../api/save');

const root = shallow(
    <OperationArea
      classList={[{"id":"13000020130515671X","title":"Dgn Us","createTime":"Lorem occaecat sint fugiat","updateTime":"1531334292","isKeyNote":true},{"id":"820000200805275474","title":"Gbbnjh","createTime":"veniam","updateTime":"1531334292","isKeyNote":true},{"id":"310000199407274446","title":"Firgrs","createTime":"Lorem ex in","updateTime":"1531334292","isKeyNote":false}]}
    />,
    { attachTo: global.document.getElementById('root') },
);

describe('操作区测试', () => {
  describe('基本检测', () => {
    it('笔记数量检测', () => {
      expect(root.find('.item')).toHaveLength(3);
    });
  })

  describe('重点整合测试', () => {
    it('点击重点整合后选择框出现', () => {
      root.find('Button').simulate('click');
      expect(root.find('Checkbox').at(0).props().style.visibility).toEqual('visible');
    });

    it('取消全选', () => {
      root.find('Checkbox').last().simulate('change', { target: { checked: false } });
      expect(root.find('Checkbox').at(0).props().checked).toBeFalsy();
    });

    it('取消整合后选择框消失', () => {
      root.find('Button').last().simulate('click');
      expect(root.find('Checkbox').at(0).props().style.visibility).toEqual('hidden');
    });

    it('确认整合', () => {
      root.find('Button').simulate('click');
      root.find('Checkbox').at(0).simulate('change', {
        stopPropagation: () => {},
        target: { checked: true }
      });
      root.find('.button-list Button').at(0).simulate('click');
    });
  });

  describe('删除笔记', () => {
    root.find('.icon-shanchu').at(0).parent().simulate('click');
  });

  describe('选择笔记', () => {
    it('选择笔记后 state 同步改变', (done) => {
      const name = root.find('.item .content').at(2).text();
      root.find('.item').at(2).simulate('click');
      setTimeout(() => {
        expect(root.state().currentNoteName).toEqual(name);
        done();
      }, 100);
    });
  })
});

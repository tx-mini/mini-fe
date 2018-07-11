import React from 'react';
import { shallow } from 'enzyme';

import FirstSlide from './FirstSlide';

const root = shallow(
  <FirstSlide
    brushList={[{"id":"360000200408256842","value":"Vqdcw P"},{"id":"460000200503017819","value":"Zpchgqq"},{"id":"460000198211131417","value":"Rjqufjl"},{"id":"220000199010200148","value":"Fgnmdff"}]}
    classDir={[{"id":"360000200108134712","value":"Lyjwdgd","childrens":[{"id":"150000200108012986","value":"Wmwprxw"},{"id":"640000201009024579","value":"Crqpgsi"},{"id":"640000198405183649","value":"Iqkk Vu"},{"id":"810000198104295606","value":"Iermhos"},{"id":"610000197002155619","value":"Esgamxp"}]},{"id":"420000198506033198","value":"Ojlofgz","childrens":[{"id":"540000198603217869","value":"Seid Sv"},{"id":"140000201004099653","value":"Iqzfn K"},{"id":"130000201110023028","value":"Oqcdaje"},{"id":"820000201405117017","value":"Fplqsdm"},{"id":"440000201506166650","value":"Lryeevx"}]},{"id":"110000197407246625","value":"Zscn Ta","childrens":[{"id":"320000199010107174","value":"Qfhuwh "},{"id":"150000198101308231","value":"Rrnxlc "}]}]}
    setCategory={() => {}}
    SelectItem={() => {}}
    createNote={() => {}}
  />,
  { attachTo: global.document.getElementById('root') },
);

describe('FirstSlide 组件测试', () => {
  describe('学期数检测', () => {
    expect(root.find('.slide-content').children()).toHaveLength(2);
  });

  describe('栏目展开检测', () => {
    it('收起课堂笔记', () => {
      root.find('.class-note').at(0).childAt(0).simulate('click');
      expect(root.find('.class-note').at(0).childAt(1).hasClass('hide')).toBeTruthy();
      root.find('.class-note').at(0).childAt(0).simulate('click');
    })

    it('展开回收站', () => {
      expect(root.find('.class-note').at(1).childAt(1).hasClass('hide')).toBeTruthy();
      root.find('.class-note').at(1).childAt(0).simulate('click');
      expect(root.find('.class-note').at(1).childAt(1).hasClass('show')).toBeTruthy();
    })

    it('学期展开检测', () => {
      root.find('.class-note').at(0).childAt(1).childAt(0).simulate('click');
      expect(root.find('.class-note').at(0).childAt(1).childAt(1).hasClass('show')).toBeTruthy();
    })
  })

  describe('课程选择检测', () => {
    let category;
    root.setProps({
      setCategory: (e) => {
        category = e;
      }
    });

    it('选择回收站笔记', () => {
      const text = root.find('.class-note').at(1).childAt(1).text();
      root.find('.class-note').at(1).childAt(1).childAt(0).simulate('click');
      expect(text).toEqual(category);
    });

    it('选择通常课程', () => {
      const text = root.find('.final-item').at(0).text();
      root.find('.final-item').at(0).simulate('click');
      expect(text).toEqual(category);
    });
  });

  describe('新建笔记测试', () => {
    let newNote = false;
    root.setProps({
      createNote: () => {
        newNote = true;
      }
    });

    root.find('.new-note').simulate('click');
    expect(newNote).toBeTruthy();
  });
});
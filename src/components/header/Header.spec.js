import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

const root = shallow(
    <Header/>,
    { attachTo: global.document.getElementById('root') },
);

describe('头部检测', () => {
  it('标题检测', () => {
    expect(root.find('.logo').at(0).text()).toEqual('企鹅笔记');
  });
});

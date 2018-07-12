import React from 'react';
import { mount } from 'enzyme';

import Editor from './Editor';

const root = mount(
  <Editor
    initialContent={{"blocks":[{"key":"d5l3p","text":"123","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}}
    contentId={0}
    name={"ace"}
  />,
  { attachTo: global.document.getElementById('root') },
);

describe('编辑器组件测试', () => {
  it('文字检测', () => {
    expect(root.find('.DraftEditor-editorContainer').text()).toEqual('123');
  })
});
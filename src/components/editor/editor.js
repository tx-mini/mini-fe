import React from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

export default class Editor extends React.Component {

  render() {

    const editorProps = {
      height: 500,
      contentFormat: 'html',
      initialContent: '<p>Hello World!</p>',
      onChange: this.handleChange,
      onRawChange: this.handleRawChange,
      excludeControls:['emoji'],
      extendControls:[  {
        type: 'button',
        text: 'Hello',
        html: '<span style="color:red;">标为重点</span>',
        hoverTitle: '标为重点',
        className: 'preview-button',
        onClick: () => console.log('Hello World!')
      },{
        type: 'button',
        text: 'Hello',
        html: '<span style="color:red;">取消重点</span>',
        hoverTitle: '取消重点',
        className: 'preview-button',
        onClick: () => console.log('Hello World!')
      }]
    }

    return (
      <div className="demo">
        <BraftEditor {...editorProps} />
      </div>
    )

  }

  handleChange = (content) => {
    console.log(content)
  }

  handleRawChange = (rawContent) => {
    console.log(rawContent)
  }

}
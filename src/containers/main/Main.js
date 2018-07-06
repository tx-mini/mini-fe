import React, { Component } from 'react'
import Header from '../../components/header/Header'
import Editor from '../../components/editor/Editor';
export default class Main extends Component {
  render() {
    return (
      <div>
        main
        <Header/>
        <Editor/>
      </div>
    )
  }
}

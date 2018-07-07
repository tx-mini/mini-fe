import React, { Component } from 'react'
import Header from '../../components/header/Header'
import FirstSlide from '../../components/firstSlide/FirstSlide'
import Editor from '../../components/editor/Editor'
export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header/>
        <div className="content">
          <FirstSlide/>
          <Editor/>
        </div>
      </div>
    )
  }
}

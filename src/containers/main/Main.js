import React, { Component } from 'react'
import Header from '../../components/header/Header'
import FirstSlide from '../../components/firstSlide/FirstSlide'
import OperationArea from '../../components/operationArea/OperationArea'
export default class Main extends Component {
  render() {
    return (
      <div>
        <Header/>
        <FirstSlide/>
        <OperationArea/>
      </div>
    )
  }
}

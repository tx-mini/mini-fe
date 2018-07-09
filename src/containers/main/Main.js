import React, { Component } from 'react'
import Header from '../../components/header/Header'
import FirstSlide from '../../components/firstSlide/FirstSlide'
import OperationArea from '../../components/operationArea/OperationArea'
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classDir: [
        {
            id: "shdjd",
            value: "大三第一学期",
            childrens: [
                {
                    id: "sjdkd",
                    value: "计算机网络"
                }
            ]
        },
        {
            id: "kkaaa",
            value: "大三第二学期",
            childrens: [
                {
                    id: "sjdkd",
                    value: "操作系统"
                },
                {
                    id: "ss",
                    value: "概率论"
                },
                {
                  id: "other",
                  value: "其他"
              }
            ]
        }
      ],
      brushList: [
        {
            id: "shdjd",
            value: "计算机网络"
        },
        {
            id: "kkaaa",
            value: ""
        }
      ],
      classList: [
        { name: "7.7计算机网络", time: Date.now(), id: 0 },
        { name: "7.9计算机网络", time: Date.now(), id: 1 }
      ],
      category: "计算机网络",
      newNote: false
    };
  }
  componentDidMount() {
    //获取目录数据
    let that = this;
    fetch('http://yapi.demo.qunar.com/mock/13512/getCategories', {
      method: 'get'
    }).then((res) => {
      if(res.ok){
        res.json().then(function(result){
          console.log(result);
          if(!result.code){
            let data = result.result;
            that.setState({
              classDir: data.classDir,
              brushList: data.brushList
            })
          }
        })
      }
    }).catch((res) => {
      console.log(res)
    })
  }
  SelectItem(data){
    console.log(data);
  }
  createNote(){
    console.log("新建")
    this.setState({
      newNote: true
    })
  }
  render() {
    const {classDir, category, classList, newNote, brushList} = this.state;
    return (
      <div className="main">
        <Header/>
        <FirstSlide brushList={brushList} classDir={classDir} SelectItem={this.SelectItem.bind(this)} createNote={this.createNote.bind(this)}/>
        <OperationArea category={category} classList={classList} newNote={newNote}/>
      </div>
    )
  }
}

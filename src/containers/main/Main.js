import React, { Component } from "react";
import Header from "../../components/header/Header";
import FirstSlide from "../../components/firstSlide/FirstSlide";
import OperationArea from "../../components/operationArea/OperationArea";
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
            }
          ]
        }
      ],
      classList: [
        { name: "重点笔记 7.25", time: Date.now(), id: 2, important: true },
        { name: "7.7计算机网络", time: Date.now(), id: 0 },
        { name: "7.9计算机网络", time: Date.now(), id: 1 }
      ],
      category: "计算机网络"
    };
  }
  componentDidMount() {
    //获取目录数据
  }
  SelectItem(data) {
    console.log(data);
  }
  createNote() {
    console.log("新建");
  }
  render() {
    const { classDir, category, classList } = this.state;
    return (
      <div className="main">
        <Header />
        <FirstSlide
          classDir={classDir}
          SelectItem={this.SelectItem.bind(this)}
          createNote={this.createNote.bind(this)}
        />
        <OperationArea category={category} classList={classList} />
      </div>
    );
  }
}

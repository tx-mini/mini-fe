import React, { Component } from 'react'
import Header from '../../components/header/Header'
import FirstSlide from '../../components/firstSlide/FirstSlide'
import OperationArea from '../../components/operationArea/OperationArea'
import { getCategories, getNoteList } from '../../api/save'
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classDir: [],
      brushList: [],
      classList: [],
      category: "计算机网络",
      newNote: false,
      isBrush: false
    };
  }
  async componentDidMount() {
    //获取目录数据
    const categories = await getCategories();
    const noteList = await getNoteList(categories.classDir[0].id);
    this.setState({
      classDir: categories.classDir,
      brushList: categories.brushList,
      classList: noteList
    })
  }
  SelectItem(data, type){
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

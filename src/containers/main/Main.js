import React, { Component } from "react";
import Header from "../../components/header/Header";
import FirstSlide from "../../components/firstSlide/FirstSlide";
import OperationArea from "../../components/operationArea/OperationArea";
import { getCategories, getNoteList } from "../../api/save";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classDir: [],
      brushList: [],
      classList: [],
      category: "",
      newNote: false,
      isBrush: false
    };
  }
  setCategory = category => {
    console.log(category);
    this.setState({ category });
  };
  async componentDidMount() {
    //获取目录数据
    const categories = await getCategories();
    const noteList = await getNoteList(categories.classDir[0].id);
    this.setState({
      classDir: categories.classDir,
      brushList: categories.brushList,
      classList: noteList
    });
  }
  SelectItem = async (data, type) => {
    let noteList = [];
    if (!type) {
      noteList = await getNoteList(data.id);
    } else {
      noteList.push(data);
    }
    this.setState({ classList: noteList, isBrush: type });
  };
  createNote = () => {
    let initList = [
      {
        id: "",
        value: "新建笔记"
      }
    ];
    this.setState({ newNote: true, classList: initList });
  };
  render() {
    const {
      classDir,
      category,
      classList,
      newNote,
      brushList,
      isBrush
    } = this.state;
    return (
      <div className="main">
        <Header />
        <FirstSlide
          brushList={brushList}
          classDir={classDir}
          SelectItem={this.SelectItem}
          createNote={this.createNote}
          setCategory={this.setCategory}
        />
        <OperationArea
          category={category}
          classList={classList}
          newNote={newNote}
          isBrush={isBrush}
        />
      </div>
    );
  }
}

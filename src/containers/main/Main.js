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
      isBrush: false,
      nick: ""
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
    console.log(nick);
    this.setState({
      classDir: categories.classDir,
      brushList: categories.brushList,
      classList: noteList,
      category: categories.classDir[0].value,
      nick: this.props.nick || this.props.location.state.nick
    });
  }
  SelectItem = async (data, type) => {
    let noteList = [];
    if (!type) {
      noteList = await getNoteList(data.id);
    } else {
      noteList.push(data);
    }
    console.log(data);
    console.log(noteList);
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
      isBrush,
      nick
    } = this.state;
    return (
      <div className="main">
        <Header nick={nick} />
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

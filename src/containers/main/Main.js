import React, { Component } from "react";
import Header from "../../components/header/Header";
import FirstSlide from "../../components/firstSlide/FirstSlide";
import OperationArea from "../../components/operationArea/OperationArea";
import { getListBook, getNoteList } from "../../api/save";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject_list: [],
      rubbish_list: [],
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

    // 这里改了。。。。。
    const listBook = await getListBook();
    console.log(listBook)
    //  const noteList = await getNoteList(listBook.classDir[0].id);
    // console.log(nick);
    this.setState({
      subject_list: listBook.subject_list || [],
      rubbish_list: listBook.rubbish_list || [],
      nick: this.props.nick || this.props.location.state.nick
    });
  }
  logout = () => {
    // 退出登录
    window.localStorage.removeItem("openid");
    this.props.history.replace("/login");
  };
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
      subject_list,
      category,
      classList,
      newNote,
      rubbish_list,
      isBrush,
      nick
    } = this.state;
    return (
      <div className="main">
        <Header nick={nick} logout={this.logout} />
        <FirstSlide
          rubbish_list={rubbish_list}
          subject_list={subject_list}
          SelectItem={this.SelectItem}
          createNote={this.createNote}
          setCategory={this.setCategory}
        />
        {/* <OperationArea
          category={category}
          classList={classList}
          newNote={newNote}
          isBrush={isBrush}
        /> */}
      </div>
    );
  }
}

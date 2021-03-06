import React, { Component } from "react";
import Header from "../../components/header/Header";
import FirstSlide from "../../components/firstSlide/FirstSlide";
import OperationArea from "../../components/operationArea/OperationArea";
import { getListBook, getNoteList } from "../../api/save";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term_list: [],
      rubbish_list: [],
      classList: [],
      category: "",
      newNote: false,
      type: "term",
      index: 0,
      nick: "",
      currentSubjectid: "" //当前选中的科目id
    };
  }
  setCategory = category => {
    this.setState({ category });
  };
  async componentDidMount() {
    //获取目录数据

    // 这里改了。。。。。
    let listBook = await getListBook();
    // listBook = listBook.reverse();
    // console.log(listBook);
    let noteList = [];
    if (
      listBook &&
      listBook.term_list &&
      listBook.term_list[0] &&
      listBook.term_list[0].children[0] &&
      listBook.term_list[0].children[0].book_id
    ) {
      const [noteStarList, noteCostomList] = await Promise.all([
        getNoteList("0", listBook.term_list[0].children[0].book_id, "1"),
        getNoteList("0", listBook.term_list[0].children[0].book_id, "0")
      ]);
      noteList = [...noteStarList, ...noteCostomList];
    }

    // console.log(nick);
    this.setState({
      term_list: (listBook && listBook.term_list.reverse()) || [],
      classList: noteList || [],
      category: listBook && listBook.term_list[0].children[0].name
    });
  }
  logout = () => {
    // 退出登录
    window.localStorage.removeItem("openid");
    window.localStorage.removeItem("logo_url");
    window.localStorage.removeItem("nick_name");
    this.props.history.push("/login");
  };
  selectItem = async (data, type, index) => {
    console.log(data, type);
    let noteList = [];
    if (type === "term") {
      const [noteStarList, noteCostomList] = await Promise.all([
        getNoteList("0", data.book_id, "1"),
        getNoteList("0", data.book_id, "0")
      ]);

      noteList = [...noteStarList, ...noteCostomList];

      this.setState({ classList: noteList, type: type, index: index });
    } else {
      this.setState({
        type: type,
        index: index
      });
    }
  };
  setCurrentSubjectid = id => {
    this.setState({ currentSubjectid: id });
  };
  createNote = () => {
    // 新建笔记

    const now = Date.now();
    let initList = [
      {
        // ook_id: now,// 当前分类
        name: "新建笔记",
        recent_time: Date.now() / 1000
      }
    ];
    this.setState({ newNote: true, classList: initList });
  };
  showDataList = (dataList, type) => {
    console.log(dataList, type);
    this.setState({
      classList: dataList || [],
      type: type
    });
  };
  setNewNote = bool => {
    this.setState({ newNote: bool });
  };
  createSuccess = async () => {
    console.log("sjsjjs");
    console.log(this.state.currentSubjectid);
    let noteList = [];
    const [noteStarList, noteCostomList] = await Promise.all([
      getNoteList("0", this.state.currentSubjectid, "1"),
      getNoteList("0", this.state.currentSubjectid, "0")
    ]);

    noteList = [...noteStarList, ...noteCostomList];
    console.log(noteList);
    this.setState({
      classList: noteList
    });
  };
  render() {
    const {
      term_list,
      category,
      classList,
      newNote,
      index,
      currentSubjectid,
      type
    } = this.state;
    return (
      <div className="main">
        <Header logout={this.logout} />
        <FirstSlide
          history={this.props.history}
          showDataList={this.showDataList}
          term_list={term_list}
          selectItem={this.selectItem}
          createNote={this.createNote}
          setCategory={this.setCategory}
          setCurrentSubjectid={this.setCurrentSubjectid}
          setNewNote={this.setNewNote}
        />
        <OperationArea
          term_list={term_list}
          category={category}
          dataList={classList}
          newNote={newNote}
          type={type}
          index={index}
          currentSubjectid={currentSubjectid}
          createSuccess={this.createSuccess}
        />
      </div>
    );
  }
}

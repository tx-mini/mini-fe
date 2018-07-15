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
      isRubbish: false,
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
    const listBook = await getListBook();
    const [noteStarList, noteCostomList] = await Promise.all([
      getNoteList("0", listBook.term_list[0].children[0].book_id, "1"),
      getNoteList("0", listBook.term_list[0].children[0].book_id, "0")
    ]);
    let noteList = [...noteStarList, ...noteCostomList];
    this.setState({
      term_list: listBook.term_list || [],
      classList: noteList,
      category: listBook.term_list[0].children[0].name
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
      const [noteStarList, noteCostomList] = await Promise.all([
        getNoteList("0", data.book_id, "1"),
        getNoteList("0", data.book_id, "0")
      ]);

      noteList = [...noteStarList, ...noteCostomList];

      this.setState({ classList: noteList, isRubbish: type });
    }
  };
  setCurrentSubjectid = id => {
    this.setState({ currentSubjectid: id });
  };
  createNote = () => {
    const now = Date.now();
    let initList = [
      {
        // ook_id: now,// 当前分类
        name: "新建笔记"
      }
    ];
    this.setState({ newNote: true, classList: initList });
  };
  showRubbish = rubbishList => {
    this.setState({
      classList: rubbishList || []
    });
  };
  render() {
    const {
      term_list,
      category,
      classList,
      newNote,
      rubbish_list,
      currentSubjectid,
      isRubbish
    } = this.state;
    return (
      <div className="main">
        <Header logout={this.logout} />
        <FirstSlide
          showRubbish={this.showRubbish}
          term_list={term_list}
          SelectItem={this.SelectItem}
          createNote={this.createNote}
          setCategory={this.setCategory}
          setCurrentSubjectid={this.setCurrentSubjectid}
        />
        <OperationArea
          category={category}
          dataList={classList}
          newNote={newNote}
          isBrush={isRubbish}
          currentSubjectid={currentSubjectid}
        />
      </div>
    );
  }
}

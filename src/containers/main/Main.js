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
    // console.log(listBook);
    let noteList = [];
    if (listBook.classDir && listBook.classDir[0] && listBook.classDir[0].id) {
      noteList = await getNoteList(listBook.classDir[0].id);
    }

    // console.log(nick);
    this.setState({
      term_list: listBook.term_list || [],
      classList: noteList || [],
      category: listBook.term_list[0].children[0].name
    });
  }
  logout = () => {
    // 退出登录
    console.log(123);
    window.localStorage.removeItem("openid");
    window.localStorage.removeItem("logo_url");
    window.localStorage.removeItem("nick_name");
    this.props.history.push("/login");
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
    // 新建笔记

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
          history={this.props.history}
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
          isRubbish={isRubbish}
          currentSubjectid={currentSubjectid}
        />
      </div>
    );
  }
}

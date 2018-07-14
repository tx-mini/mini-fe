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
<<<<<<< HEAD
      isBrush: false
=======
      isRubbish: false,
      nick: ""
>>>>>>> 255d1275ed7a6ea8078bed0ce2f4b72821b4503d
    };
  }
  setCategory = category => {
    this.setState({ category });
  };
  async componentDidMount() {
    //获取目录数据

    // 这里改了。。。。。
    const listBook = await getListBook();
    console.log(listBook)
    //  const noteList = await getNoteList(listBook.classDir[0].id);
<<<<<<< HEAD

    this.setState({
      subject_list: listBook.subject_list,
      rubbish_list: listBook.rubbish_list
=======
    // console.log(nick);
    this.setState({
      term_list: listBook.term_list || [],
      nick: this.props.nick || this.props.location.state.nick
>>>>>>> 255d1275ed7a6ea8078bed0ce2f4b72821b4503d
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
    this.setState({ classList: noteList, isRubbish: type });
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
  showRubbish = (rubbishList) => {
    this.setState({
      classList: rubbishList || []
    })
  }
  render() {
    const {
      term_list,
      category,
      classList,
      newNote,
      rubbish_list,
      isBrush
      nick
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
        />
        <OperationArea
          category={category}
          dataList={classList}
          newNote={newNote}
          isBrush={isRubbish}
        />
      </div>
    );
  }
}

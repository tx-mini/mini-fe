import React from "react";
import "./firstSlide.less";
import { TERM_KEY } from "./constant";
import { getNoteList } from "../../api/save";
import {Tooltip} from 'antd';

class FirstSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term_list: props.term_list,
      other_list: [],
      rubbish_list: [],
      showClass: true,
      showCChild: [true],
      showBChild: [],
      curCParentIndex: 0,
      curCIndex: 0,
      curBParentIndex: "",
      curBIndex: "",
      curOParentIndex: "",
      curOIndex: "",
      showRubbish: false,
      showOther: false
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      term_list: nextProps.term_list
    });
  }
  componentDidMount() {
    const { term_list, rubbish_list } = this.state;
    let initC = [true];
    let initB = [];
    for (let i = 0; i < term_list.length; i++) {
      initC.push(true);
    }
    for (let i = 0; i < rubbish_list.length; i++) {
      initB.push(false);
    }
    this.setState({
      showCChild: initC,
      showBChild: initB
    });
  }
  toggleShow(index) {
    const { showCChild } = this.state;
    let arr;
    arr = showCChild;
    arr[index] = !showCChild[index];
    this.setState({
      showCChild: arr
    });
  }
  selectItem(i, index, data, type) {
    let curCIndex;
    let curCParentIndex;
    let curBIndex;
    let curBParentIndex;
    let curOParentIndex;
    let curOIndex;
    if (type === "term") {
      curCIndex = i;
      curCParentIndex = index;
      curBIndex = "";
      curBParentIndex = "";
      curOIndex = "";
      curOParentIndex = "";
    } else if(type === "rabbish") {
      curCIndex = "";
      curCParentIndex = "";
      curBIndex = i;
      curBParentIndex = index;
      curOIndex = "";
      curOParentIndex = "";
    }
    else {
      curCIndex = "";
      curCParentIndex = "";
      curBIndex = "";
      curBParentIndex = "";
      curOIndex = i;
      curOParentIndex = index;
    }
    console.log(data.is_rubbish);
    this.props.setCategory(data.name);
    // console.log(this.props.term_list,curBParentIndex,);
    this.props.setCurrentSubjectid(
      this.props.term_list[curCParentIndex] &&
        this.props.term_list[curCParentIndex].children[curCIndex].book_id
    );
    this.setState({
      curCIndex: curCIndex,
      curCParentIndex: curCParentIndex,
      curBIndex: curBIndex,
      curBParentIndex: curBParentIndex,
      curOIndex: curOIndex,
      curOParentIndex: curOParentIndex
    });
    this.props.setNewNote(false);
    //传递选中的data
    this.props.selectItem(data, type, index);
  }
  createNote() {
    //新建笔记
    this.props.createNote();
  }
  showRubbish = async () => {
    if (!this.state.showRubbish) {
      const rubbishList = await getNoteList("1");
      console.log(rubbishList);
      this.setState({
        showRubbish: true,
        rubbish_list: rubbishList || []
      });
      this.props.showDataList(rubbishList, "rabbish");
    } else {
      this.setState({
        showRubbish: false
      });
    }
  }
  showOther = async () => {
    if (!this.state.showOther) {
      const otherList = await getNoteList("0", "-1", "0");
      console.log(otherList);
      this.setState({
        showOther: true,
        other_list: otherList || []
      });
      this.props.showDataList(otherList, "other");
    } else {
      this.setState({
        showOther: false
      });
    }
  };
  render() {
    const {
      term_list,
      rubbish_list,
      other_list,
      showClass,
      showCChild,
      curCIndex,
      curCParentIndex,
      showRubbish,
      showOther,
      curBParentIndex,
      curOParentIndex
    } = this.state;
    return (
      <div className="first-slide">
        <div className="new-note" onClick={this.createNote.bind(this)}>
          <i className="iconfont icon-add add-icon" />
          新建笔记
        </div>
        <div className="slide-content">
          <div className="class-note">
            <div
              className="slide-item"
              onClick={() => this.setState({ showClass: !showClass })}
            >
              <i
                className={[
                  "iconfont show-icon",
                  showClass ? "icon-shouqi" : "icon-zhankai"
                ].join(" ")}
              />
              <i className="iconfont icon-iconset0117 show-icon item-icon" />
              <span className="item-title hide-text">课堂笔记</span>
            </div>
            {term_list.map((item, index) => (
              <div className={showClass ? "show" : "hide"} key={index}>
                <div
                  className="slide-item sub-item"
                  onClick={this.toggleShow.bind(this, index)}
                >
                  <i
                    className={[
                      "iconfont show-icon",
                      showCChild[index] ? "icon-shouqi" : "icon-zhankai"
                    ].join(" ")}
                  />
                  <i className="iconfont icon-wenjianjia show-icon item-icon" />
                  
                  <Tooltip title={TERM_KEY[item.term - 1]}>
                    <span className="item-title">
                      {TERM_KEY[item.term - 1]}
                    </span>
                  </Tooltip>
                </div>
                {item.children.map((data, i) => (
                  <div
                    className={[
                      "slide-item final-item",
                      showCChild[index] ? "show" : "hide",
                      "hide-text"
                    ].join(" ")}
                    onClick={this.selectItem.bind(this, i, index, data, "term")}
                    key={i}
                  >
                    <i className="iconfont icon-wenben show-icon item-icon" />
                    <Tooltip title={data.name}>
                      <span
                        className={[
                          "item-title",
                          curCIndex === i && curCParentIndex === index
                            ? "active"
                            : ""
                        ].join(" ")}
                      >
                        {data.name}
                      </span>
                    </Tooltip>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="class-note">
            <div className="slide-item" onClick={this.showOther}>
              <i
                className={[
                  "iconfont show-icon",
                  showOther ? "icon-shouqi" : "icon-zhankai"
                ].join(" ")}
              />
              <i className="iconfont icon-iconset0117 show-icon item-icon" />
              <span className="item-title">其他笔记</span>
            </div>
            {other_list.map((item, index) => (
              <div className={showOther ? "show" : "hide"} key={index}>
                <div
                  className="slide-item sub-item"
                  onClick={this.selectItem.bind(this, "", index, item, "other")}
                >
                  <i className="iconfont icon-wenben show-icon item-icon" />
                  <Tooltip title={item.name}>
                    <span
                      className={[
                        "item-title",
                        curOParentIndex === index ? "active" : ""
                      ].join(" ")}
                    >
                      {item.name}
                    </span>
                  </Tooltip>
                </div>
              </div>
            ))}
          </div>
          <div className="class-note">
            <div className="slide-item" onClick={this.showRubbish}>
              <i
                className={[
                  "iconfont show-icon",
                  showRubbish ? "icon-shouqi" : "icon-zhankai"
                ].join(" ")}
              />
              <i className="iconfont icon-shanchu show-icon item-icon" />
              <span className="item-title">回收站</span>
            </div>
            {rubbish_list.map((item, index) => (
              <div className={showRubbish ? "show" : "hide"} key={index}>
                <div
                  className="slide-item sub-item"
                  onClick={this.selectItem.bind(this, "", index, item, "rabbish")}
                >
                  <i className="iconfont icon-wenben show-icon item-icon" />
                  <Tooltip title={item.name}>
                    <span
                      className={[
                        "item-title",
                        curBParentIndex === index ? "active" : ""
                      ].join(" ")}
                    >
                      {item.name}
                    </span>
                  </Tooltip>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default FirstSlide;

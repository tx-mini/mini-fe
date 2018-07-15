import React from "react";
import "./firstSlide.less";
import { TERM_KEY } from "./constant";
import { getNoteList } from "../../api/save";

class FirstSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term_list: props.term_list,
      rubbish_list: [],
      showClass: true,
      showCChild: [true],
      showBChild: [],
      curCParentIndex: 0,
      curCIndex: 0,
      curBParentIndex: "",
      curBIndex: "",
      showRubbish: false
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
    if (!type) {
      curCIndex = i;
      curCParentIndex = index;
      curBIndex = "";
      curBParentIndex = "";
    } else {
      curCIndex = "";
      curCParentIndex = "";
      curBIndex = i;
      curBParentIndex = index;
    }

    this.props.setCategory(data.name);
    // console.log(this.props.term_list,curBParentIndex,);
    this.props.setCurrentSubjectid(
      this.props.term_list[curCParentIndex].children[curCIndex].book_id
    );
    this.setState({
      curCIndex: curCIndex,
      curCParentIndex: curCParentIndex,
      curBIndex: curBIndex,
      curBParentIndex: curBParentIndex
    });
    //传递选中的data
    this.props.SelectItem(data, type, index);
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
      this.props.showRubbish(rubbishList);
    } else {
      this.setState({
        showRubbish: false
      });
    }
  };
  render() {
    const {
      term_list,
      rubbish_list,

      showClass,
      showCChild,
      curCIndex,
      curCParentIndex,
      showRubbish,
      curBParentIndex
    } = this.state;
    //  console.log(showCChild);
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
                  <span className="item-title" title={TERM_KEY[item.term - 1]}>{TERM_KEY[item.term - 1]}</span>
                </div>
                {item.children.map((data, i) => (
                  <div
                    className={[
                      "slide-item final-item",
                      showCChild[index] ? "show" : "hide",
                      "hide-text"
                    ].join(" ")}
                    onClick={this.selectItem.bind(this, i, index, data, false)}
                    key={i}
                  >
                    <i className="iconfont icon-wenben show-icon item-icon" />
                    <span title={data.name}
                      className={[
                        "item-title",
                        curCIndex === i && curCParentIndex === index
                          ? "active"
                          : ""
                      ].join(" ")}
                    >
                      {data.name}
                    </span>
                  </div>
                ))}
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
                  onClick={this.selectItem.bind(this, "", index, item, true)}
                >
                  <i className="iconfont icon-wenben show-icon item-icon" />
                  <span
                    className={[
                      "item-title",
                      curBParentIndex === index ? "active" : ""
                    ].join(" ")}
                  >
                    {item.name}
                  </span>
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

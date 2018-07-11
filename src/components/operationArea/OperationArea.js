import React, { Component } from "react";
import "./operationArea.less";
import { Button, Modal, Checkbox } from "antd";
import Editor from "../editor/Editor";
import { getNoteContent } from "../../api/save";
export default class OperationArea extends Component {
  constructor(props) {
    super(props);
    const { classList } = this.props;
    const initialCheckedList = classList.reduce((obj, item) => {
      obj[item.id] = true;
      return obj;
    }, {});
    this.state = {
      currentSelect: 0,
      isIntegrating: false,
      isCheckedAll: true,
      content: {},
      checkedList: initialCheckedList // 当前被选中的
    };
  }
  // demo props
  // 切换的时候传一个新的key
  static defaultProps = {
    category: "计算机网络",
    classList: [
      { name: "7.7计算机网络", time: Date.now(), id: 0 },
      { name: "7.9计算机网络", time: Date.now(), id: 1 }
    ],
    deleteFn: id => {
      console.log(id);
    }
  };
  delete = id => e => {
    const { deleteFn } = this.props;
    Modal.confirm({
      content: "是否决定删除此条笔记",

      onOk: () => deleteFn(id)
    });
  };
  select = id => async e => {
    if (id !== this.state.id) {
      this.setState({ currentSelect: id });
    }
    const content = await getNoteContent(id);
    //   console.log(JSON.parse(content));
    this.setState({ content: JSON.parse(content) });
  };

  checkAll = e => {
    const isAllChecked = e.target.checked;
    // console.log(isAllChecked, this.state.checkedList);
    this.setState(preState => {
      const o = Object.keys(preState.checkedList).reduce((obj, item) => {
        obj[item] = isAllChecked;
        return obj;
      }, {});
      return { isCheckedAll: isAllChecked, checkedList: o };
    });
  };
  integrate = () => {
    this.setState({ isIntegrating: true });
  };
  cancalInterate = () => {
    this.setState({ isIntegrating: false });
  };
  handleIntegrate = () => {
    console.log(this.state.checkedList);
  };
  getNoteDate = () => {};
  handleCheckBox = id => e => {
    this.setState(preState => ({
      checkedList: {
        ...preState.checkedList,
        [id]: e.target.checked
      }
    }));
  };
  render() {
    const { category, classList } = this.props;
    const {
      currentSelect,
      isIntegrating,
      isCheckedAll,
      checkedList,
      content
    } = this.state;
    return (
      <div className="operation-container">
        <div className="left-container">
          <div className="category">{category}</div>

          {classList.map(item => (
            <div className="item" key={item.id} onClick={this.select(item.id)}>
              {/* todo checkbox受控 */}
              <Checkbox
                onChange={this.handleCheckBox(item.id)}
                checked={!!checkedList[item.id]}
                style={{ visibility: isIntegrating ? "visible" : "hidden" }}
              />
              {item.isKeyNote ? <Icon type="star-o" /> : null}
              <span className={item.id === currentSelect ? "selected" : ""}>
                {item.title}
                {/* {new Date(item.time).toDateString()} */}
              </span>
              <span onClick={this.delete(item.id)}>
                <i className="iconfont icon-shanchu" />
              </span>
            </div>
          ))}

          {isIntegrating ? (
            <React.Fragment>
              <Checkbox checked={isCheckedAll} onChange={this.checkAll}>
                全选
              </Checkbox>
              <div className="button-list">
                <Button type="primary" onClick={this.handleIntegrate}>
                  确定
                </Button>
                <Button onClick={this.cancalInterate}>取消</Button>
              </div>
            </React.Fragment>
          ) : (
            <Button
              type="primary"
              style={{ width: "40%", marginLeft: "17px" }}
              onClick={this.integrate}
            >
              重点整合
            </Button>
          )}
        </div>
        <Editor
          initialContent={content}
          contentId={currentSelect}
          name={classList[currentSelect] && classList[currentSelect].name}
        />
      </div>
    );
  }
}

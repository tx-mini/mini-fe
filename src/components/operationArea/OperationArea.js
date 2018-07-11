import React, { Component } from "react";
import "./operationArea.less";
import { Button, Modal, Checkbox, Icon, message } from "antd";
import Editor from "../editor/Editor";
import { getNoteContent, removeNote } from "../../api/save";
export default class OperationArea extends Component {
  state = {
    currentSelect: 0,
    isIntegrating: false,
    isCheckedAll: true,
    content: {},
    checkedList: {} // 当前被选中的
  };
  static getDerivedStateFromProps = (nextProps, prevState) => {
    // 处理整合选中相关的逻辑
    const { classList } = nextProps;
    if (!prevState.isIntegrating) {
      const initialCheckedList = classList.reduce((obj, item) => {
        obj[item.id] = true;
        return obj;
      }, {});
      return {
        //  currentSelect: classList[0] && classList[0].id,
        checkedList: initialCheckedList // 当前被选中的
      };
    } else {
      return null;
    }
  };

  delete = id => e => {
    Modal.confirm({
      content: "是否决定删除此条笔记",

      onOk: async () => {
        const { code, result } = removeNote(id);
        if (code === 0) {
          message.info("删除笔记成功");
        } else {
          message.info(result.message);
        }
      }
    });
  };
  select = id => async e => {
    if (id !== this.state.id) {
      const content = await getNoteContent(id);
      //   console.log(JSON.parse(content));
      this.setState({ currentSelect: id, content: JSON.parse(content) });
    }
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
    e.stopPropagation();
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
              <span onClick={e => e.stopPropagation()}>
                <Checkbox
                  onChange={this.handleCheckBox(item.id)}
                  checked={!!checkedList[item.id]}
                  style={{ visibility: isIntegrating ? "visible" : "hidden" }}
                />
              </span>
              {item.isKeyNote ? <Icon type="star-o" /> : null}
              <span
                className={
                  item.id === currentSelect ? "selected content" : "content"
                }
              >
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

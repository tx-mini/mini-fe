import React, { Component } from "react";
import "./operationArea.less";
import { Button, Modal, Checkbox, Icon, message, Tooltip, Radio } from "antd";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import Editor from "../editor/Editor";
import { formatTime } from "./util";
import { getNoteContent, removeNote } from "../../api/save";

const RadioGroup = Radio.Group;
export default class OperationArea extends Component {
  state = {
    currentSelect: 0,
    isIntegrating: false,
    isCheckedAll: true,
    content: {},
    currentNoteName: "", // 当前选中的笔记征文题目
    checkedList: {}, // 当前被选中的
    modalVisible: false,
    radioValue: ""
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
  select = ({ id, title }) => async e => {
    if (id !== this.state.id) {
      const content = await getNoteContent(id);
      //   console.log(JSON.parse(content));
      this.setState({
        currentSelect: id,
        content: JSON.parse(content),
        currentNoteName: title
      });
    }
  };
  handleModalOk = () => {
    // 发送移动的笔记数据到后台
    this.setState({ modalVisible: false });
  };
  handleModalCancel = () => {
    // 取消
    this.setState({ modalVisible: false });
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
  handleRightClick = (e, data) => {
    // 相应右键点击出来的菜单的选择
    this.setState({ modalVisible: true });
    console.log(data);
  };
  stopPropagation = e => {
    e.stopPropagation();
  };
  onRadioChange = e => {
    this.setState({ radioValue: e.target.value });
  };
  render() {
    const { category, subject_list, isBrush } = this.props;
    const {
      currentSelect,
      isIntegrating,
      isCheckedAll,
      checkedList,
      content,
      currentNoteName,
      modalVisible,
      radioValue
    } = this.state;
    return (
      <div className="operation-container">
        <div className="left-container">
          <div className="category">{isBrush ? "回收站" : category}</div>

          {subject_list.map(item => (
            <ContextMenuTrigger id="xxxr">
              <div
                className="item"
                key={item.id}
                onClick={this.select({ id: item.id, title: item.title })}
              >
                {/* todo checkbox受控 */}
                <span onClick={this.stopPropagation}>
                  <Checkbox
                    onChange={this.handleCheckBox(item.id)}
                    checked={!!checkedList[item.id]}
                    style={{ visibility: isIntegrating ? "visible" : "hidden" }}
                  />
                </span>
                {item.isKeyNote ? (
                  <Icon type="star-o" className="star-icon" />
                ) : (
                  <span className="star-icon" />
                )}
                <span
                  className={
                    item.id === currentSelect ? "selected content" : "content"
                  }
                >
                  <Tooltip title={item.value || item.title}>
                    {(item.value || item.title).slice(0, 6)}
                  </Tooltip>
                </span>
                {isBrush ? (
                  <span>
                    <i className="iconfont icon-shanchu icon-rollback" />
                  </span>
                ) : (
                  <span onClick={this.delete(item.id)}>
                    <i className="iconfont icon-shanchu" />
                  </span>
                )}
                <span className="time">{formatTime(Date.now())}</span>
              </div>
            </ContextMenuTrigger>
          ))}
          <ContextMenu id="some">
            <MenuItem data={{ foo: "bar" }} onClick={this.handleRightClick}>
              移动到
            </MenuItem>
          </ContextMenu>
          <Modal
            title="移动到"
            visible={modalVisible}
            onOk={this.handleModalOk}
            onCancel={this.handleModalCancel}
          >
            <RadioGroup onChange={this.onRadioChange} value={radioValue}>
              {subject_list.map(item => (
                <Radio value={item.value}>{item.value}</Radio>
              ))}
            </RadioGroup>
          </Modal>
          {isBrush ? null : (
            <div className="operation">
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
                  style={{ marginLeft: "17px" }}
                  onClick={this.integrate}
                >
                  重点整合
                </Button>
              )}
            </div>
          )}
        </div>
        <Editor
          initialContent={content}
          contentId={currentSelect}
          name={currentNoteName}
          isBrush={isBrush}
        />
      </div>
    );
  }
}

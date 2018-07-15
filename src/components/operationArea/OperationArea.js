import React, { Component } from "react";
import "./operationArea.less";
import { Button, Modal, Checkbox, Icon, message, Tooltip, Radio } from "antd";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import Editor from "../editor/Editor";
import { formatTime } from "./util";
import { getNoteContent, createNote, modNote } from "../../api/save";
import { filterSomeImportantnce } from "../editor/utils/index";
const RadioGroup = Radio.Group;
export default class OperationArea extends Component {
  state = {
    currentSelect: 0, // 当前选中的book id
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
    const { dataList } = nextProps;
    if (!prevState.isIntegrating) {
      const initialCheckedList = dataList.reduce((obj, item) => {
        obj[item.note_id] = true;
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

  delete = note_id => e => {
    Modal.confirm({
      content: "是否决定删除此条笔记",

      onOk: async () => {
        console.log(note_id);
        const result = await getNoteContent(note_id);
        await modNote({ ...result, is_rubbish: 1 });
        // 刷新下状态
        message.info("删除笔记成功");
      }
    });
  };
  select = ({ note_id, name }) => async e => {
    console.log(note_id, name); ////////////
    if (note_id !== this.state.note_id) {
      const result = await getNoteContent(note_id);
      //   console.log(JSON.parse(content));
      //  console.log(content);
      this.setState({
        currentSelect: note_id,
        content: JSON.parse(result.content),
        currentNoteName: name
      });
    } else {
      this.setState({ currentNoteName: name, currentSelect: Math.random() });
    }
  };
  handleModalOk = e => {
    // 发送移动的笔记数据到后台
    console.log(this.state.radioValue);
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
  handleIntegrate = async () => {
    const { checkedList } = this.state;
    const trueList = Object.keys(checkedList).filter(item => checkedList[item]); // 当前选中的整合的id的数组
    // 查询真的内容
    const importantContent = await filterSomeImportantnce(trueList);

    const { status } = await createNote({
      content: JSON.stringify(importantContent),
      name: `整合笔记-${Date.now()}`,
      book_id: this.props.currentSubjectid, //
      is_imp: 1
    }); //book_id
    if (status == 1) {
      message.info("整合成功");
      this.cancalInterate();
    }
  };
  getNoteDate = () => {};
  handleCheckBox = note_id => e => {
    e.stopPropagation();
    this.setState(preState => ({
      checkedList: {
        ...preState.checkedList,
        [note_id]: e.target.checked
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
    const {
      category,
      dataList,
      isRubbish,
      term_list,
      index,
      newNote,
      currentSubjectid
    } = this.props;
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
          <div className="category" title={isRubbish ? "回收站" : category}>
            {isRubbish ? "回收站" : category}
          </div>

          {dataList.map(item => (
            <ContextMenuTrigger id="some" key={item.note_id}>
              <div
                className="item"
                onClick={this.select({
                  note_id: item.note_id,
                  name: item.name
                })}
              >
                {/* todo checkbox受控 */}
                <span onClick={this.stopPropagation}>
                  <Checkbox
                    onChange={this.handleCheckBox(item.note_id)}
                    checked={!!checkedList[item.note_id]}
                    style={{ visibility: isIntegrating ? "visible" : "hidden" }}
                  />
                </span>
                {item.is_imp == 1 ? (
                  <Icon type="star-o" className="star-icon" />
                ) : (
                  <span className="star-icon" />
                )}
                <span
                  className={
                    item.note_id === currentSelect
                      ? "selected content"
                      : "content"
                  }
                >
                  <Tooltip title={item.name}>{item.name.slice(0, 6)}</Tooltip>
                </span>
                {isRubbish ? (
                  <span>
                    <i className="iconfont icon-shanchu icon-rollback" />
                  </span>
                ) : (
                  <span onClick={this.delete(item.note_id)}>
                    <i className="iconfont icon-shanchu" />
                  </span>
                )}
                <span className="time">
                  {formatTime(item.recent_time * 1000)}
                </span>
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
              {term_list[index] &&
                term_list[index].children.map(item => (
                  <Radio
                    value={item.book_id}
                    key={item.book_id}
                    style={{ display: "block" }}
                  >
                    {item.name}
                  </Radio>
                ))}
            </RadioGroup>
          </Modal>
          {isRubbish || newNote ? null : (
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
          isRubbish={isRubbish}
          newNote={newNote}
          currentSubjectid={currentSubjectid}
        />
      </div>
    );
  }
}

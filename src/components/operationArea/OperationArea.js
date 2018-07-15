import React, { Component } from "react";
import "./operationArea.less";
import { Button, Modal, Checkbox, Icon, message, Tooltip, Radio } from "antd";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import Editor from "../editor/Editor";
import { formatTime } from "./util";
import {
  getNoteContent,
  createNote,
  modNote,
  deleteFinally
} from "../../api/save";
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
    radioValue: "",
    dataList: []
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

  delete = note_id => () => {
    const { dataList } = this.props;
    Modal.confirm({
      content: "是否决定删除此条笔记",

      onOk: async () => {
        console.log(note_id);
        const result = await getNoteContent(note_id);
        await modNote({ ...result, is_rubbish: 1 });
        // 刷新下状态
        message.info("删除笔记成功");
        setTimeout(() => {
          let newList = dataList;
          let index;
          //找到当前item在dataList中的下标，更新list
          for (let i = 0; i < dataList.length; i++) {
            if (dataList[i].note_id === note_id) {
              index = i;
            }
          }
          newList.splice(index, 1);
          this.setState({
            dataList: newList
          });
        });
      }
    });
  };
  deleteFinally = note_id => () => {
    const { dataList } = this.props;
    Modal.confirm({
      content: "是否决定彻底删除此条笔记",

      onOk: async () => {
        await deleteFinally(note_id);
        // 刷新下状态
        message.info("删除笔记成功");
        setTimeout(() => {
          let newList = dataList;
          let index;
          //找到当前item在dataList中的下标，更新list
          for (let i = 0; i < dataList.length; i++) {
            if (dataList[i].note_id === note_id) {
              index = i;
            }
          }
          newList.splice(index, 1);
          this.setState({
            dataList: newList
          });
        });
      }
    });
  };
  rollback = item => async () => {
    console.log(item);
    const { dataList } = this.props;
    console.log(dataList);
    const result = await modNote({
      book_id: item.book_ref,
      is_bool: 1,
      note_id: item.note_id,
      name: item.name,
      content: item.content,
      is_imp: item.is_imp
    });
    console.log(result);
    message.info("放回成功");
    let newList = dataList || [];
    let index;
    //找到当前item在dataList中的下标，更新list
    for (let i = 0; i < dataList.length; i++) {
      if (dataList[i].note_id === item.note_id) {
        index = i;
      }
    }
    newList.splice(index, 1);
    this.setState({
      dataList: newList
    });
  };
  async componentDidMount() {
    console.log(this.props.dataList);
    if (this.props.dataList[0]) {
      const result = await getNoteContent(this.props.dataList[0].note_id);
      //   console.log(JSON.parse(content));
      //  console.log(content);
      this.setState({
        currentSelect: this.props.dataList[0].note_id,
        content: JSON.parse(result.content),
        currentNoteName: this.props.dataList[0].name
      });
    }
  }
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
  handleModalOk = async () => {
    // 发送移动的笔记数据到后台
    console.log();
    const { dataList } = this.props;
    const { currentSelect } = this.state;
    const result = await modNote({
      book_id: this.state.radioValue,
      is_bool: 0,
      note_id: dataList[currentSelect].note_id,
      name: dataList[currentSelect].name,
      content: dataList[currentSelect].content,
      is_imp: dataList[currentSelect].is_imp
    });
    console.log(result);
    message.info("移动成功");
    let newList = dataList;
    newList.splice(currentSelect, 1);
    this.setState({
      modalVisible: false,
      dataList: newList
    });
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
  handleRightClick = () => {
    // 相应右键点击出来的菜单的选择
    this.setState({ modalVisible: true });
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
      term_list,
      index,
      newNote,
      currentSubjectid,
      type
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
    console.log(dataList);
    const newdatalist = dataList.filter(item => item.is_rubbish == 0);
    return (
      <div className="operation-container">
        <div className="left-container">
          <Tooltip
            title={
              type === "rabbish"
                ? "回收站"
                : type === "term"
                  ? category
                  : "其他笔记"
            }
          >
            <div className="category">
              {type === "rabbish"
                ? "回收站"
                : type === "term"
                  ? category
                  : "其他笔记"}
            </div>
          </Tooltip>
          {newdatalist.map((item, index) => (
            <ContextMenuTrigger id="some" key={item.note_id || ""}>
              <div
                className="item"
                style={
                  type === "term" && item.is_rubbish == 1
                    ? { display: "none" }
                    : {}
                }
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
                {type === "rabbish" ? (
                  <div>
                    <span onClick={this.rollback(item)}>
                      <Tooltip title="放回原处">
                        <i className="iconfont icon-shanchu icon-rollback" />
                      </Tooltip>
                    </span>
                    <span onClick={this.deleteFinally(item.note_id)}>
                      <Tooltip title="彻底删除">
                        <i className="iconfont icon-shanchu" />
                      </Tooltip>
                    </span>
                  </div>
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
          {type === "rabbish" || newNote ? null : (
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
          initialContent={content || (newdatalist[0] && newdatalist[0].content)}
          contentId={
            currentSelect || (newdatalist[0] && newdatalist[0].note_id)
          }
          name={currentNoteName || (newdatalist[0] && newdatalist[0].name)}
          isRubbish={type === "rabbish"}
          newNote={newNote}
          currentSubjectid={currentSubjectid}
          type={type}
        />
      </div>
    );
  }
}

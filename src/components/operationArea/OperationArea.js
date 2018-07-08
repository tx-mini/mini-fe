import React, { Component } from "react";
import "./operationArea.less";
import { Button, Modal, Checkbox } from "antd";
import Editor from "../editor/Editor";

const CheckboxGroup = Checkbox.Group;
export default class OperationArea extends Component {
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

  state = {
    currentSelect: 0,
    isIntegrating: false
  };
  delete = id => e => {
    const { deleteFn } = this.props;
    Modal.confirm({
      content: "是否决定删除此条笔记",

      onOk: () => deleteFn(id)
    });
  };
  select = id => e => {
    this.setState({ currentSelect: id });
  };

  integrate = () => {
    this.setState({ isIntegrating: true });
  };
  cancalInterate = () => {
    this.setState({ isIntegrating: false });
  };
  getNoteDate = () => {};
  render() {
    const { category, classList } = this.props;
    const { currentSelect, isIntegrating } = this.state;
    return (
      <div className="operation-container">
        <div className="left-container">
          <div className="category">{category}</div>
          {classList.map(item => (
            <div className="item" key={item.id} onClick={this.select(item.id)}>
              <span className={item.id === currentSelect ? "selected" : ""}>
                {item.name}
              </span>
              <span onClick={this.delete(item.id)}>删除icon</span>
            </div>
          ))}
          {isIntegrating ? (
            <div>
              <Button type="primary">确定</Button>
              <Button onClick={this.cancalInterate}>取消</Button>
            </div>
          ) : (
            <Button type="primary" onClick={this.integrate}>
              重点整合
            </Button>
          )}
        </div>
        <Editor
          initialContent={`<div>${Math.random()}</div>`}
          contentId={classList[currentSelect].id}
          name={classList[currentSelect].name}
        />
      </div>
    );
  }
}

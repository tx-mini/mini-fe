import React from "react";
import BraftEditor from "braft-editor";
import "braft-editor/dist/braft.css";
import "./editor.less";
import html2pdf from "html2pdf.js";
import { Button, message } from "antd";
message.config({
  duration: 1.5
});
export default class Editor extends React.Component {
  state = {
    lastContentId: null
  };
  save = () => {
    const { contentId } = this.props;
    console.log("save");
  };

  timer = null; // 定时保存

  componentDidMount = () => {
    this.timer = setInterval(this.save, 10 * 60 * 1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.timer);
  };

  static getDerivedStateFromProps = (nextProps, prevState) => {
    // 如果contentid变了就重新开始定时器
    const { lastContentId } = prevState;
    if (nextProps.contentId !== lastContentId) {
      clearInterval(this.timer);
      this.timer = setInterval(this.save, 10 * 60 * 1000);
      return {
        lastContentId: nextProps.contentId
      };
    } else {
      return null;
    }
  };
  // 画重点
  mark = () => {
    //  重点标示 blocks对应项的 inlineStyleRanges 的对应项的style为	#C0392B

    // api似乎反了
    if (!this.editorInstance.selectionCollapsed()) {
      this.editorInstance.toggleSelectionColor("#C0392B");
    } else {
      message.error("请选中你需要标记的文字或图片");
    }
  };

  // 取消重点
  cancleMark = () => {
    if (!this.editorInstance.selectionCollapsed()) {
      this.editorInstance.toggleSelectionColor("#000000");
    } else {
      message.error("请选中你需要标记的文字或图片");
    }
  };

  //测试获取该页重点笔记
  getImportantnce = () => {
    const content = this.editorInstance.getContent("raw");

    const tc = JSON.parse(JSON.stringify(content));
    // 获取含有important的区间
    // todo 把那一段的样式也保留下。。有点麻烦好像
    const importantSum = [];
    tc.blocks.forEach(block => {
      const temp = [];
      block.inlineStyleRanges.forEach(inlineStyle => {
        // 一个区块的重点笔记在一个div里面

        if (inlineStyle.style === "COLOR-C0392B") {
          temp.push(
            `<span>${block.text.substr(
              inlineStyle.offset,
              inlineStyle.length
            )}</span>`
          );
        }
      });
      importantSum.push(temp.join(" "));
    });
    return importantSum;
  };

  output = () => {
    // html2pdf(document.getElementsByClassName("BraftEditor-content")[0]);
    const element = document.getElementsByClassName("BraftEditor-content")[0];
    const opt = {
      margin: 1,
      filename: `${Date.now()}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
    };
    html2pdf()
      .from(element)
      .set(opt)
      .save();
  };
  render() {
    const { initialContent, name, contentId } = this.props;
    const editorProps = {
      height: 500,
      contentFormat: "html",
      initialContent,
      onChange: this.handleChange,
      onRawChange: this.handleRawChange,
      contentId,
      media: {
        externalMedias: { image: true }
      },
      imageControls: {
        floatLeft: false,
        floatRight: false,
        alignLeft: false,
        alignCenter: false,
        alignRight: false,
        link: false,
        size: false
      },
      excludeControls: [
        "emoji",
        "superscript",
        "subscript",
        "remove-styles",
        "text-color",
        "link",
        "list_ol",
        "list_ul",
        "headings"
      ], // 禁用的默认功能
      extendControls: [
        {
          type: "button",
          text: "标为重点",
          html: '<span style="color:red;">标为重点</span>',
          hoverTitle: "标为重点",
          className: "preview-button",
          onClick: () => this.mark()
        },
        {
          type: "button",
          text: "取消重点",
          html: '<span style="color:red;">取消重点</span>',
          hoverTitle: "取消重点",
          className: "preview-button",
          onClick: () => this.cancleMark()
        }
      ],
      onSave: () => this.save()
    };

    return (
      <div className="editor-container">
        <div className="header">
          <span className="name">{name}</span>
          <div>
            <Button
              type="primary"
              onClick={this.save}
              style={{ marginRight: "10px" }}
            >
              保存
            </Button>
            <Button onClick={this.output}>导出PDF</Button>
          </div>
        </div>
        <BraftEditor
          ref={instance => (this.editorInstance = instance)}
          {...editorProps}
        />
      </div>
    );
  }

  handleChange = content => {
    console.log(content);
  };

  handleRawChange = rawContent => {
    console.log(rawContent);
  };
}

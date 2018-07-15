import React from "react";
import BraftEditor from "../../lib/draft/braft.js";
import "../../lib/draft/braft.css";
import "./editor.less";
import Image from "../image/Image.js";
import html2pdf from "html2pdf.js";
import { Button, message } from "antd";
import ContentEditable from "react-contenteditable";
import { modNote, getNoteContent, createNote } from "../../api/save";
import COS from "cos-js-sdk-v5";
import { SecretId, SecretKey, Bucket, Region } from "../../config";
const cos = new COS({
  SecretId,
  SecretKey
});
message.config({
  duration: 1.5
});
export default class Editor extends React.Component {
  state = {
    lastContentId: null,
    imgSrc: "",
    tempName: ""
  };
  save = async () => {
    // 调用 更新/添加 笔记接,

    // 判断是添加还是更新
    const { contentId: note_id, newNote, currentSubjectid } = this.props;
    const { tempName } = this.state;
    console.log(newNote);
    if (!newNote) {
      // 保存的
      const result = await getNoteContent(note_id);
      await modNote({
        ...result,
        name: tempName,
        is_bool: 1,
        content: JSON.stringify(this.editorInstance.getRawContent())
      });
      message.info("保存成功");
    } else {
      await createNote({
        book_id: currentSubjectid,
        name: tempName,
        content: JSON.stringify(this.editorInstance.getRawContent()),
        is_imp: 0,
        is_rubbish: 0
      });

      message.info("新建成功");
      this.props.createSuccess()
      this.editorInstance.clear();
      this.setState({ tempName: "" });
      console.log("新建", tempName, this.editorInstance.getRawContent());
      // 获取笔记本内容
    }

    //xxx();
    // const { contentId } = this.props;
    // const { tempName } = this.state;
    // console.log("save", contentId, tempName);
  };

  timer = null; // 定时保存

  componentDidMount = () => {
    this.timer = setInterval(this.save, 10 * 60 * 1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.timer);
  };
  componentWillReceiveProps = nextProps => {
    console.log(nextProps.contentId, this.props.contentId);
    if (nextProps.contentId !== this.props.contentId) {
      // 笔记切换了更新定时器
      this.setState({ tempName: nextProps.name });
      clearInterval(this.timer);
      this.timer = setInterval(this.save, 10 * 60 * 1000);
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

  handleTempNameChange = e => {
    this.setState({ tempName: e.target.value });
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
  imgFn = (img, key) => {
    // 挂载图片
    console.log(key, 222222222);
    this.currentKey = key;
    this.setState({ imgSrc: img.src });
  };
  handleImageClose = () => {
    // 卸载图片
    this.setState({ imgSrc: "" });
  };
  insertRecognizeResult = results => {
    // 将识别结果插入到图片的后面
    // results是数组，为识别的结果 每一项是字符串
    // 将识别出来的结果插入到富文本图片节点的后面
    console.log(results);
    const content = this.editorInstance.getRawContent();
    console.log(this.editorInstance.getRawContent());
    const newContent = JSON.parse(JSON.stringify(content));
    console.log(newContent, this.currentKey);
    for (let i = 0; i < newContent.blocks.length; i++) {
      if (newContent.blocks[i].key === this.currentKey) {
        console.log(1111);
        const oldBefore = newContent.blocks.slice(0, i + 1);
        const oldNext = newContent.blocks.slice(i + 1);
        const insert = [];
        results.result.forEach(text => {
          let obj = {
            data: {},
            depth: 0,
            entityRanges: [],
            inlineStyleRanges: [],
            type: "unstyled",
            key: Math.random()
              .toString(36)
              .slice(2, 7),
            text
          };
          insert.push(obj);
        });

        newContent.blocks = [...oldBefore, ...insert, ...oldNext];
        break;
      }
    }

    this.editorInstance.setContent(newContent, "raw");
    message.info("识别成功");
  };
  render = () => {
    const { initialContent, name, contentId, type } = this.props;

    const editorProps = {
      height: 500,
      contentFormat: "raw",
      initialContent,
      onChange: this.handleChange,
      onRawChange: this.handleRawChange,
      contentId,
      media: {
        externalMedias: { image: true },
        uploadFn: d => {
          const { file, success } = d;
          console.log(d);
          cos.sliceUploadFile(
            {
              Bucket: Bucket,
              Region: Region,
              Key: file.name,
              Body: file
            },
            function(err, data) {
              // console.log(err, data);
              //  success(data.location);
              // console.log(data);
              success({ url: "http://" + data.Location });
            }
          );
        }
      },
      disabled: type === "rabbish",
      imageControls: {
        floatLeft: false,
        floatRight: false,
        alignLeft: false,
        alignCenter: false,
        alignRight: false,
        link: false,
        size: false,
        custom: { fn: this.imgFn }
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
          html: '<span style="color:#79A9FC;">标为重点</span>',
          hoverTitle: "标为重点",
          className: "preview-button",
          onClick: () => this.mark()
        },
        {
          type: "button",
          text: "取消重点",
          html: '<span style="color:#79A9FC;">取消重点</span>',
          hoverTitle: "取消重点",
          className: "preview-button",
          onClick: () => this.cancleMark()
        }
      ],
      onSave: () => this.save()
    };
    const { imgSrc, tempName } = this.state;
    return (
      <div className="editor-container">
        <div className="header">
          {type === "rabbish" ? (
            <span className="name">{name}</span>
          ) : (
            <ContentEditable
              className="name"
              html={tempName || ""} // innerHTML of the editable div
              disabled={false} // use true to disable edition
              onChange={this.handleTempNameChange} // handle innerHTML change
            />
          )}

          {type === "rabbish" ? null : (
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
          )}
        </div>
        <BraftEditor
          ref={instance => (this.editorInstance = instance)}
          {...editorProps}
        />
        {imgSrc.length > 0 ? (
          <Image
            src={imgSrc}
            key={imgSrc}
            onImageClose={this.handleImageClose}
            onData={this.insertRecognizeResult}
          />
        ) : null}
      </div>
    );
  };

  handleChange = content => {
    // console.log(content);
  };

  handleRawChange = rawContent => {
    console.log(JSON.stringify(rawContent));
  };
}

import React, { Component } from "react";
import BraftEditor from "../../lib/draft/braft.js";
import "./share.less";
const raw = {
  blocks: [
    {
      key: "d5l3p",
      text: "123",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "9f3dc",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "3vq85",
      text: "xxxx",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "fgknl",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "uhbi",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "dk450",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "13li4",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "e783e",
      text: " ",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "6dsjs",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "6g1l5",
      text: "dsadasd",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "a2oet",
      text: " ",
      type: "atomic",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [{ offset: 0, length: 1, key: 1 }],
      data: {}
    },
    {
      key: "dpbis",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    }
  ],
  entityMap: {}
};
export default class Share extends Component {
  state = {
    initialContent: ""
  };
  render() {
    const { initialContent, contentId } = this.state;
    const editorProps = {
      height: 500,
      contentFormat: "raw",
      initialContent,
      contentId,
      media: {
        externalMedias: { image: true }
      },
      disabled: true,
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
      ] // 禁用的默认功能
    };

    return (
      <div className="share-container">
        {" "}
        <BraftEditor {...editorProps} />
      </div>
    );
  }
  componentDidMount = () => {
    const note_id = this.props.match.params.note_id;
    this.setState({
      initialContent: raw,
      contentId: note_id
    });
  };
}

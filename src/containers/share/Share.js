import React, { Component } from "react";
import BraftEditor from "../../lib/draft/braft.js";
import "./share.less";
import { getShare } from "../../api/save";

export default class Share extends Component {
  state = {
    initialContent: "",
    name: ""
  };
  render() {
    const { initialContent, name } = this.state;
    const editorProps = {
      height: 0,
      contentFormat: "raw",
      initialContent,
      contentId: initialContent.length > 0 ? initialContent : Math.random(),
      disabled: true
    };

    return (
      <div className="share-container">
        <h2>{name}</h2>
        <BraftEditor {...editorProps} />
      </div>
    );
  }
  componentDidMount = async () => {
    console.log(1111);
    const note_id = this.props.match.params.note_id;
    const { content, name } = await getShare(note_id);
    console.log(JSON.parse(content), note_id);
    this.setState({
      initialContent: JSON.parse(content),
      contentId: note_id,
      name
    });
  };
}

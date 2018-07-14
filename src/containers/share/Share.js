import React, { Component } from "react";
import { convertToHTML } from "draft-convert";
import { convertFromRaw } from "draft-js";
import "./share.less";
export default class Share extends Component {
  state = {
    html: ""
  };
  render() {
    const { html } = this.state;
    console.log(this.props.match.params.id);
    return <div className="share-container">{html}</div>;
  }
}

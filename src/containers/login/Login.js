import React, { Component } from "react";
import { Button } from "antd";
import img from "../../assets/img/Group.png";
import "./login.less";
import { login } from "../../api/save";
import QQ from "../../components/qq/QQ";
import { message } from "antd";
export default class Login extends Component {
  state = {
    photoVisible: false
  };
  toggle = () => {
    this.setState(pre => ({ photoVisible: !pre.photoVisible }));
  };
  jump = ({ nick }) => {
    // 对后台使用nick换取openid
    message.info("登录成功...正在跳转");
    // login
    this.props.history.replace("/", { nick });
  };
  render() {
    const { photoVisible } = this.state;
    return (
      <div className="login-container">
        <img src={img} />
        <Button className="login-button" size="large" onClick={this.toggle}>
          使用QQ登录
          {photoVisible ? (
            <QQ
              onData={this.jump}
              style={{ position: "absolute", left: "48px", top: "40px" }}
            />
          ) : null}
        </Button>
      </div>
    );
  }
}

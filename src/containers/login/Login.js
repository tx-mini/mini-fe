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
  jump = async ({ nick }) => {
    // 对后台使用nick换取openid
    const { logo_url, nick_name, openid } = await login(nick);
    message.info("登录成功...正在跳转");
    window.localStorage.setItem("openid", openid);
    window.localStorage.setItem("logo_url", logo_url);
    window.localStorage.setItem("nick_name", nick_name);
    // login
    this.props.history.replace("/");
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

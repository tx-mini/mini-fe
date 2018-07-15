import React from "react";
import "./header.css";
import logo from "../../assets/img/logo.png";

const Header = ({ logout }) => {
  return (
    <div className="header-bar">
      <div className="logo">
        <img
          src={window.localStorage.getItem("logo_url") || logo}
          className="logo-img"
          alt="logo"
        />
        <div className="logo-title">企鹅笔记</div>
      </div>
      <div className="logo">
        <div className="logo-title">
          {window.localStorage.getItem("nick_name")}
        </div>
        <div className="logo-title exit" onClick={logout}>
          退出
        </div>
      </div>
    </div>
  );
};
export default Header;

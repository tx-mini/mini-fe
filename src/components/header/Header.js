import React from "react";
import "./header.css";
import logo from "../../assets/img/logo.png";

const Header = ({ nick }) => {
  return (
    <div className="header-bar">
      <div className="logo">
        <img src={logo} className="logo-img" alt="logo" />
        <div className="logo-title">企鹅笔记</div>
      </div>
      <div className="logo">
        <div className="logo-title">{nick}</div>
        <div className="logo-title exit">退出</div>
      </div>
    </div>
  );
};
export default Header;

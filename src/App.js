import React, { Component } from "react";
import Login from "./containers/login/Login";
import Main from "./containers/main/Main";
import Share from "./containers/share/Share";
import { createHashHistory } from "history";
import { Router } from "react-router";
import "../node_modules/antd/dist/antd.css";
import { Route, Redirect, HashRouter } from "react-router-dom";
const history = createHashHistory();
class App extends Component {
  componentDidMount = () => {
    document.title = "企鹅笔记";
  };

  render() {
    return (
      <Router history={history}>
        <div>
          <Route
            exact
            path="/"
            render={props => {
              const openid = window.localStorage.getItem("openid");
              const isLogin = openid;
              if (isLogin) {
                return <Main history={history} />;
              } else {
                return (
                  <Redirect
                    to={{
                      pathname: "/login"
                    }}
                  />
                );
              }
            }}
          />
          <Route
            path="/login"
            render={props => {
              const openid = window.localStorage.getItem("openid");
              const isLogin = openid;
              if (isLogin) {
                return (
                  <Redirect
                    to={{
                      pathname: "/"
                    }}
                  />
                );
              } else {
                return <Login history={history} />;
              }
            }}
          />
          <Route component={Share} path="/share/:note_id" />
        </div>
      </Router>
    );
  }
}

export default App;

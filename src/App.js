import React, { Component } from "react";
import Login from "./containers/login/Login";
import Main from "./containers/main/Main";
import Share from "./containers/share/Share";
import { BrowserRouter, Route, Redirect, HashRouter } from "react-router-dom";
class App extends Component {
  render() {
    // 请求后台检测是否登录
    const openid = window.localStorage.getItem("openid");
    if (openid) {
      //
    }
    const isLogin = true,
      nick = "nick";

    return (
      <HashRouter>
        <div>
          {/* main页判断当前是否登录，未登录 */}
          <Route
            exact
            path="/"
            render={props => {
              if (isLogin) {
                return <Main nick={nick} />;
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
              if (isLogin) {
                return (
                  <Redirect
                    to={{
                      pathname: "/",
                      state: { nick }
                    }}
                  />
                );
              } else {
                return <Login />;
              }
            }}
          />
          <Route component={Share} path="/share/:id" />
        </div>
      </HashRouter>
    );
  }
}

export default App;

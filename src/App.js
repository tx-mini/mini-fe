import React, { Component } from "react";
import Login from "./containers/login/Login";
import Main from "./containers/main/Main";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
class App extends Component {
  render() {
    // 请求后台检测是否登录
    const isLogin = true,
      nick = "nick";
    return (
      <BrowserRouter>
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
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

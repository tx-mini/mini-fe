import React, { Component } from "react";
import Login from "./containers/login/Login";
import Main from "./containers/main/Main";
import Share from "./containers/share/Share";
import { BrowserRouter, Route, Redirect, HashRouter } from "react-router-dom";
class App extends Component {
  render() {
    const openid = window.localStorage.getItem("openid");
    const isLogin = openid;

    return (
      <HashRouter>
        <div>
          <Route
            exact
            path="/"
            render={props => {
              if (isLogin) {
                return <Main />;
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
                      pathname: "/"
                    }}
                  />
                );
              } else {
                return <Login />;
              }
            }}
          />
          <Route component={Share} path="/share/:note_id" />
        </div>
      </HashRouter>
    );
  }
}

export default App;

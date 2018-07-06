import React, { Component } from 'react';
import Login from "./containers/login/Login";
import Main from "./containers/main/Main";
import { BrowserRouter,Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
       <Route exact path="/" component={Main}/>
       <Route path="/login" component={Login} />
       </div>
      </BrowserRouter>
    );
  }
}

export default App;

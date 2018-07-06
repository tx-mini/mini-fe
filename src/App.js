import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
       <Route exact path="/"></Route>
       <Route path="/about" component={()=><div>123</div>} />
       </div>
      </BrowserRouter>
    );
  }
}

export default App;

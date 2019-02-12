import React, { Component } from 'react';
import NavigationBar from "./presentation/components/NavigationBar"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./presentation/pages/Home"
import About from "./presentation/pages/About"
import RegisterFoodPage from "./presentation/pages/RegisterFoodPage"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar/>
          <Route exact path="/" component={Home} />
          <Route path="/register-food" component={RegisterFoodPage} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

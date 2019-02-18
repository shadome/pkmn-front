import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./business/reducers/FoodReducer";

import NavigationBar from "./presentation/components/NavigationBar"
import Home from "./presentation/pages/Home"
import About from "./presentation/pages/About"
import RegisterFoodPage from "./presentation/pages/RegisterFoodPage"

// https://www.udemy.com/react-redux-tutoriel-pour-debutants-en-francais/ #26+: redux (extra: middleware for asyn REST API calls)
export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
        <BrowserRouter>
          <div className="App">
            <NavigationBar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/register-food" component={RegisterFoodPage} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

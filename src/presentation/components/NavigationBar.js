import React, {Component} from "react"
import { NavLink } from "react-router-dom"

class NavigationBar extends Component {
  render() {
    return (
      <nav className="nav-wrapper teal darken-1">
        <div className="container">
          <a className="brand-logo">Counter</a>
          <ul className="right">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/register-food">Register food</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavigationBar
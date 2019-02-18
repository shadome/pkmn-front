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
        {/* bootstrap:
        
              <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand">Counter</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register-food">Register food</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
       */}
      </nav>
    );
  }
}

export default NavigationBar
import React, {Component} from "react"

export default class SearchBar extends Component {
  state = {
    value: ""
  }
  handleChange(event) {
    this.setState({...this.state,
      value:event.target.value,
    })
    this.props.callback(event.target.value)
  }
  clearInput() {
    this.handleChange({target: {value: ""}})  // TODO efficace mais bof
  }
  render() {
    return (
        <div className="nav-wrapper my-border-search-bar">
          <div className="input-field">
            <input value={this.state.value} onChange={this.handleChange.bind(this)} id="search" type="search" placeholder="Search" required />
            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            <i className="material-icons" onClick={this.clearInput.bind(this)}>close</i>
          </div>
        </div>
    )
  }
}
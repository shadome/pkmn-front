import React, { Component } from "react"
import { connect } from "react-redux"
import M from "materialize-css"
import { postFood } from "../../business/actions/FoodActions"

class RegisterFoodPage extends Component {
  state = {}
  handleChange = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.id]: e.target.value
      }
    })
  }
  handleSubmit = (e) => {
    this.props.postFood(this.state.data)
    e.preventDefault();
  }
  // TODO: not compatible with the label atm
  // handleCalculate = (e) => {
  //   console.log("Displaying energy...")
  //   const energy =  
  //       isNaN(this.state.proteins) ? 0 : Number(this.state.proteins) * 4; //+ 
  //       // isNaN(this.state.carbohydrates) ? 0 : Number(this.state.carbohydrates) * 4 +
  //       // isNaN(this.state.fat) ? 0 : Number(this.state.fat) * 9 +
  //       // isNaN(this.state.ethanol) ? 0 : Number(this.state.ethanol) * 7;
  //   console.log(Number(this.state.proteins) * 4);
  //   console.log(isNaN(this.state.proteins))
  //   console.log(energy.toString())
  //   this.refs.energy.value = energy.toString()
  //   this.refs.energy.dispatchEvent(new Event("onClick"))
  //   // this.setState({
  //   //   ...this.state,
  //   //   energy: energy
  //   // })
  // }
  renderGeneralInformation() {
    return (
      <div>
        <div className="row">
          <div className="input-field col s12 l6">
            <input required id="name" type="text" className="validate" onChange={this.handleChange} />
            <label htmlFor="name">Food name</label>
          </div>
          <div className="input-field col s12 l6">
            <script type="text/javascript">
              {document.addEventListener("DOMContentLoaded", function () {
                var elems = document.querySelectorAll("select");
                M.FormSelect.init(elems, {});
              })}
              {document.addEventListener("DOMContentLoaded", function() {
                var elems = document.querySelectorAll(".dropdown-trigger");
                M.Dropdown.init(elems, {});
              })}
            </script>
            <select defaultValue="choose" id="category" onChange={this.handleChange}>
              <option value="choose" disabled>Choose a category</option>
              <option value="fruits">Fruits</option>
              <option value="vegetables">Vegetables</option>
              <option value="legumes">Legumes</option>
              <option value="nuts">Nuts</option>
              <option value="cereals">Cereals</option>
              <option value="fats">Oils</option>
              <option value="sugar">Sugar based</option>
              <option value="beverages">Beverages</option>
              <option value="misc">Miscellaneous</option>
            </select>
            <label>Food category</label>
          </div>
        </div>
        <div className="row">
          <a className="truncate dropdown-trigger btn" data-target="load_from_db">
            <i className="material-icons left">cloud_download</i>
            Load from database
          </a>
          <ul id="load_from_db" className="dropdown-content">
            <li><a href="/register-food">Ciqual"s (local)</a></li>
            <li><a href="/register-food">TBD Another database...</a></li>
            <li><a href="/register-food">TBD Another database...</a></li>
          </ul>
        </div>
      </div>
    );
  }
  renderMacronutrients() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m6">
            <div className="input-field">
              <input id="energy" ref="energy" type="text" className="validate" onChange={this.handleChange} />
              <label htmlFor="energy">Energy</label>
            </div>
          </div>
          {/* TODO: not compatible with the label atm
           <div className="col s12 m6">
            <a onClick={this.handleCalculate} className="truncate waves-effect waves-light btn">
              <i className="hide-on-small-only material-icons left">refresh</i>
              <span>Calculate</span>
            </a>
          </div> */}
        </div>
        <div className="row">
          <div className="input-field col s12 m6">
            <input id="proteins" type="text" className="validate" onChange={this.handleChange} />
            <label htmlFor="proteins">Proteins</label>
          </div>
          <div className="input-field col s12 m6">
            <input id="carbohydrates" type="text" className="validate" onChange={this.handleChange} />
            <label htmlFor="carbohydrates">Carbohydrates</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 m6">
            <input id="fat" type="text" className="validate" onChange={this.handleChange} />
            <label htmlFor="fat">Fat</label>
          </div>
          <div className="input-field col s12 m6">
            <input id="ethanol" type="text" className="validate" onChange={this.handleChange} />
            <label htmlFor="ethanol">Ethanol</label>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="col">
          <div className="row">
            <div className="card s12 col">
              <div className="col s12 l6">
                <div className="card-content col s12">
                  <span className="card-title grey-text text-darken-4">
                    General Information
                  </span>
                  {this.renderGeneralInformation()}
                </div>
              </div>
              <div className="col s12 l6">
                <div className="divider hide-on-large-only" />
                <div className="card-content col s12">
                  <span className="card-title grey-text text-darken-4">
                    Macronutrients
                  </span>
                  {this.renderMacronutrients()}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="s12 center-align col btn-large waves-effect waves-light" onClick={this.handleSubmit}>
              {/* <i className="material-icons left">send</i> */}
              Submit
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({
    ...state,
    pending: state.pending,
  }),
  (dispatch) => ({
    postFood: (x) => dispatch(postFood(x))
  })
)(RegisterFoodPage)
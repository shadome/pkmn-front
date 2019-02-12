import React, { Component } from "react"
import { Select } from "@material-ui/core"

// TODO ajouter un dropdown pour le choix de la catégorie de l'aliment
class RegisterFoodPage extends Component {
  render() {
    return (
      <div className="container">
        <form action="" className="col">
          <div className="card col"><div className="card-content">
              <span className="card-title grey-text text-darken-4">
                General information
              </span>
              <div className="card-content col">
                <div className="row">
              <div className="input-field col s12 l6">
                <input id="food_name" type="text" className="validate"/>
                <label htmlFor="food_name">Food name</label>
              </div>
              <div className="input-field col s12 l6">
                <input id="food_name2" type="text" className="validate"/>
                <label htmlFor="food_name2">Food name</label>
              </div> 
              </div>
              </div>
              </div>
  </div>
        </form>
          </div>
    );
  }
}

export default RegisterFoodPage
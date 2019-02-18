import React, {Component} from "react"
import { connect } from "react-redux"
import SearchBar from "../components/SearchBar"
import { getFoods } from "../../business/actions/FoodActions"

class Home extends Component {
  state = {}
  componentDidMount() {
    this.props.getFoods()
  }
  // https://www.udemy.com/react-redux-tutoriel-pour-debutants-en-francais/ #23: list and search bar
  applySearchOnFood(text) {
    const foodListToDisplay = text && text.length > 1
      ? this.props.foodList.filter(x => x.name.toUpperCase().indexOf(text.toUpperCase()) >= 0)
      : undefined
    this.setState({...this.state, 
      sortedFoodList: foodListToDisplay
    });
  }
  render() {
    const foodList = this.state.sortedFoodList || this.props.foodList
    return (
      <div className="container">
        <SearchBar callback={this.applySearchOnFood.bind(this)}/>
        <table className="highlight">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Energy (kcal/100g)</th>
              <th>Protein (g)</th>
              <th>Fat (g)</th>
              <th>Carbs (g)</th>
            </tr>
          </thead>
          <tbody>
          {!foodList ? <p>No results.</p> :
            foodList.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.energy}</td>
                  <td>{item.proteins}</td>
                  <td>{item.fat}</td>
                  <td>{item.carbohydrates}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  state => ({
    ...state,
    pending: state.pending,
    foodList: state.foodList,
  }),
  (dispatch) => ({
    getFoods: () => dispatch(getFoods())
  })
)(Home)
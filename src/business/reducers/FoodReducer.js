import * as Actions from "../actions/FoodActions"

const INITIAL_STATE = {
  foodList: [],
  pending: false,
  error: undefined,
}

export default function foodReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Actions.GET_FOODS_PENDING:
      return {...state,
        pending: true,
      }
    case Actions.GET_FOODS_SUCCESS:
      return {...state,
        pending: false,
        foodList: action.foodList
      }
    case Actions.POST_FOOD_PENDING:
      return {...state,
        pending: true,
      }
    case Actions.POST_FOOD_FAILURE:
      return {...state,
        pending: false,
        error: action.error
      }
    case Actions.POST_FOOD_SUCCESS:
      return {...state,
        pending: false,
      }
    default:
      return state
  }
}
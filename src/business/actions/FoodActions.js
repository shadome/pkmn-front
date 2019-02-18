import * as FoodServices from "../../proxies/FoodServices"

export const GET_FOODS_PENDING = "GET_FOODS_PENDING"
export const GET_FOODS_SUCCESS = "GET_FOODS_SUCCESS"
export const GET_FOODS_FAILURE = "GET_FOODS_FAILURE"
export const POST_FOOD_PENDING = "POST_FOOD_PENDING"
export const POST_FOOD_SUCCESS = "POST_FOOD_SUCCESS"
export const POST_FOOD_FAILURE = "POST_FOOD_FAILURE"

export function getFoods() {
  return (dispatch) => {
    dispatch({
      type: GET_FOODS_PENDING
    })
    return FoodServices.getFoods()
        .then((response) => {
          dispatch({
            type: GET_FOODS_SUCCESS,
            foodList: response,
          })
        })
  }
}

export function postFood(food) {
  return (dispatch) => {
    dispatch({
      type: POST_FOOD_PENDING
    })
    return FoodServices.postFood(food)
        .then((response) => {
          dispatch({
            type: POST_FOOD_SUCCESS,
            food: response
          })
        })
  }
}
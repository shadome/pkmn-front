import { promised } from "q";

const server = "http://localhost:4000"
// https://www.udemy.com/react-redux-tutoriel-pour-debutants-en-francais/ #16: REST call (get)
export async function getFoods() {
  return fetch(server + "/foods", {method: "GET"})
    .then(response => response.json())
}
// https://www.udemy.com/react-redux-tutoriel-pour-debutants-en-francais/ #16: REST call (post)
export async function postFood(food) {
  return fetch(
    server + "/foods", {
      "body": JSON.stringify(food),
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      "method": "POST"
    }
  ).then(response => response.json())
}
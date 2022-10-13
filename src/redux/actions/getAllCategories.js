import { GET_ALL_CATEGORIES } from '../constants'

const getAllCategories = () => {
    return function (dispatch) {
        return fetch('http://localhost:4000/api/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
          query {
            getCategories {
              name
            }
          }
        ` }),
        })
        .then(res => res.json())
        .then(json => {
                       sessionStorage.setItem('allCategories',JSON.stringify(json.data.getCategories))
                       dispatch({type: GET_ALL_CATEGORIES, payload: json.data.getCategories})
                      })
    } 
}
export default getAllCategories
import { GET_PRODUCTS_BY_CATEGORY } from '../constants'

const getProductsByCategory = (categoryInput = "all") => {

    //const CategoryInput = { input: { title: categoryInput}}
    const String = { name: categoryInput }

    return function (dispatch) {
        return fetch('http://localhost:4000/api/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                query ($name: String!){
                    getCategory (name: $name){
                        setId
                        name
                        inStock
                        gallery
                        description
                        category
                        attributes {
                          id
                          name
                          type
                          items {
                            displayValue
                            value
                            id
                          }
                        }
                        prices {
                          currency {
                            symbol
                            label
                          }
                          amount
                        }
                        brand
                    }
                }`,
            variables: String
        }),
        })
        .then(res => res.json())
        .then(json => {
                        console.log(json)
                        dispatch({type: GET_PRODUCTS_BY_CATEGORY, payload: json.data.getCategory})
                      })
    } 
}
export default getProductsByCategory
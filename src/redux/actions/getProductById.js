import { GET_PRODUCT_BY_ID } from '../constants'

const getProductById = (productId) => {
    const String = { productId: productId }

    return function (dispatch) {
        return fetch('http://localhost:4000/api/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
          query ($productId: String!) {
            getProduct(setId: $productId) {
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
                    label
                    symbol
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
                       sessionStorage.setItem('productDetails', JSON.stringify(json.data.getProduct))
                       dispatch({type: GET_PRODUCT_BY_ID, payload: json.data.getProduct})
                      })
    } 
}
export default getProductById
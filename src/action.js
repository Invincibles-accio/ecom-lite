import * as actionTypes from './actionTypes';

export const fetchProductRequest = () => ({
    type: actionTypes.FETCH_PRODUCT_REQUEST
})

export const fetchProductSuccess = (product) => ({
    type: actionTypes.FETCH_PRODUCT_SUCCESS,
    payload: product
})

export const fetchProductFailure = (error) => ({
    type: actionTypes.FETCH_PRODUCT_FAILURE,
    payload: error
})

export const addToCart= (product) => (
    {
        type: actionTypes.ADD_TO_CART,
        payload: product
    }
)

export const removeFromCart= (productId) => (
    {
        type: actionTypes.ADD_TO_CART,
        payload: productId
    }
)

export const clearCart= () => (
    {
        type: actionTypes.CLEAR_CART,
       
    }
)

export const fetchProduct = () => async (dispatch) => {
    dispatch(fetchProductRequest)
    try{
        const reponse = await axios.get("https://dummyjson.com/products")
        dispatch(fetchProductSuccess(reponse.data))
    }
    catch(error){
        dispatch(fetchProductFailure(error.message))
    }
}

import { publicRequest, userRequest } from "../requestMethods"
import { 
  loginFailure, 
  loginStart, 
  loginSuccess, 
} from "./userRedux"
import { 
  getProductStart, 
  getProductSuccess, 
  getProductFailure,
  deleteProductStart,
  deleteProductFailure,
  deleteProductSuccess,
  updateProductStart,
  updateProductFailure,
  updateProductSuccess,
  addProductStart,
  addProductFailure,
  addProductSuccess
} from "./productRedux"

export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try{
    const res = await publicRequest.post('auth/login', user)
    dispatch(loginSuccess(res.data))
    return res.data
  }catch(err){
    dispatch(loginFailure())
  }
}

// GET PRODUCT
export const getProducts = async (dispatch) => {
  dispatch(getProductStart())
  try{
    const res = await publicRequest.get('products')
    dispatch(getProductSuccess(res.data))
  }catch(err){
    dispatch(getProductFailure())
  }
}

// DELETE PRODUCT
export const deleteProducts = async (dispatch, id) => {
  dispatch(deleteProductStart())
  try{
    const res = await userRequest.delete(`products/${id}`)
    dispatch(deleteProductSuccess(id))
  }catch(err){
    dispatch(deleteProductFailure())
  }
}

// UPDATE PRODUCT
export const updateProducts = async (id, product, dispatch) => {
  dispatch(updateProductStart())
  try{
    const res = await userRequest.put(`products/${id}`, product)
    console.log('About to be deleted product',product)
    dispatch(updateProductSuccess({id, product}))
  }catch(err){
    dispatch(updateProductFailure())
  }
}

// ADD PRODUCT
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart())
  try{
    const res = await userRequest.post(`products`, product)
    dispatch(addProductSuccess(res.data))
  }catch(err){
    dispatch(addProductFailure())
  }
}
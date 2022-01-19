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
  deleteProductSuccess
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

// DELET PRODUCT
export const deleteProducts = async (dispatch, id) => {
  dispatch(deleteProductStart())
  try{
    const res = await userRequest.delete(`products/${id}`)
    dispatch(deleteProductSuccess(id))
  }catch(err){
    dispatch(deleteProductFailure())
  }
}
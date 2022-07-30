
import { _postApi } from "./api";
import {
  ADD_CART,
  CART_ITEM,
  CARTS_LIST,
  UPDATE_CART,
  DELETE_CART,
  ORDER_ERROR,
  ORDER_RESP
} from "./type";

export function addCart(payload = {}) {
  return (dispatch) => {
    dispatch({ type: ADD_CART, payload })
  }
}
export function updateCart(payload = {}) {
  return (dispatch) => {
    dispatch({ type: UPDATE_CART, payload })
  }
}

export function deleteCart(payload = {}) {
  return (dispatch) => {
    dispatch({ type: DELETE_CART, payload })
  }
}

export const newOrder = (data={}) =>{

  return (dispatch) => {
  _postApi('/orders/walk-in',data, (resp)=>{

    dispatch({ type: ORDER_RESP, payload:resp.data })
  },(error)=>{

    dispatch({ type: ORDER_ERROR, payload:error})
  })
  } 
}
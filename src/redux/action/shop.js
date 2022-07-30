
import {
  ADD_CART,
  CART_ITEM,
  CARTS_LIST,
  UPDATE_CART,
  DELETE_CART
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
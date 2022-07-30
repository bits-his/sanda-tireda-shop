import { CARTS_LIST, CART_ITEM, ADD_CART, UPDATE_CART, 
    DELETE_CART,
    ORDER_ERROR
 } from "../action/type";

const initialState = {
    carts: [],
    cart: {},
    error:{}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CARTS_LIST:
            return {
                ...state,
                carts: action.payload,
            };
        case ADD_CART:
            return {
                ...state,
                carts: [...state.carts, action.payload],
                cart:action.payload
            };
        case CART_ITEM:
            return {
                ...state,
                cart: action.payload,
            };
        case UPDATE_CART:
            return {
                ...state,
                carts: [...state.carts.filter((ct)=>ct.item_code!==action.payload.item_code),action.payload ],
                cart:action.payload
            };
        case DELETE_CART:
            return {
                ...state,
                carts: [...state.carts.filter((ct)=>ct.item_code!==action.payload.item_code) ]
            };
        case ORDER_ERROR:
            return {
                ...state,
                error:action.payload
            }
        default: return state
    }
}
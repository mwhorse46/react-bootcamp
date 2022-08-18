import { DECREMENT, INCREMENT, RESET } from "./actions";




export const countReducer = (state, action) => {

    // if(action.type === INCREMENT) {
    //   return state + action.payload;
    // } else {
    //   return state;
    // }

    const {type, payload} = action;
    switch (type) {

    case INCREMENT:
        return state + payload;

    case DECREMENT:
        return state - payload;

    case RESET:
        return payload;

    default:
        return state;
    }

}



























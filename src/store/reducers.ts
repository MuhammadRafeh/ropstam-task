import { combineReducers } from "redux";
import { AUTHENTICATE, LOGOUT } from "./actions";

//auth initial State and Reducer
const initialStateAuth = {
    email: '',
    token: ''
}

const authReducer = (state = initialStateAuth, action: any) => {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                email: action.payload.email,
                token: action.payload.token
            }
        case LOGOUT:
            return initialStateAuth;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    auth: authReducer
})

export default rootReducer

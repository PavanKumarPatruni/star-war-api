import {
    LOGIN_USER,
    LOGOUT_USER,
    ADD_MESSAGE

} from './actions';

let initState = {
    isLogin: false,
    messages: [],
    user: ""
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_USER : {
            let  { isLogin } = state;
            isLogin = !isLogin;
            let { user } = action;
            return Object.assign({}, state, { user, isLogin });
        }
        case LOGOUT_USER : {
            let  { isLogin, userName } = state;
            isLogin = !isLogin;
            userName = "";
            return Object.assign({}, state, { userName, isLogin });
        }
        case ADD_MESSAGE: {
            let  { messages } = state;
            let { message } = action;
            messages.push(message);
            return Object.assign({}, state, { messages });
        }
        default:
            return state;
    }
};

export default reducer;
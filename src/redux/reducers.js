import {
    LOGIN_USER,
    LOGOUT_USER

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
            const { user } = action;
            return Object.assign({}, state, { user, isLogin });
        }
        case LOGOUT_USER : {
            let  { isLogin, userName } = state;
            isLogin = !isLogin;
            userName = "";
            return Object.assign({}, state, { userName, isLogin });
        }
   
        default:
            return state;
    }
};

export default reducer;
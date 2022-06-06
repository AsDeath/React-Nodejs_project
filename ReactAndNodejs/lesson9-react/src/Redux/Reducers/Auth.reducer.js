import { POST_SIGNIN, POST_SIGNUP, LOGIN_DATA, VERIFY_TOKEN } from "../action.types"

const defUserData = {
    user: {},
    verifiedUser: {}
}

const ClientsReducer = (state = defUserData, action) => {
    switch(action.type){
        case POST_SIGNIN:
            return {...state, user: action.user};
        case VERIFY_TOKEN:
            return {...state, verifiedUser: action.verifiedUser}
        /* case POST_SIGNUP: 
            //console.log({...state, clients: action.newClient});
            return {...state, clients: action.newClient};
        case LOGIN_DATA:
            return {...state, login_data: action.login_data} */
        default:
            return state;
    }
}

export default ClientsReducer;
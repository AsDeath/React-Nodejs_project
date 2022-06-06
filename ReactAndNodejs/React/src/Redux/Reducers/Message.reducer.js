import { SET_MESSAGE } from "../action.types"

const defMessage = {
    message: []
}

const MessageReducer = (state = defMessage, action) => {
    switch(action.type){
        case SET_MESSAGE:
            return {...state, message: action.message};
        default:
            return state;
    }
}

export default MessageReducer;
const { VerifyToken } = require("../../Api/Api")
const { VERIFY_TOKEN, SET_MESSAGE } = require("../action.types");

export const verifyToken = (token) => {
    return async dispatch => {
        const user = await VerifyToken(token);
        if(user.message){
            dispatch({type: SET_MESSAGE, message: [user.message]})
        }else{
            dispatch({type: VERIFY_TOKEN, verifiedUser: user })
        }
    }
}
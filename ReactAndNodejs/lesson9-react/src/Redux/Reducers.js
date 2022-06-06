import { combineReducers } from "redux";
import AuthReducer from "./Reducers/Auth.reducer";
import MessageReducer from "./Reducers/Message.reducer";
import DataReducer from "./Reducers/Data.reducer";


const rootReducer = combineReducers({
    data: DataReducer,
    auth: AuthReducer,
    message: MessageReducer
});

export default rootReducer;
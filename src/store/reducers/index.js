import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import commonReducer from "./commonReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    common: commonReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import firstModuleReducer from "./reducers/firstModuleReducer";

const reducers = combineReducers({
    firstModuleReducer
});

const store = createStore(reducers);

export default store;
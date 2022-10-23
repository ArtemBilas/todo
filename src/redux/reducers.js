import {combineReducers} from "redux";
import {todoReducer as todos} from "./todosReducer/reducer";

const reducers = combineReducers({
    todos
});

export default reducers;
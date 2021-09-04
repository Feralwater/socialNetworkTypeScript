import {combineReducers, createStore} from "redux";
import {postsReducer} from "./posts-reducer";
import {dialogsReducer} from "./dialogs-reducer";

const rootReducer = combineReducers({
    postsReducer,
    dialogsReducer
})
const store = createStore(rootReducer);

export default store;
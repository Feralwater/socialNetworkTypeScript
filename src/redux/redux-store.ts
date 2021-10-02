import {combineReducers, createStore} from "redux";
import {postsReducer} from "./posts-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {exploreReducer} from "./explore-reducer";

const rootReducer = combineReducers({
    postsReducer,
    dialogsReducer,
    exploreReducer
})
const store = createStore(rootReducer);

export default store;
import {combineReducers, createStore} from "redux";
import {postsReducer} from "./posts-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";

const rootReducer = combineReducers({
    postsReducer,
    dialogsReducer,
    usersReducer: usersReducer
})
const store = createStore(rootReducer);

export default store;

export type AppStateType = ReturnType<typeof rootReducer>

import { combineReducers, createStore } from "redux";
import { chatPageReducers } from "./chat-reducer";
import { serversPageReducer } from "./servers-reducer";
import { badCamsPageReducers } from "./badCams-reducer";
import { camsListPageReducers } from "./camsList-reducer";
import { usersPageReducer } from "./users-reducer";

let reducers = combineReducers({
    chat: chatPageReducers,
    serversPage: serversPageReducer,
    badCamsPage: badCamsPageReducers,
    camsListPage: camsListPageReducers,
    usersPage: usersPageReducer
    
})

let store = createStore(reducers);


export default store;

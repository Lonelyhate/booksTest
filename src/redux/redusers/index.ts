import { combineReducers } from "redux";
import { bookPageReducer } from "./bookPage";
import { searchReducer } from "./search";

export const rootReducer = combineReducers({
    search: searchReducer,
    bookPage: bookPageReducer
})

export type rootState = ReturnType<typeof rootReducer>
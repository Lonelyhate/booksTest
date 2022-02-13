import { bookPageAction, BookPageActionTypes, bookPageState } from "../types/bookPage";

const initialState:bookPageState = {
    book: null,
    error: null,
    loading: false
}

export const bookPageReducer = (state = initialState, action: bookPageAction): bookPageState => {
    switch (action.type) {
        case BookPageActionTypes.CURRENT_BOOK:
            return {
                ...state,
                error: null,
                loading: true
            }
        case BookPageActionTypes.CURRENT_BOOK_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                book: action.payload
            }
        case BookPageActionTypes.CURRENT_BOOK_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
import { Dispatch } from "react"
import { IBook } from "../../types/types"
import { bookPageAction, BookPageActionTypes } from "../types/bookPage"

export const fetchBookPage = (book: IBook) => {
    return (dispatch: Dispatch<bookPageAction>) => {
        try {
            dispatch({
                type: BookPageActionTypes.CURRENT_BOOK
            })
            dispatch({
                type: BookPageActionTypes.CURRENT_BOOK_SUCCESS,
                payload: book
            })
        } catch(e) {
            dispatch({
                type: BookPageActionTypes.CURRENT_BOOK_ERROR,
                payload: 'Ошибка при открытие страницы'
            })
        }
    }
}
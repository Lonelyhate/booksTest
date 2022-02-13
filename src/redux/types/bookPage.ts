import { IBook } from '../../types/types';

export interface bookPageState {
    book: IBook | null;
    loading: boolean;
    error: string | null;
}

export enum BookPageActionTypes {
    CURRENT_BOOK = 'SET_BOOK',
    CURRENT_BOOK_SUCCESS = 'CURRENT_BOOK_SUCCESS',
    CURRENT_BOOK_ERROR = 'CURRENT_BOOK_ERROR',
}

interface fetchBookPageAction {
    type: BookPageActionTypes.CURRENT_BOOK;
}

interface fetchBookPageSuccessAction {
    type: BookPageActionTypes.CURRENT_BOOK_SUCCESS;
    payload: IBook;
}

interface fetchBookPageError {
    type: BookPageActionTypes.CURRENT_BOOK_ERROR;
    payload: string;
}

export type bookPageAction = fetchBookPageAction | fetchBookPageSuccessAction | fetchBookPageError;

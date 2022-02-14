import { IbooksApi, searchCateogries, searchSort } from '../../types/types';

export interface searchState {
    items: IbooksApi[];
    category: searchCateogries;
    sortingBy: searchSort;
    loading: boolean;
    error: string | null;
    stepPagination: number
    value: string
    totalItems: number | null
}

export enum SearchActionTypes {
    FETCH_BOOKS = 'FETCH_BOOKS',
    FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS',
    FETCH_LOAD_MORE = 'FETCH_LOAD_MORE',
    FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR',
    SAVE_VALUE = 'SAVE_VALUE',
    GET_CATEGORY = 'GET_CATEGORY',
    GET_SORTNG = 'GET_SORTNG',
}

interface fetchSearch {
    type: SearchActionTypes.FETCH_BOOKS;
}

interface fetchSearchSuccess {
    type: SearchActionTypes.FETCH_BOOKS_SUCCESS;
    payload: {
        books: IbooksApi[],
        totalItems: number
    }
}

interface fetchSearchError {
    type: SearchActionTypes.FETCH_BOOKS_ERROR;
    payload: string;
}

interface fetchValueSave {
    type: SearchActionTypes.SAVE_VALUE
    payload: string
}

interface fetchLoadMore {
    type: SearchActionTypes.FETCH_LOAD_MORE;
    payload: IbooksApi[];
}

interface getCategory {
    type: SearchActionTypes.GET_CATEGORY;
    payload: searchCateogries;
}

interface getSoring {
    type: SearchActionTypes.GET_SORTNG;
    payload: searchSort;
}

export type SearchAction =
    | fetchSearch
    | fetchSearchSuccess
    | fetchSearchError
    | fetchValueSave
    | getCategory
    | fetchLoadMore
    | getSoring;

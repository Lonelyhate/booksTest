import axios from 'axios';
import { Dispatch } from 'react';
import { searchCateogries, searchCateogriesOptions, searchSort } from '../../types/types';
import { SearchAction, SearchActionTypes } from '../types/search';

export const fetchBooks = (value: string, category: searchCateogries, sorting: searchSort) => {
    return async (dispatch: Dispatch<SearchAction>) => {
        try {
            dispatch({ type: SearchActionTypes.FETCH_BOOKS });
            const response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${value}${
                    category === searchCateogriesOptions.ALL ? '' : `+subject:${category}`
                }&orderBy=${sorting}&maxResults=30&=AIzaSyDBb68eIu9lumyo0tsbW2vflxTTIeLn6pw`,
            );
            dispatch({ type: SearchActionTypes.FETCH_BOOKS_SUCCESS, payload: response.data.items });
            dispatch({ type: SearchActionTypes.SAVE_VALUE, payload: value });
        } catch (e) {
            dispatch({
                type: SearchActionTypes.FETCH_BOOKS_ERROR,
                payload: 'Ошибка при получение книг',
            });
        }
    };
};

export const fetchLoadMoreBooks = (
    value: string,
    category: searchCateogries,
    sorting: searchSort,
    step: number,
) => {
    return async (dispatch: Dispatch<SearchAction>) => {
        try {
            dispatch({
                type: SearchActionTypes.FETCH_BOOKS,
            });
            const response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${value}${
                    category === searchCateogriesOptions.ALL ? '' : `+subject:${category}`
                }&orderBy=${sorting}&startIndex=${step}&maxResults=30&=AIzaSyDBb68eIu9lumyo0tsbW2vflxTTIeLn6pw`,
            );
            dispatch({
                type: SearchActionTypes.FETCH_LOAD_MORE,
                payload: response.data.items,
            });
        } catch (e) {
            dispatch({
                type: SearchActionTypes.FETCH_BOOKS_ERROR,
                payload: 'Не удалось',
            });
        }
    };
};

export const getCategory = (category: searchCateogries) => {
    return (dispatch: Dispatch<SearchAction>) => {
        dispatch({
            type: SearchActionTypes.GET_CATEGORY,
            payload: category,
        });
    };
};

export const getSorting = (sorting: searchSort) => {
    return (dispatch: Dispatch<SearchAction>) => {
        dispatch({
            type: SearchActionTypes.GET_SORTNG,
            payload: sorting,
        });
    };
};

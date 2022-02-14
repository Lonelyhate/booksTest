import { searchCateogriesOptions, searchSortOptions } from '../../types/types';
import { SearchAction, SearchActionTypes, searchState } from '../types/search';

const initialState: searchState = {
    items: [],
    category: searchCateogriesOptions.ALL,
    sortingBy: searchSortOptions.RELEVANCE,
    loading: false,
    error: null,
    stepPagination: 0,
    value: '',
    totalItems: null
};

export const searchReducer = (state = initialState, action: SearchAction): searchState => {
    switch (action.type) {
        case SearchActionTypes.FETCH_BOOKS:
            return {
                ...state,
                loading: true,
            };
        case SearchActionTypes.FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.books,
                totalItems: action.payload.totalItems,
                stepPagination: 30,
            };
        case SearchActionTypes.SAVE_VALUE:
            return {
                ...state,
                loading: false,
                value: action.payload,
            };
        case SearchActionTypes.FETCH_LOAD_MORE:
            return {
                ...state,
                loading: false,
                stepPagination: state.stepPagination + 30,
                items: [...state.items, ...action.payload],
            };
        case SearchActionTypes.FETCH_BOOKS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case SearchActionTypes.GET_CATEGORY: {
            return {
                ...state,
                loading: false,
                category: action.payload,
            };
        }
        case SearchActionTypes.GET_SORTNG: {
            return {
                ...state,
                loading: false,
                sortingBy: action.payload,
            };
        }
        default:
            return state;
    }
};

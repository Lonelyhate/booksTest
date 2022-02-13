import React, { FC } from 'react';
import s from './SearchSettings.module.scss';
import {
    searchCateogries,
    searchCateogriesOptions,
    searchSort,
    searchSortOptions,
} from '../../../types/types';
import Select from './Select/Select';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { getCategory, getSorting } from '../../../redux/actions/search';

const SearchSettings: FC = () => {
    const categories: searchCateogries[] = [
        searchCateogriesOptions.ALL,
        searchCateogriesOptions.ART,
        searchCateogriesOptions.BIOGRAPHY,
        searchCateogriesOptions.COMPUTERS,
        searchCateogriesOptions.HISTORY,
        searchCateogriesOptions.MEDICAL,
        searchCateogriesOptions.POETRY,
    ];

    const sorts: searchSort[] = [searchSortOptions.RELEVANCE, searchSortOptions.NEWEST];

    const dispatch = useDispatch();
    const { category, sortingBy } = useTypedSelector((state) => state.search);

    const onSelectCategory = (category: searchCateogries) => {
        dispatch(getCategory(category));
    };

    const onSelectSort = (sort: searchSort) => {
        dispatch(getSorting(sort));
    };

    return (
        <div className={s.searchSettings}>
            <Select
                onClickSetCategory={onSelectCategory}
                name="Categories"
                itemsCategory={categories}
                activeItem={category}
            />
            <Select
                onClickSetSort={onSelectSort}
                name="Sorting by"
                itemsSort={sorts}
                activeItem={sortingBy}
            />
        </div>
    );
};

export default SearchSettings;

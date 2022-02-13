import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import s from './Search.module.scss';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../../../redux/actions/search';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useNavigate } from 'react-router-dom';

const Search: FC = () => {
    const [isValue, setIsValue] = useState<string>('');
    const dispatch = useDispatch();
    const { category, sortingBy, value } = useTypedSelector((state) => state.search);
    const navigate = useNavigate()

    const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsValue(e.target.value);
    };



    const onClickSearchValue = () => {
        dispatch(fetchBooks(isValue, category, sortingBy));
        navigate('/')
    };
    
    return (
        <div className={s.search}>
            <input
                onKeyPress={(e) => e.key === 'Enter' && onClickSearchValue() }
                onChange={onChangeSearchValue}
                className={s.search__input}
                type="text"
                placeholder="Поиск по книгам..."
            />
            <button disabled={isValue ? false : true} onClick={onClickSearchValue} className={s.search__btn}>
                <FaSearch />
            </button>
        </div>
    );
};

export default Search;

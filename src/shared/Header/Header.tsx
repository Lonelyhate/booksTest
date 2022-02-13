import React, { FC } from 'react';
import Search from './Shearch/Search';
import s from './Header.module.scss';
import SearchSettings from './ShearchSettings/SearchSettings';

const Header: FC = () => {
    
    return (
        <header className={s.header}>
            <h1 className={s.header__title}>Search for books</h1>
            <Search/>
            <SearchSettings/>
        </header>
    );
};

export default Header;

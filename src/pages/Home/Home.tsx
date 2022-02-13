import React, { FC } from 'react';
import BooksList from './components/BookList/BooksList';
import s from './Home.module.scss';

const Home: FC = () => {
    return (
        <div className={s.home}>
            {' '}
            <BooksList />{' '}
        </div>
    );
};

export default Home;

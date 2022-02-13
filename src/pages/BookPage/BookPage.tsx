import React, { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import s from './BookPage.module.scss';
import BookPageItem from './components/BookPageItem/BookPageItem';

const BookPage: FC = () => {
    const { book, loading } = useTypedSelector((state) => state.bookPage);

    return (
        <div className={s.bookPage}>
            {book ? <BookPageItem book={book} /> : <h2 className={s.bookPage__title}>Found</h2>}
        </div>
    );
};

export default BookPage;

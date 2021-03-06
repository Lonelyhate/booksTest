import React, { FC } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import BookItem from './BookItem/BookItem';
import s from './BookList.module.scss';
import loadGif from '../../../../assets/images/gifs/loading.gif';
import { useDispatch } from 'react-redux';
import { fetchLoadMoreBooks } from '../../../../redux/actions/search';

const BooksList: FC = () => {
    const dispatch = useDispatch();
    const { items, loading, category, sortingBy, stepPagination, value, totalItems } =
        useTypedSelector((state) => state.search);

    let endBooks = false;
    if (items) {
        endBooks = items.length % 30 === 0;
    }

    const onClickLoadMore = () => {
        dispatch(fetchLoadMoreBooks(value, category, sortingBy, stepPagination));
    };

    return (
        <div className={[s.booksList, 'container'].join(' ')}>
            <h2 className={s.booksList__title}>
                {totalItems === null
                    ? 'Start searching'
                    : totalItems === 0
                    ? 'Nothing was found for your request'
                    : `Found ${totalItems} results`}
            </h2>
            {items && (
                <div className={s.booksList__content}>
                    {items.map((book) => (
                        <BookItem key={book.etag} book={book.volumeInfo} />
                    ))}
                </div>
            )}
            {loading && (
                <div className={s.booksList__loading}>
                    <img src={loadGif} alt="loading..." />
                </div>
            )}
            {items && items.length > 0 && !loading && endBooks && (
                <button onClick={onClickLoadMore} className={s.booksList__btn}>
                    Load More
                </button>
            )}
        </div>
    );
};

export default BooksList;

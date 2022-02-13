import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { fetchBookPage } from '../../../../../redux/actions/bookPage';
import { IBook, searchCateogriesOptions } from '../../../../../types/types';
import s from './BookItem.module.scss';

interface BookItemProps {
    book: IBook;
}

const BookItem: FC<BookItemProps> = ({ book }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onClickPage = () => {
        navigate(`/${book.title}`);
        dispatch(fetchBookPage(book));
    };

    return (
        <article onClick={onClickPage} className={s.bookItem}>
            <div className={s.bookItem__img}>
                {book.imageLinks ? (
                    <img src={book.imageLinks.thumbnail} alt={book.title} />
                ) : (
                    'Картинки нет((('
                )}
            </div>
            <div className={s.bookItem__category}>{book.categories && book.categories[0]}</div>
            <h3 className={s.bookItem__title}>{book.title}</h3>
            {book.authors && (
                <ul className={s.bookItem__list}>
                    {book.authors.map((author, index) => (
                        <li key={author} className={s.bookItem__author}>
                            {author}
                            {index + 1 !== book.authors?.length && ', '}
                        </li>
                    ))}
                </ul>
            )}
        </article>
    );
};

export default BookItem;

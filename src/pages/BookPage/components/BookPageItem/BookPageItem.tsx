import React, { FC } from 'react';
import { IBook } from '../../../../types/types';
import s from './BookPageItem.module.scss';

interface BookPageItemProps {
    book: IBook;
}

const BookPageItem: FC<BookPageItemProps> = ({ book }) => {
    return (
        <div className={s.bookPageItem}>
            <div className={s.bookPageItem__left}>
                {book?.imageLinks && (
                    <div className={s.bookPageItem__img}>
                        <img src={book?.imageLinks.thumbnail} alt={book?.title} />
                    </div>
                )}
            </div>
            <div className={s.bookPageItem__right}>
                {book?.categories && (
                    <ul className={s.bookPageItem__categories}>
                        {book?.categories &&
                            book.categories.map((category, index) => (
                                <li key={category}>
                                    {category} {index + 1 !== book.categories?.length && '/'}
                                </li>
                            ))}
                    </ul>
                )}
                <h2 className={s.bookPageItem__title}>{book?.title}</h2>
                {book?.authors && (
                    <ul className={s.bookPageItem__authors}>
                        {book.authors.map((author, index) => (
                            <li key={author}>
                                {author}
                                {index + 1 !== book.authors?.length && ', '}{' '}
                            </li>
                        ))}
                    </ul>
                )}
                {book.description && <p className={s.bookPageItem__description}>{book?.description}</p>}
            </div>{' '}
        </div>
    );
};

export default BookPageItem;

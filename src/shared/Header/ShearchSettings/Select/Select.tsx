import React, { FC, useEffect, useRef, useState } from 'react';
import { searchCateogries, searchSort } from '../../../../types/types';
import s from './Select.module.scss';
import { IoIosArrowDown } from 'react-icons/io';
import cn from 'classnames';

interface SelectProps {
    itemsCategory?: searchCateogries[];
    itemsSort?: searchSort[];
    activeItem: searchCateogries | searchSort;
    name: string;
    onClickSetCategory?: ((category: searchCateogries) => void) | null;
    onClickSetSort?: ((sort: searchSort) => void) | null;
}

const Select: FC<SelectProps> = ({
    itemsCategory,
    itemsSort,
    activeItem,
    name,
    onClickSetCategory,
    onClickSetSort,
}) => {
    const [visableSelect, setVisableSelect] = useState<boolean>(false);
    const selectRef = useRef<HTMLDivElement>(null)

    const toggleVisableSelect = (e: React.MouseEvent<HTMLDivElement>) => {
        setVisableSelect(!visableSelect);
    };

    const onSetCategory = (item: searchCateogries) => {
        onClickSetCategory && onClickSetCategory(item)
        setVisableSelect(!visableSelect)
    }

    const onSetSort = (item: searchSort) => {
        onClickSetSort && onClickSetSort(item)
        setVisableSelect(!visableSelect)
    }

    const handleOutsideClick = (e: any) => {
        if(!e.path.includes(selectRef.current)) {
            setVisableSelect(false)
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [])

    const rootClasses = [s.select];

    visableSelect && rootClasses.push(s.active);

    return (
        <div ref={selectRef} className={rootClasses.join(' ')}>
            <h3 className={s.select__name}>{name}</h3>
            <div className={s.select__content}>
                <div className={s.select__default} onClick={toggleVisableSelect}>
                    <span className={s.select__default_item}>{activeItem}</span>
                    <IoIosArrowDown />
                </div>

                <ul className={s.select__list}>
                    {itemsCategory &&
                        onClickSetCategory &&
                        itemsCategory.map((item) => (
                            <li
                                onClick={(e) => onSetCategory(item)}
                                key={item}
                                className={s.select__item}>
                                {item}
                            </li>
                        ))}
                    {itemsSort &&
                        onClickSetSort &&
                        itemsSort.map((item) => (
                            <li
                                onClick={() => onSetSort(item)}
                                key={item}
                                className={s.select__item}>
                                {item}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default Select;

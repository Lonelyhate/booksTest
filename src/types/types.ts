export enum searchCateogriesOptions {
    ALL = 'all',
    ART = 'art',
    BIOGRAPHY = 'biography',
    COMPUTERS = 'computers',
    HISTORY = 'history',
    MEDICAL = 'medical',
    POETRY = 'poetry',
}

export enum searchSortOptions {
    RELEVANCE = 'relevance',
    NEWEST = 'newest',
}

export type searchCateogries =
    | searchCateogriesOptions.ALL
    | searchCateogriesOptions.ART
    | searchCateogriesOptions.BIOGRAPHY
    | searchCateogriesOptions.COMPUTERS
    | searchCateogriesOptions.HISTORY
    | searchCateogriesOptions.MEDICAL
    | searchCateogriesOptions.POETRY;

export type searchSort = searchSortOptions.RELEVANCE | searchSortOptions.NEWEST;

export type LinksImg = {
    smallThumbnail: string;
    thumbnail: string
};

export type IBook = {
    authors?: string[];
    imageLinks: LinksImg;
    categories: searchCateogries[];
    title: string;
    description: string
};

export interface IbooksApi {
    id: string;
    etag: string
    volumeInfo: IBook;
}

export type CommonPaginationType = {
    page: number;
    pageCount: number;
    itemsTotalCount: number;
    callback: (value: number) => void;
};

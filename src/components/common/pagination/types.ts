export type CommonPaginationType = {
    page: number;
    pageCount: number;
    itemsTotalCount: number;
    selectValues: number[];
    paginationChangeCallback: (value: number) => void;
    selectChangeCallback: (value: string) => void;
};

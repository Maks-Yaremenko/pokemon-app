import { TableDataSource } from '@lib-pokemon/models';

export interface StickyHeadTableProps {
  dataSource: TableDataSource;
  nextPage: () => void;
  prevPage: () => void;
  onSelected: (event) => void;
  itemsPerPage: number;
  loading: boolean;
}

export interface StickyHeadTableState {
  loading?: boolean;
  dataSource: TableDataSource;
}

import { ColumnProps } from 'primereact/column';

export interface StickyHeadTableDataSource {
  count: number;
  next: string | null;
  previous: string | null;
  results: any[];
}

export interface StickyHeadTableProps {
  dataSource: StickyHeadTableDataSource;
  columnConfig: ColumnProps[];
  nextPage: () => void;
  prevPage: () => void;
  onSelected: (event) => void;
  itemsPerPage: number;
  loading: boolean;
}

export interface StickyHeadTableState {
  loading?: boolean;
  dataSource: StickyHeadTableDataSource;
}

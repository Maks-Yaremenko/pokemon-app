import React, { ReactElement, useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';

import {
  StickyHeadTableProps,
  StickyHeadTableState,
} from './sticky-head-table.models';

import './sticky-head-table.scss';

export const StickyHeadTable = (props: StickyHeadTableProps) => {
  const [state, setState] = useState<StickyHeadTableState>({
    loading: false,
    dataSource: null,
  });

  const getFromTo = (): { from: number; to: number } => {
    let from = 1;
    let to = 20;

    const previous = state.dataSource?.previous;

    if (previous) {
      const offset = Number(
        new URL(state.dataSource?.previous).searchParams.get('offset')
      );
      from = offset + props.itemsPerPage + 1;
      to = offset + props.itemsPerPage * 2;
    }

    return { from, to };
  };

  const footerTemplate = (): ReactElement => {
    if (!state.dataSource) {
      return null;
    }

    const { from, to } = getFromTo();

    return (
      <div className="app-sticky-head-table_footer">
        <span>
          Showing {from} to {to} of {state.dataSource?.count}
        </span>
        <Button
          icon="pi pi-angle-left"
          disabled={!state.dataSource?.previous}
          onClick={props.prevPage}
          className="p-button-rounded p-button-text app-sticky-head-table_pagination-button"
        />
        <Button
          disabled={!state.dataSource?.next}
          icon="pi pi-angle-right"
          onClick={props.nextPage}
          className="p-button-rounded p-button-text app-sticky-head-table_pagination-button"
        />
      </div>
    );
  };

  useEffect(() => {
    if (props.dataSource) {
      setState({ ...state, loading: false, dataSource: props.dataSource });
    }
  }, [props.dataSource]);

  useEffect(() => {
    setState({ ...state, loading: props.loading });
  }, [props.loading]);

  return (
    <DataTable
      value={state.dataSource?.results}
      loading={state.loading}
      scrollable
      scrollHeight="440px"
      className="app-sticky-head-table"
      selectionMode="single"
      onSelectionChange={props.onSelected}
      footer={footerTemplate()}
    >
      <Column
        field="name"
        header="Pokemon name"
        headerClassName={'app-sticky-head-table_header-column'}
        className="app-sticky-head-table_column"
      ></Column>
    </DataTable>
  );
};

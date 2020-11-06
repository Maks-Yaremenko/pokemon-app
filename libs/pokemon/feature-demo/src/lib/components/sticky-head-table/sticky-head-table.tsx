import React, { ReactElement, useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { Column, ColumnProps } from 'primereact/column';

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

    const { previous } = state.dataSource;

    if (previous) {
      const searchParams = new URL(state.dataSource?.previous).searchParams;
      const offset = Number(searchParams.get('offset'));
      const limit = Number(searchParams.get('limit'));

      from = offset + limit + 1;
      to = offset + limit * 2;
    }

    return { from, to };
  };

  const columnsTemplate = (): ReactElement[] => {
    return props.columnConfig.map((c: ColumnProps) => {
      return (
        <Column
          key={c.field}
          field={c.field}
          header={c.header}
          headerClassName={c.headerClassName}
          className={c.className}
        ></Column>
      );
    });
  };

  const footerTemplate = (): ReactElement => {
    if (!state.dataSource) {
      return null;
    }

    const { from, to } = getFromTo();

    return (
      <div className="sticky-head-table_footer">
        <span>
          Showing {from} to {to} of {state.dataSource?.count}
        </span>
        <Button
          icon="pi pi-angle-left"
          disabled={!state.dataSource?.previous}
          onClick={props.prevPage}
          className="p-button-rounded p-button-text sticky-head-table_pagination-button"
        />
        <Button
          disabled={!state.dataSource?.next}
          icon="pi pi-angle-right"
          onClick={props.nextPage}
          className="p-button-rounded p-button-text sticky-head-table_pagination-button"
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
      className="sticky-head-table"
      selectionMode="single"
      onSelectionChange={props.onSelected}
      footer={footerTemplate()}
    >
      {columnsTemplate()}
    </DataTable>
  );
};

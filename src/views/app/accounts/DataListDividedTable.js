/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
import React from 'react';
import { CardTitle, Badge } from 'reactstrap';
import { useTable, usePagination, useSortBy } from 'react-table';
import classnames from 'classnames';

import IntlMessages from '../../../helpers/IntlMessages';
import DatatablePagination from '../../../components/DatatablePagination';
import products from '../../../data/products';


function Table({ columns, data, divided = false, defaultPageSize = 6 }) {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: defaultPageSize },
    },
    useSortBy,
    usePagination
  );

  return (
    <>
      <table
        {...getTableProps()}
        className={`r-table table ${classnames({ 'table-divided': divided })}`}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  key={`th_${columnIndex}`}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? 'sorted-desc'
                        : 'sorted-asc'
                      : ''
                  }
                >
                  {column.render('Header')}
                  <span />
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={`td_${cellIndex}`}
                    {...cell.getCellProps({
                      className: cell.column.cellClass,
                    })}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <DatatablePagination
        page={pageIndex}
        pages={pageCount}
        canPrevious={canPreviousPage}
        canNext={canNextPage}
        pageSizeOptions={[4, 10, 20, 30, 40, 50]}
        showPageSizeOptions={false}
        showPageJump={false}
        defaultPageSize={pageSize}
        onPageChange={(p) => gotoPage(p)}
        onPageSizeChange={(s) => setPageSize(s)}
        paginationMaxSize={pageCount}
      />
    </>
  );
}

const DataListDividedTable = () => {
  const cols = React.useMemo(
    () => [
      {
        Header: 'Date Reservation',
        accessor: 'createDate',
        cellClass: 'text-muted  w-40',
        isSorted: false,
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Time',
        accessor: 'time',
        cellClass: 'list-item-heading w-40',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Customer name',
        accessor: 'customerName',
        cellClass: 'list-item-heading w-40',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Telephone',
        accessor: 'telephone',
        cellClass: 'list-item-heading w-40',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Customer email',
        accessor: 'customerEmail',
        cellClass: 'list-item-heading w-40',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Product line',
        accessor: 'category',
        cellClass: 'list-item-heading w-40',
        Cell: (props) => (
          <>{props.value.charAt(0).toUpperCase() + props.value.slice(1)}</>
        ),
      },
      {
        Header: 'Product details',
        accessor: 'productDetails',
        cellClass: 'list-item-heading w-40',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Status',
        accessor: 'status',
        cellClass: 'text-muted  w-40',
        Cell: (props) => <Badge color="secondary" pill>{props.value}</Badge>,
      },
    ],
    []
  );
  return (
    <div className="mb-4">
      <CardTitle>
        <IntlMessages id="table.data-list" />
      </CardTitle>
      <Table columns={cols} data={products} divided />
    </div>
  );
};
export default DataListDividedTable;

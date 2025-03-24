"use client";

import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DataTablePagination } from "./data-table-pagination";
import { DataTableToolbar } from "./data-table-toolbar";
import { utils, writeFile } from "xlsx";

export function DataTable({ columns, data }) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [sorting, setSorting] = React.useState([]);
  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      globalFilter,
    },
    enableRowSelection: true,
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });
  const flattenData = (data) => {
    return data.map((item) => ({
      SL: item.sl,
      "Invoice ID": item.invoice.id,
      "Invoice Status": item.invoice.status,
      "Invoice Date": item.invoice.date,
      "Parcel Company": item.parcel.companyName,
      "Parcel Store": item.parcel.storeName,
      "Merchant Order ID": item.parcel.merchantOrderId,
      "Service Type": item.parcel.serviceType,
      "Delivery Type": item.parcel.deliveryType,
      Status: item.status,
      "Customer Name": item.customer.name,
      "Customer Number": item.customer.number,
      "Customer Address": item.customer.address,
      "Customer District": item.customer.district,
      "Customer Area": item.customer.area,
      "COD Amount": item.amount.cod,
      "Collected Amount": item.amount.collected,
      "Total Charge": item.amount.totalCharge,
      "Payment Status": item.paymentReturnStatus.status,
      "Payment Code": item.paymentReturnStatus.code,
      "Paid At": item.paymentReturnStatus.paidAt,
    }));
  };

  const exportToExcel = () => {
    const flattenedData = flattenData(data);
    const worksheet = utils.json_to_sheet(flattenedData);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Sheet1");
    writeFile(workbook, "table.xlsx");
  };

  const printTable = () => {
    const flattenedData = flattenData(data);
    const printWindow = window.open("", "_blank");
    const tableHtml = `
      <html>
        <head>
          <title>Print Table</title>
          <style>
            table { border-collapse: collapse; width: 100%; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
          </style>
        </head>
        <body>
          <table>
            <thead>
              <tr>
                ${Object.keys(flattenedData[0])
                  .map((header) => `<th>${header}</th>`)
                  .join("")}
              </tr>
            </thead>
            <tbody>
              ${flattenedData
                .map(
                  (row) => `
                <tr>
                  ${Object.values(row)
                    .map((cell) => `<td>${cell}</td>`)
                    .join("")}
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </body>
      </html>
    `;

    printWindow.document.write(tableHtml);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="space-y-4">
      <DataTableToolbar
        table={table}
        printTable={printTable}
        exportToExcel={exportToExcel}
      />

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}

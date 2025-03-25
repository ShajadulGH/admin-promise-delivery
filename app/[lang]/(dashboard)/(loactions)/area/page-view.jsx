"use client";
import * as React from "react";
import { ChevronDown } from "lucide-react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { data } from "./data";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const columns = [
  {
    accessorKey: "SL",
    header: "SL",
    cell: ({ row }) => (
      <div className="whitespace-nowrap min-w-[50px]">{row.getValue("SL")}</div>
    ),
  },
  {
    accessorKey: "Area",
    header: "Area",
    cell: ({ row }) => (
      <div className="whitespace-nowrap min-w-[150px]">
        {row.getValue("Area")}
      </div>
    ),
  },
  {
    accessorKey: "Zone",
    header: "Zone",
    cell: ({ row }) => (
      <div className="whitespace-nowrap min-w-[150px]">
        {row.getValue("Zone")}
      </div>
    ),
  },
  {
    accessorKey: "District",
    header: "District",
    cell: ({ row }) => (
      <div className="whitespace-nowrap min-w-[150px]">
        {row.getValue("District")}
      </div>
    ),
  },
  {
    accessorKey: "Division",
    header: "Division",
    cell: ({ row }) => (
      <div className="whitespace-nowrap min-w-[150px]">
        {row.getValue("Division")}
      </div>
    ),
  },
  {
    accessorKey: "Country",
    header: "Country",
    cell: ({ row }) => (
      <div className="whitespace-nowrap min-w-[150px]">
        {row.getValue("Country")}
      </div>
    ),
  },
  {
    accessorKey: "actions",
    cell: () => {
      return (
        <div className="flex gap-3 items-center">
          <Button
            size="icon"
            variant="outline"
            color="secondary"
            className="h-7 w-7"
          >
            <Icon icon="mdi:pencil" className="h-4 w-4 text-red-500" />
          </Button>

          <Button
            size="icon"
            variant="outline"
            className="h-7 w-7"
            color="secondary"
          >
            <Icon icon="mdi:trash" className="h-4 w-4 text-red-500" />
          </Button>
        </div>
      );
    },
  },
];

export function BasicDataTable() {
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});

  // Filter data based on global filter
  const filteredData = React.useMemo(() => {
    if (!globalFilter) return data;

    return data.filter((row) =>
      Object.values(row).some((value) => {
        return String(value).toLowerCase().includes(globalFilter.toLowerCase());
      })
    );
  }, [globalFilter]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      globalFilter,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <>
      <div className="flex items-center flex-wrap gap-2 px-4">
        <Input
          placeholder="Search globally..."
          value={globalFilter}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="max-w-sm min-w-[200px] h-10"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
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

      <div className="flex items-center flex-wrap gap-4 px-4 py-4">
        <div className="flex-1 text-sm text-muted-foreground whitespace-nowrap">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>

        <div className="flex gap-2 items-center">
          <Button
            variant="outline"
            size="icon"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="h-8 w-8"
          >
            <Icon
              icon="heroicons:chevron-left"
              className="w-5 h-5 rtl:rotate-180"
            />
          </Button>

          {table.getPageOptions().map((page, pageIdx) => (
            <Button
              key={`basic-data-table-${pageIdx}`}
              onClick={() => table.setPageIndex(pageIdx)}
              variant={`${
                pageIdx === table.getState().pagination.pageIndex
                  ? ""
                  : "outline"
              }`}
              className={cn("w-8 h-8")}
            >
              {page + 1}
            </Button>
          ))}

          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            variant="outline"
            size="icon"
            className="h-8 w-8"
          >
            <Icon
              icon="heroicons:chevron-right"
              className="w-5 h-5 rtl:rotate-180"
            />
          </Button>
        </div>
      </div>
    </>
  );
}

export default BasicDataTable;

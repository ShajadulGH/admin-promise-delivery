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

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

// Dummy Data
const data = [
  {
    SL: 1,
    Name: "Abdul Rahman",
    Email: "abdul.rahman@gmail.com",
    Branch: "Main Branch",
    District: "Dhaka",
    Area: "Mirpur",
    Status: "Active",
  },
  {
    SL: 2,
    Name: "Fatima Begum",
    Email: "fatima.begum@yahoo.com",
    Branch: "Sub Branch",
    District: "Chittagong",
    Area: "Agrabad",
    Status: "Inactive",
  },
  {
    SL: 3,
    Name: "Mohammad Ali",
    Email: "mohammad.ali@hotmail.com",
    Branch: "Regional Branch",
    District: "Sylhet",
    Area: "Zindabazar",
    Status: "Active",
  },
  {
    SL: 4,
    Name: "Ayesha Akhtar",
    Email: "ayesha.akhtar@gmail.com",
    Branch: "Main Branch",
    District: "Dhaka",
    Area: "Gulshan",
    Status: "Active",
  },
  {
    SL: 5,
    Name: "Kamal Hossain",
    Email: "kamal.hossain@yahoo.com",
    Branch: "Sub Branch",
    District: "Khulna",
    Area: "Sonadanga",
    Status: "Inactive",
  },
];

// Columns Definition
const columns = [
  {
    accessorKey: "SL",
    header: "SL",
    cell: ({ row }) => (
      <div className="whitespace-nowrap min-w-[50px]">{row.getValue("SL")}</div>
    ),
  },
  {
    accessorKey: "Name",
    header: "Name",
    cell: ({ row }) => (
      <div className="font-medium text-card-foreground/80 min-w-[100px]">
        <div className="flex space-x-3 rtl:space-x-reverse items-center">
          <Avatar className="rounded-full">
            <AvatarImage src={row?.original?.avatar} />
            <AvatarFallback>
              {row?.original?.Name?.charAt(0) || "AB"}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm text-card-foreground whitespace-nowrap">
            {row?.original?.Name}
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "Email",
    header: "Email",
    cell: ({ row }) => (
      <div className="whitespace-nowrap min-w-[150px]">
        {row.getValue("Email")}
      </div>
    ),
  },
  {
    accessorKey: "Branch",
    header: "Branch",
    cell: ({ row }) => (
      <div className="whitespace-nowrap min-w-[100px]">
        {row.getValue("Branch")}
      </div>
    ),
  },
  {
    accessorKey: "District",
    header: "District",
    cell: ({ row }) => (
      <div className="whitespace-nowrap min-w-[100px]">
        {row.getValue("District")}
      </div>
    ),
  },
  {
    accessorKey: "Area",
    header: "Area",
    cell: ({ row }) => (
      <div className="whitespace-nowrap min-w-[100px]">
        {row.getValue("Area")}
      </div>
    ),
  },
  {
    accessorKey: "Status",
    header: "Status",
    cell: ({ row }) => (
      <div className="whitespace-nowrap min-w-[100px]">
        <Badge
          variant="soft"
          color={
            row.getValue("Status") === "Active" ? "success" : "destructive"
          }
        >
          {row.getValue("Status")}
        </Badge>
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
            <Icon icon="mdi:eye" className="h-4 w-4 text-red-500" />
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
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(globalFilter.toLowerCase())
      )
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

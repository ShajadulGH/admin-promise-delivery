"use client";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";
import { statuses } from "../data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { DatePicker } from "antd";
import "antd/dist/reset.css"; // Import Ant Design styles

const { RangePicker } = DatePicker;

export function DataTableToolbar({ table }) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const handleDateChange = (dates, dateStrings) => {
    if (dates) {
      console.log("Selected Dates:", dates);
      console.log("Formatted Date Strings:", dateStrings);
      // Update table filtering logic here
    } else {
      console.log("Date selection cleared");
      // Clear table filtering logic here
    }
  };

  return (
    <div className="flex flex-1 flex-wrap items-center gap-2">
      <Input
        placeholder="Search Anything..."
        value={table.getState().globalFilter ?? ""}
        onChange={(event) => table.setGlobalFilter(event.target.value)}
        className="h-8 min-w-[200px] max-w-sm border-red-500 placeholder:text-red-500 font-bold"
      />
      {/* Replace React Suite DateRangePicker with Ant Design RangePicker */}
      <RangePicker
        onChange={handleDateChange}
        className="custom-range-picker"
      />

      {table.getColumn("status") && (
        <DataTableFacetedFilter
          column={table.getColumn("status")}
          title="Status"
          options={statuses}
        />
      )}
      {isFiltered && (
        <Button
          variant="outline"
          onClick={() => table.resetColumnFilters()}
          className="h-8 px-2 lg:px-3"
        >
          Reset
          <X className="ltr:ml-2 rtl:mr-2 h-4 w-4" />
        </Button>
      )}
      <DataTableViewOptions table={table} />
    </div>
  );
}

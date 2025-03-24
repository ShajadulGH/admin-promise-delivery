"use client";

import { Badge } from "@/components/ui/badge";
import { statuses } from "../data/data";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const columns = [
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <div className="min-w-[100px]">{row.getValue("date")}</div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "paymentId",
    header: "Payment Id",
    cell: ({ row }) => (
      <div className="min-w-[120px]">{row.getValue("paymentId")}</div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "totalParcel",
    header: "Total Parcel",
    cell: ({ row }) => (
      <div className="min-w-[100px]">{row.getValue("totalParcel")}</div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "amountToBeCollect",
    header: "Amount To Be Collect",
    cell: ({ row }) => (
      <div className="min-w-[150px]">{row.getValue("amountToBeCollect")}</div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "collected",
    header: "Collected",
    cell: ({ row }) => (
      <div className="min-w-[120px]">{row.getValue("collected")}</div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "totalCharge",
    header: "Total Charge",
    cell: ({ row }) => (
      <div className="min-w-[120px]">{row.getValue("totalCharge")}</div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "paymentAmount",
    header: "Payment Amount",
    cell: ({ row }) => (
      <div className="min-w-[150px]">{row.getValue("paymentAmount")}</div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status").toLowerCase()
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex items-center">
          {status.icon && (
            <status.icon className="ltr:mr-2 rtl:ml-2 h-4 w-4 text-muted-foreground" />
          )}
          <Badge
            className="p-1.5 rounded-md"
            variant="soft"
            color={
              (status.label === "Paid" && "success") ||
              (status.label === "Partial Return" && "warning") ||
              (status.label === "Returned" && "destructive")
            }
          >
            {status.label}
          </Badge>
        </div>
      );
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: () => {
      return (
        <div className="flex gap-3 items-center">
          <Button
            asChild
            size="icon"
            className="h-9 w-9 rounded bg-default-100 text-red-500 hover:text-primary-foreground"
          >
            <Link href="/invoice-details">
              <Icon icon="heroicons:eye" className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            size="icon"
            className="h-9 w-9 rounded bg-default-100 text-red-500 hover:text-primary-foreground"
          >
            <Icon icon="heroicons:printer" className="w-5 h-5" />
          </Button>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];

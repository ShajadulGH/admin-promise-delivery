"use client";

import { Badge } from "@/components/ui/badge";
import { statuses } from "../data/data";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast as reToast } from "react-hot-toast";
export const columns = [
  {
    accessorKey: "sl",

    cell: ({ row }) => <div className="min-w-[20px]">{row.getValue("sl")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "invoice",
    cell: ({ row }) => {
      const invoice = row.getValue("invoice");
      const status = statuses.find(
        (status) => status.value === invoice.status.toLowerCase()
      );

      // Function to copy the invoice ID to the clipboard
      const handleCopyInvoiceId = () => {
        navigator.clipboard.writeText(invoice.id).then(() => {
          reToast.success("Copied!");
        });
      };

      return (
        <div className="flex flex-col space-y-1 min-w-[150px]">
          <div className="text-sm flex items-center gap-2">
            <span>{invoice.id}</span>
            <button
              onClick={handleCopyInvoiceId}
              className="text-muted-foreground hover:text-primary"
              title="Copy Invoice ID"
            >
              <Icon icon="heroicons:clipboard-document" className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center">
            {status?.icon && (
              <status.icon className="ltr:mr-2 rtl:ml-2 h-4 w-4 text-muted-foreground" />
            )}
            <Badge
              className="p-1.5 rounded-md"
              variant="soft"
              color={
                (status?.label === "Delivered" && "success") ||
                (status?.label === "Canceled" && "destructive") ||
                (status?.label === "Partial Delivered" && "warning") ||
                (status?.label === "Paid" && "success") ||
                (status?.label === "Partial Return" && "warning") ||
                (status?.label === "Returned" && "destructive")
              }
            >
              {status?.label}
            </Badge>
          </div>
          <div className="text-sm">
            <span className="font-semibold">Date:</span> {invoice.date}
          </div>
        </div>
      );
    },
    enableSorting: true,
    enableHiding: true,
  },

  {
    accessorKey: "parcel",

    cell: ({ row }) => {
      const parcel = row.getValue("parcel");

      return (
        <div className="flex flex-col space-y-1 min-w-[200px]">
          <div className="text-sm">
            <span className="font-semibold">Company Name:</span>{" "}
            {parcel.companyName}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Store Name:</span>{" "}
            {parcel.storeName}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Merchant Order ID:</span>{" "}
            {parcel.merchantOrderId}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Service Type:</span>{" "}
            {parcel.serviceType}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Delivery Type:</span>{" "}
            {parcel.deliveryType}
          </div>
        </div>
      );
    },
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "customer",

    cell: ({ row }) => {
      const customer = row.getValue("customer");

      return (
        <div className="flex flex-col space-y-1 min-w-[200px]">
          <div className="text-sm">
            <span className="font-semibold">Name:</span> {customer.name}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Number:</span> {customer.number}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Address:</span> {customer.address}
          </div>
          <div className="text-sm">
            <span className="font-semibold">District:</span> {customer.district}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Area:</span> {customer.area}
          </div>
        </div>
      );
    },
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "amount",

    cell: ({ row }) => {
      const amount = row.getValue("amount");

      return (
        <div className="flex flex-col space-y-1 min-w-[150px]">
          <div className="text-sm">
            <span className="font-semibold">COD:</span> {amount.cod}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Collected:</span> {amount.collected}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Total Charge:</span>{" "}
            {amount.totalCharge}
          </div>
        </div>
      );
    },
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "paymentReturnStatus",
    header: "Payment/Return Status",
    cell: ({ row }) => {
      const paymentReturnStatus = row.getValue("paymentReturnStatus");
      const status = statuses.find(
        (status) => status.value === paymentReturnStatus.status.toLowerCase()
      );

      return (
        <div className="flex flex-col space-y-1 min-w-[150px]">
          <div className="flex items-center">
            {status?.icon && (
              <status.icon className="ltr:mr-2 rtl:ml-2 h-4 w-4 text-muted-foreground" />
            )}
            <Badge
              className="p-1.5 rounded-md"
              variant="soft"
              color={
                (status?.label === "Delivered" && "success") ||
                (status?.label === "Canceled" && "destructive") ||
                (status?.label === "Partial Delivered" && "warning") ||
                (status?.label === "Paid" && "success") ||
                (status?.label === "Partial Return" && "warning") ||
                (status?.label === "Returned" && "destructive")
              }
            >
              {status?.label}
            </Badge>
          </div>
          <div className="text-sm">
            <span className="font-semibold">Code:</span>{" "}
            {paymentReturnStatus.code}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Paid At:</span>{" "}
            {paymentReturnStatus.paidAt}
          </div>
        </div>
      );
    },
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "actions",
    cell: () => {
      return (
        <div className="flex gap-3 items-center">
          <Button
            asChild
            size="icon"
            className="h-9 w-9 rounded bg-default-100 text-red-500 hover:text-primary-foreground"
          >
            <Link href="/parcel-info">
              <Icon icon="mdi:eye" className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            size="icon"
            className="h-9 w-9 rounded bg-default-100 text-red-500 hover:text-primary-foreground"
          >
            <Icon icon="mdi:printer" className="w-5 h-5" />
          </Button>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];

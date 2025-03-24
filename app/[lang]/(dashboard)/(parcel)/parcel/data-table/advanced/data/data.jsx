import { CheckCircle2, XCircle, HelpCircle } from "lucide-react";
export const statuses = [
  {
    value: "delivered",
    label: "Delivered",
    icon: CheckCircle2,
  },
  {
    value: "partial delivered",
    label: "Partial Delivered",
    icon: HelpCircle,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: XCircle,
  },
  {
    value: "paid",
    label: "Paid",
    icon: CheckCircle2,
  },
  {
    value: "partial return",
    label: "Partial Return",
    icon: HelpCircle,
  },
  {
    value: "returned",
    label: "Returned",
    icon: XCircle,
  },
];

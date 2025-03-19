import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { users } from "./data";
import { Badge } from "@/components/ui/badge";
const SimpleTable = () => {
  const columns = [
    {
      key: "sl",
      label: "sl",
    },
    {
      key: "shop name",
      label: "shop name",
    },
    {
      key: "shop address",
      label: "shop address",
    },
    {
      key: "contact number",
      label: "contact number",
    },
    {
      key: "action",
      label: "action",
    },
  ];
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead key={column.key}>{column.label}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.shopName}</TableCell>
            <TableCell>{item.shopAddress}</TableCell>
            <TableCell>{item.customerNumber}</TableCell>
            <TableCell className="space-x-2">
              <Badge variant="outline" className="rounded-[5px]">
                Edit
              </Badge>
              <Badge
                variant="outline"
                className="rounded-[5px]"
                color="success"
              >
                Active
              </Badge>
              <Badge
                variant="outline"
                className="rounded-[5px]"
                color="warning"
              >
                Default Pickup Store
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SimpleTable;

"use client";

import { users } from "./data"; // Assuming users data is imported
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
import { Button } from "@/components/ui/button";

const PageView = ({ searchQuery }) => {
  // Filter users based on the search query
  const filteredUsers = users.filter((user) =>
    Object.values(user).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Contact Number</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {filteredUsers.map((item) => (
          <TableRow key={item.email} className="hover:bg-muted">
            <TableCell className="font-medium text-card-foreground/80">
              <div className="flex gap-3 items-center">
                <Avatar className="rounded-full">
                  <AvatarImage src={item.avatar} />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <span className="text-sm text-card-foreground">
                  {item.name}
                </span>
              </div>
            </TableCell>

            <TableCell>{item.number}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>
              <Badge
                variant="soft"
                color={
                  (item.role === "admin" && "default") ||
                  (item.role === "member" && "success") ||
                  (item.role === "owner" && "info") ||
                  (item.role === "editor" && "warning")
                }
                className="capitalize"
              >
                {item.role}
              </Badge>
            </TableCell>

            <TableCell className="flex justify-start">
              <div className="flex gap-3">
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
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PageView;

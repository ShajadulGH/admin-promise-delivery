"use client";

import { useState } from "react"; // Import useState
import PageView from "./page-view";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";

import { Input } from "@/components/ui/input"; // Import Input component for search
import Card from "@/components/ui/card-snippet";

const TailwindUiTable = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem>Internal User</BreadcrumbItem>
        <BreadcrumbItem>User List</BreadcrumbItem>
      </Breadcrumbs>
      <div className="space-y-6 mt-5 mb-5">
        <Card className="p-5" title="Users">
          <div className="flex flex-wrap items-center gap-4 mb-1">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Search by name, email, role, or number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full max-w-md"
              />
            </div>
            <div className="flex-none">
              <Link href="/add-user">
                <Button type="button">Add User</Button>
              </Link>
            </div>
          </div>

          {/* Pass searchQuery and setSearchQuery to PageView */}
          <PageView searchQuery={searchQuery} />
        </Card>
      </div>
    </>
  );
};

export default TailwindUiTable;

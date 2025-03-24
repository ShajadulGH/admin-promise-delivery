"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicDataTable from "./page-view";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DataTablePage = () => {
  return (
    <div className=" space-y-5">
      <Card className="p-5">
        <CardHeader>
          <CardTitle className="grid grid-cols-2">
            <div className="col-span-1">Area</div>
            <div className="col-span-1 flex justify-end">
              <Link href="new-area">
                <Button>Add Area</Button>
              </Link>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <BasicDataTable />
        </CardContent>
      </Card>
    </div>
  );
};

export default DataTablePage;

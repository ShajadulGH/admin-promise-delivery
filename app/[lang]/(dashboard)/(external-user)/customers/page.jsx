"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BasicDataTable from "./page-view";

const DataTablePage = () => {
  return (
    <div className=" space-y-5">
      <Card className="p-5">
        <CardHeader>
          <CardTitle>Customers</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <BasicDataTable />
        </CardContent>
      </Card>
    </div>
  );
};

export default DataTablePage;

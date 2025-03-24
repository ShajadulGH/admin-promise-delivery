"use client";

import CardSnippet from "@/components/ui/card-snippet";
import AdvancedTable from "./data-table/advanced";
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";

const Parcel = () => {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem>Parcel</BreadcrumbItem>
        <BreadcrumbItem>Parcel List</BreadcrumbItem>
      </Breadcrumbs>

      <div className="grid grid-cols-12  gap-6 mt-6 mb-6">
        <div className="col-span-12 lg:col-span-12">
          <CardSnippet className="p-5" title="Parcel List">
            <AdvancedTable />
          </CardSnippet>
        </div>
      </div>
    </>
  );
};

export default Parcel;

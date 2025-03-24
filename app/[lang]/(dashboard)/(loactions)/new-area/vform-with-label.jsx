"use client";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const VFormWithLabel = () => {
  return (
    <form>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="col-span-2 lg:col-span-1  flex flex-col gap-2">
          <Label htmlFor="fullName5">Area Name</Label>
          <Input type="text" placeholder="Enter Zone Name" id="fullName5" />
        </div>
        <div className="col-span-2 lg:col-span-1  flex flex-col gap-2">
          <Label htmlFor="fullName5">Zone Name</Label>
          <Input type="text" placeholder="Enter Zone Name" id="fullName5" />
        </div>
        <div className="col-span-2 lg:col-span-1  flex flex-col gap-2">
          <Label htmlFor="fullName5">District Name</Label>
          <Input type="text" placeholder="Enter District Name" id="fullName5" />
        </div>
        <div className="col-span-2 lg:col-span-1  flex flex-col gap-2">
          <Label htmlFor="fullName5">Division Name</Label>
          <Input type="text" placeholder="Enter Division Name" id="fullName5" />
        </div>
        <div className="col-span-2 lg:col-span-1  flex flex-col gap-2">
          <Label htmlFor="fullName5">Country Name</Label>
          <Input type="text" placeholder="Enter Country Name" id="fullName5" />
        </div>

        <div className="col-span-2">
          <Button type="submit">Add Area</Button>
        </div>
      </div>
    </form>
  );
};

export default VFormWithLabel;

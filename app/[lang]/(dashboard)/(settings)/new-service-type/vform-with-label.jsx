"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";
import { useState } from "react";
const VFormWithLabel = () => {
  const [fileNames, setFileNames] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setFileNames(files.map((file) => file.name));
  };

  return (
    <form>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
          <Label htmlFor="hubName">Title</Label>
          <Input type="text" placeholder="Enter Title" id="hubName" />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
          <Label htmlFor="hubAddress">Extra Rate</Label>
          <Input type="text" placeholder="Enter Extra Rate" id="hubAddress" />
        </div>

        <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
          <Label htmlFor="hubType">Select Service Area</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Hub Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="main">Main Hub</SelectItem>
              <SelectItem value="sub">Sub Hub</SelectItem>
              <SelectItem value="regional">Regional Hub</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-2">
          <Button type="button">Add Service Type</Button>
        </div>
      </div>
    </form>
  );
};

export default VFormWithLabel;

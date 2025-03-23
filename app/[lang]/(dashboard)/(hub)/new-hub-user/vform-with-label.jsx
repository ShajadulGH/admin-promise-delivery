"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
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
          <Label htmlFor="hubName">Hub User Name</Label>
          <Input type="text" placeholder="Enter Hub Name" id="hubName" />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
          <Label htmlFor="hubAddress">Hub User Address</Label>
          <Input type="text" placeholder="Enter Hub Address" id="hubAddress" />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
          <Label htmlFor="contactNumber">Hub User Number</Label>
          <Input
            type="text"
            placeholder="Enter Contact Number"
            id="contactNumber"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
          <Label htmlFor="hubEmail">Hub User Email</Label>
          <Input type="email" placeholder="Enter Hub Email" id="hubEmail" />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
          <Label htmlFor="hubEmail">Password</Label>
          <Input type="email" placeholder="Enter Hub Email" id="hubEmail" />
        </div>

        <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
          <Label htmlFor="hubType">Select Hub</Label>
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

        <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
          <label className="mb-[-5px] block text-sm font-medium text-gray-900 dark:text-white">
            Upload Image
          </label>
          <input
            id="file-upload"
            type="file"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file-upload"
            className="flex items-center justify-center gap-2 px-4 py-2 text-black border border-gray-300 rounded-lg cursor-pointer hover:bg-red-600 hover:border-red-600 hover:text-white transition"
          >
            <UploadCloud className="w-5 h-5" />
            Upload
          </label>
          {fileNames.length > 0 && (
            <div className="mt-2 text-sm text-gray-700 dark:text-gray-300 text-center">
              {fileNames.map((name, index) => (
                <p key={index} className="truncate">
                  {name}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="col-span-2">
          <Button type="button">Add Hub</Button>
        </div>
      </div>
    </form>
  );
};

export default VFormWithLabel;

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
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, UploadCloud } from "lucide-react";
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
        <div className="col-span-2 lg:col-span-1  flex flex-col gap-2">
          <Label htmlFor="fullName5">User Name</Label>
          <Input type="text" placeholder="Enter Operator Name" id="fullName5" />
        </div>
        <div className="col-span-2 lg:col-span-1  flex flex-col gap-2">
          <Label htmlFor="email5">User Email</Label>
          <Input type="email" placeholder="Enter Operator Email" id="email5" />
        </div>
        <div className="col-span-2 lg:col-span-1  flex flex-col gap-2">
          <Label htmlFor="fullName5">Mobile Number</Label>
          <Input type="text" placeholder="Enter Mobile Number" id="fullName5" />
        </div>
        <div className="col-span-2 lg:col-span-1  flex flex-col gap-2">
          <Label htmlFor="email5">Password</Label>
          <Input type="email" placeholder="Enter Password" id="email5" />
        </div>

        <div className="col-span-2 lg:col-span-1  flex flex-col gap-2">
          <Label htmlFor="email5">Select Role</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">Admin</SelectItem>
              <SelectItem value="mathmatics">Super Admin</SelectItem>
              <SelectItem value="physics">Operator</SelectItem>
              <SelectItem value="chemistry">Rider</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-2 lg:col-span-1  flex flex-col gap-2">
          <label className="mb-[-5px] block text-sm font-medium text-gray-900 dark:text-white">
            Upload Image
          </label>
          {/* Hidden File Input */}
          <input
            id="file-upload"
            type="file"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
          {/* Custom Upload Button */}
          <label
            htmlFor="file-upload"
            className="flex items-center justify-center gap-2 px-4 py-2 text-black border border-gray-300 rounded-lg cursor-pointer hover:bg-red-600 hover:border-red-600 hover:text-white transition"
          >
            <UploadCloud className="w-5 h-5" />
            Upload
          </label>

          {/* Display Selected File Names */}
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
          <Button type="button">Add User</Button>
        </div>
      </div>
    </form>
  );
};

export default VFormWithLabel;

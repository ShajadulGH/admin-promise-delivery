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
import { UploadCloud, X, Search } from "lucide-react";
import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";

const VFormWithLabel = () => {
  const [fileNames, setFileNames] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedMerchants, setSelectedMerchants] = useState([]);
  const [selectedHubs, setSelectedHubs] = useState([]);
  const [selectedFulfilmentHubs, setSelectedFulfilmentHubs] = useState([]);
  const [selectedSalesHead, setSelectedSalesHead] = useState("");
  const [selectedOperationLead, setSelectedOperationLead] = useState("");

  // Search terms
  const [merchantSearch, setMerchantSearch] = useState("");
  const [hubSearch, setHubSearch] = useState("");
  const [fulfilmentHubSearch, setFulfilmentHubSearch] = useState("");
  const [salesHeadSearch, setSalesHeadSearch] = useState("");
  const [operationLeadSearch, setOperationLeadSearch] = useState("");
  const [roleSearch, setRoleSearch] = useState("");

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setFileNames(files.map((file) => file.name));
  };

  // Mock data
  const merchants = [
    { id: 1, name: "Merchant 1" },
    { id: 2, name: "Merchant 2" },
    { id: 3, name: "Merchant 3" },
    { id: 4, name: "Supplier 1" },
    { id: 5, name: "Supplier 2" },
  ];

  const hubs = [
    { id: 1, name: "Hub 1" },
    { id: 2, name: "Hub 2" },
    { id: 3, name: "Hub 3" },
    { id: 4, name: "Warehouse 1" },
    { id: 5, name: "Warehouse 2" },
  ];

  const fulfilmentHubs = [
    { id: 1, name: "Fulfilment Hub 1" },
    { id: 2, name: "Fulfilment Hub 2" },
    { id: 3, name: "Fulfilment Hub 3" },
    { id: 4, name: "Fulfilment Center 1" },
    { id: 5, name: "Fulfilment Center 2" },
  ];

  const salesHeads = [
    { id: 1, name: "Sales Head 1" },
    { id: 2, name: "Sales Head 2" },
    { id: 3, name: "Sales Manager 1" },
    { id: 4, name: "Sales Manager 2" },
  ];

  const operationLeads = [
    { id: 1, name: "Operation Lead 1" },
    { id: 2, name: "Operation Lead 2" },
    { id: 3, name: "Operations Manager 1" },
    { id: 4, name: "Operations Manager 2" },
  ];

  const roles = [
    { value: "admin", label: "Admin" },
    { value: "management", label: "Management" },
    { value: "sales_lead", label: "Sales Lead" },
    { value: "sales", label: "Sales" },
    { value: "kam_lead", label: "KAM Lead" },
    { value: "kam", label: "KAM" },
    { value: "ir_lead", label: "IR Lead" },
    { value: "ir", label: "IR" },
    { value: "operations_lead", label: "Operations Lead" },
    { value: "operations", label: "Operations" },
  ];

  // Filtered data based on search
  const filteredMerchants = useMemo(() => {
    return merchants.filter((merchant) =>
      merchant.name.toLowerCase().includes(merchantSearch.toLowerCase())
    );
  }, [merchantSearch]);

  const filteredHubs = useMemo(() => {
    return hubs.filter((hub) =>
      hub.name.toLowerCase().includes(hubSearch.toLowerCase())
    );
  }, [hubSearch]);

  const filteredFulfilmentHubs = useMemo(() => {
    return fulfilmentHubs.filter((hub) =>
      hub.name.toLowerCase().includes(fulfilmentHubSearch.toLowerCase())
    );
  }, [fulfilmentHubSearch]);

  const filteredSalesHeads = useMemo(() => {
    return salesHeads.filter((head) =>
      head.name.toLowerCase().includes(salesHeadSearch.toLowerCase())
    );
  }, [salesHeadSearch]);

  const filteredOperationLeads = useMemo(() => {
    return operationLeads.filter((lead) =>
      lead.name.toLowerCase().includes(operationLeadSearch.toLowerCase())
    );
  }, [operationLeadSearch]);

  const filteredRoles = useMemo(() => {
    return roles.filter((role) =>
      role.label.toLowerCase().includes(roleSearch.toLowerCase())
    );
  }, [roleSearch]);

  const toggleMerchant = (merchantId) => {
    setSelectedMerchants((prev) =>
      prev.includes(merchantId)
        ? prev.filter((id) => id !== merchantId)
        : [...prev, merchantId]
    );
  };

  const toggleHub = (hubId) => {
    setSelectedHubs((prev) =>
      prev.includes(hubId)
        ? prev.filter((id) => id !== hubId)
        : [...prev, hubId]
    );
  };

  const toggleFulfilmentHub = (hubId) => {
    setSelectedFulfilmentHubs((prev) =>
      prev.includes(hubId)
        ? prev.filter((id) => id !== hubId)
        : [...prev, hubId]
    );
  };

  return (
    <form>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Basic Info Fields */}
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
          <Label htmlFor="fullName5">User Name</Label>
          <Input type="text" placeholder="Enter Operator Name" id="fullName5" />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
          <Label htmlFor="email5">User Email</Label>
          <Input type="email" placeholder="Enter Operator Email" id="email5" />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
          <Label htmlFor="mobileNumber">Mobile Number</Label>
          <Input
            type="text"
            placeholder="Enter Mobile Number"
            id="mobileNumber"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input type="password" placeholder="Enter Password" id="password" />
        </div>

        {/* Role Selection with Search */}
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
          <Label>Select Role</Label>
          <Select onValueChange={(value) => setSelectedRole(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <div className="relative px-2 py-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search roles..."
                  className="pl-8"
                  value={roleSearch}
                  onChange={(e) => setRoleSearch(e.target.value)}
                />
              </div>
              {filteredRoles.map((role) => (
                <SelectItem key={role.value} value={role.value}>
                  {role.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Sales nested dropdowns (only for 'sales' role) */}
        {selectedRole === "sales" && (
          <>
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
              <Label>Merchants</Label>
              <div className="relative">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select merchants">
                      {selectedMerchants.length > 0
                        ? `${selectedMerchants.length} selected`
                        : "Select merchants"}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="max-h-60 overflow-y-auto">
                    <div className="relative px-2 py-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Search merchants..."
                        className="pl-8"
                        value={merchantSearch}
                        onChange={(e) => setMerchantSearch(e.target.value)}
                      />
                    </div>
                    {filteredMerchants.map((merchant) => (
                      <div
                        key={merchant.id}
                        className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => toggleMerchant(merchant.id)}
                      >
                        <input
                          type="checkbox"
                          checked={selectedMerchants.includes(merchant.id)}
                          readOnly
                          className="mr-2"
                        />
                        <span>{merchant.name}</span>
                      </div>
                    ))}
                  </SelectContent>
                </Select>
                {selectedMerchants.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedMerchants.map((id) => {
                      const merchant = merchants.find((m) => m.id === id);
                      return (
                        <Badge
                          key={id}
                          variant="outline"
                          className="flex items-center"
                        >
                          {merchant?.name}
                          <X
                            className="ml-1 h-3 w-3 cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMerchant(id);
                            }}
                          />
                        </Badge>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
              <Label>Sales Head</Label>
              <Select
                onValueChange={setSelectedSalesHead}
                value={selectedSalesHead}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select sales head" />
                </SelectTrigger>
                <SelectContent>
                  <div className="relative px-2 py-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search sales heads..."
                      className="pl-8"
                      value={salesHeadSearch}
                      onChange={(e) => setSalesHeadSearch(e.target.value)}
                    />
                  </div>
                  {filteredSalesHeads.map((head) => (
                    <SelectItem key={head.id} value={head.id.toString()}>
                      {head.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </>
        )}

        {/* Operations nested dropdowns (only for 'operations' role) */}
        {selectedRole === "operations" && (
          <>
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
              <Label>HUBs</Label>
              <div className="relative">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select HUBs">
                      {selectedHubs.length > 0
                        ? `${selectedHubs.length} selected`
                        : "Select HUBs"}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="max-h-60 overflow-y-auto">
                    <div className="relative px-2 py-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Search HUBs..."
                        className="pl-8"
                        value={hubSearch}
                        onChange={(e) => setHubSearch(e.target.value)}
                      />
                    </div>
                    {filteredHubs.map((hub) => (
                      <div
                        key={hub.id}
                        className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => toggleHub(hub.id)}
                      >
                        <input
                          type="checkbox"
                          checked={selectedHubs.includes(hub.id)}
                          readOnly
                          className="mr-2"
                        />
                        <span>{hub.name}</span>
                      </div>
                    ))}
                  </SelectContent>
                </Select>
                {selectedHubs.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedHubs.map((id) => {
                      const hub = hubs.find((h) => h.id === id);
                      return (
                        <Badge
                          key={id}
                          variant="outline"
                          className="flex items-center"
                        >
                          {hub?.name}
                          <X
                            className="ml-1 h-3 w-3 cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleHub(id);
                            }}
                          />
                        </Badge>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
              <Label>Fulfilment HUBs</Label>
              <div className="relative">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Fulfilment HUBs">
                      {selectedFulfilmentHubs.length > 0
                        ? `${selectedFulfilmentHubs.length} selected`
                        : "Select Fulfilment HUBs"}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="max-h-60 overflow-y-auto">
                    <div className="relative px-2 py-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Search Fulfilment HUBs..."
                        className="pl-8"
                        value={fulfilmentHubSearch}
                        onChange={(e) => setFulfilmentHubSearch(e.target.value)}
                      />
                    </div>
                    {filteredFulfilmentHubs.map((hub) => (
                      <div
                        key={hub.id}
                        className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => toggleFulfilmentHub(hub.id)}
                      >
                        <input
                          type="checkbox"
                          checked={selectedFulfilmentHubs.includes(hub.id)}
                          readOnly
                          className="mr-2"
                        />
                        <span>{hub.name}</span>
                      </div>
                    ))}
                  </SelectContent>
                </Select>
                {selectedFulfilmentHubs.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedFulfilmentHubs.map((id) => {
                      const hub = fulfilmentHubs.find((h) => h.id === id);
                      return (
                        <Badge
                          key={id}
                          variant="outline"
                          className="flex items-center"
                        >
                          {hub?.name}
                          <X
                            className="ml-1 h-3 w-3 cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFulfilmentHub(id);
                            }}
                          />
                        </Badge>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
              <Label>Operation Lead</Label>
              <Select
                onValueChange={setSelectedOperationLead}
                value={selectedOperationLead}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select operation lead" />
                </SelectTrigger>
                <SelectContent>
                  <div className="relative px-2 py-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search operation leads..."
                      className="pl-8"
                      value={operationLeadSearch}
                      onChange={(e) => setOperationLeadSearch(e.target.value)}
                    />
                  </div>
                  {filteredOperationLeads.map((lead) => (
                    <SelectItem key={lead.id} value={lead.id.toString()}>
                      {lead.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </>
        )}

        {/* File Upload */}
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
          <Button type="button">Add User</Button>
        </div>
      </div>
    </form>
  );
};

export default VFormWithLabel;

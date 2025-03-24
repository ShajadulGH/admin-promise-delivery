"use client";
import { Button } from "@/components/ui/button";
import CardSnippet from "@/components/ui/card-snippet";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Stepper from "./Components/stepper";
import TimeLine from "./Components/timeline";
import CreateIssue from "../../(issue)/issue-history/create-issue";
const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
const ParcelInfo = () => {
  const [open, setOpen] = useState(null);
  const handleSheetOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <CardSnippet
        title={
          <div className="flex items-center gap-2">
            <span>Parcel Status</span>
            <Badge
              color="success"
              variant="outline"
              className="rounded-[5px] p-2"
            >
              Delivered
            </Badge>
          </div>
        }
      >
        <div className="grid grid-cols-2">
          <div className="col-span-2 lg:col-span-1 grid grid-cols-2 items-center ">
            <div className="col-span-1 flex justify-start flex-col">
              <p className="text-gray-600">
                <span className="font-semibold ">Invoice: </span>240625EKR0O4E
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Create Date: </span>
                6/26/2024
              </p>
            </div>
            <div className="col-span-2 lg:col-span-1 flex justify-start flex-col">
              <p className="text-gray-600">
                <span className="font-semibold">Merchant Order ID: </span>
                ACE 123021
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Merchant Shop: </span>Foodie
              </p>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 m-5 flex justify-center items-center lg:justify-end">
            <Button onClick={handleSheetOpen} className="rounded-[5px]">
              Report Issue
            </Button>
          </div>
        </div>
      </CardSnippet>

      <div className="grid grid-cols-12 mt-5 gap-4">
        <div className="col-span-12 lg:col-span-8 mb-5">
          <CardSnippet title="Parcel Tracking">
            {/* Tracking */}
            <div className="mr-12 my-10">
              <Stepper />
            </div>

            {/* timeline */}
            <div>
              <div className="font-semibold text-lg border-b pb-2 mb-5">
                Timeline
              </div>
              <TimeLine />
            </div>

            {/* </div> */}
          </CardSnippet>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Card className="p-6 mb-5">
            {/* Recipient Details */}
            <div className="space-y-4">
              <div className="font-semibold text-lg border-b pb-2">
                Recipient Details
              </div>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="font-semibold text-gray-600">Name:</span>
                  <span className="text-gray-800">Shajadul Karim</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold text-gray-600">Contact:</span>
                  <span className="text-gray-800">01861171441</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold text-gray-600">District:</span>
                  <span className="text-gray-800">Cumilla</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold text-gray-600">Area:</span>
                  <span className="text-gray-800">Chauddagram</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold text-gray-600">Address:</span>
                  <span className="text-gray-800">Falgunkara/1288</span>
                </p>
              </div>
            </div>

            {/* Cost of Delivery */}
            <div className="space-y-4 mt-6">
              <div className="font-semibold text-lg border-b pb-2">
                Cost of Delivery
              </div>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="font-semibold text-gray-600 ">
                    Delivery Charge:
                  </span>
                  <span className="text-gray-800">৳ 50.00</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold text-gray-600">
                    COD Percent:
                  </span>
                  <span className="text-gray-800">2%</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold text-gray-600">
                    COD Charge:
                  </span>
                  <span className="text-gray-800">৳ 10.00</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold text-gray-600">
                    Total Charge:
                  </span>
                  <span className="text-gray-800">৳ 60.00</span>
                </p>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="space-y-4 mt-6">
              <div className="font-semibold text-lg border-b pb-2">
                Delivery Info
              </div>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="font-semibold text-gray-600">
                    Service Type:
                  </span>
                  <span className="text-gray-800">Electronics</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold text-gray-600">
                    Item Type:
                  </span>
                  <span className="text-gray-800">Electronics</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold text-gray-600">Weight:</span>
                  <span className="text-gray-800">10kg</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold text-gray-600">
                    Quantity:5
                  </span>
                  <span className="text-gray-800">Electronics</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold text-gray-600">
                    Product Type:
                  </span>
                  <span className="text-gray-800">Electronics</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold text-gray-600">
                    Product Details:
                  </span>
                  <span className="text-gray-800">Electronics</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold text-gray-600">Weight:</span>
                  <span className="text-gray-800">1.5 kg</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold text-gray-600">
                    Product Value
                  </span>
                  <span className="text-gray-800">৳ 1200.00</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold text-gray-600">
                    Amount to Collect:
                  </span>
                  <span className="text-gray-800">৳ 1200.00</span>
                </p>

                <p className="flex justify-between">
                  <span className="font-semibold text-gray-600">
                    Product Instruction:
                  </span>
                  <span className="text-gray-800">Handle with care</span>
                </p>
              </div>
            </div>
          </Card>
          <CreateIssue open={open} onClose={handleSheetOpen} />
        </div>
      </div>
    </>
  );
};

export default ParcelInfo;

import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator,
} from "@/components/ui/timeline";

const TimeLine = () => {
  return (
    <>
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outline" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="md:flex gap-4">
              <div className="grow">
                <h5 className="font-medium text-sm text-default-600 ">
                  Order Placed
                </h5>
              </div>
              <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                12 minutes ago
              </div>
            </div>
            <p className="text-sm text-default-500  mt-1">
              Your order has been successfully placed.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outline" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="md:flex gap-4">
              <div className="grow">
                <h5 className="font-medium text-sm text-default-600 ">
                  Order Processed
                </h5>
              </div>
              <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                1 hour ago
              </div>
            </div>
            <p className="text-sm text-default-500  mt-1">
              Your order is being prepared for shipment.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="info" variant="outline" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="md:flex gap-4">
              <div className="grow">
                <h5 className="font-medium text-sm text-default-600 ">
                  Order Shipped
                </h5>
              </div>
              <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                5 hours ago
              </div>
            </div>
            <p className="text-sm text-default-500  mt-1">
              Your order has been shipped and is on its way.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="info" variant="outline" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="md:flex gap-4">
              <div className="grow">
                <h5 className="font-medium text-sm text-default-600 ">
                  Out for Delivery
                </h5>
              </div>
              <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                1 day ago
              </div>
            </div>
            <p className="text-sm text-default-500  mt-1">
              Your order is out for delivery and will arrive soon.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" variant="outline" />
          </TimelineSeparator>
          <TimelineContent>
            <div className="md:flex gap-4">
              <div className="grow">
                <h5 className="font-medium text-sm text-default-600 ">
                  Order Delivered
                </h5>
              </div>
              <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                2 days ago
              </div>
            </div>
            <p className="text-sm text-default-500  mt-1">
              Your order has been successfully delivered.
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default TimeLine;

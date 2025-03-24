"use client";
import React from "react";
import { Icon } from "@iconify/react";
import {
  Stepper,
  Step,
  StepLabel,
  StepDescription,
} from "@/components/ui/steps";
import { useMediaQuery } from "@/hooks/use-media-query";
const AlternativeLabelStepGap = () => {
  const steps = [
    { label: "Accepted", icon: "mdi:check-circle-outline" },
    { label: "Picked", icon: "mdi:package-variant-closed" },
    { label: "In Transit", icon: "mdi:truck" },
    { label: "Out of Delivery", icon: "mdi:truck-fast" },
    { label: "Delivered", icon: "mdi:check-circle" },
  ];
  const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <Stepper
          current={1}
          alternativeLabel
          gap
          direction={isTablet && "vertical"}
        >
          {steps?.map((item, i) => (
            <Step key={item.label} icon={<Icon icon={item.icon} />}>
              <StepLabel className=" text-default-900">{item.label}</StepLabel>
              {/* <StepDescription></StepDescription> */}
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
};

export default AlternativeLabelStepGap;

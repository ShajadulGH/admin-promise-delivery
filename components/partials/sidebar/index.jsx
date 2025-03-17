"use client";
import React from "react";
import { useSidebar } from "@/store";
import { useMediaQuery } from "@/hooks/use-media-query";
import PopoverSidebar from "./popover";
import MobileSidebar from "./mobile-sidebar";

const Sidebar = ({ trans }) => {
  const { collapsed } = useSidebar();

  const isDesktop = useMediaQuery("(min-width: 1280px)");

  let selectedSidebar = null;

  if (!isDesktop) {
    selectedSidebar = <MobileSidebar />;
  } else {
    selectedSidebar = <PopoverSidebar collapsed={collapsed} trans={trans} />;
  }

  return <div>{selectedSidebar}</div>;
};

export default Sidebar;

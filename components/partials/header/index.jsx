"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store";
import ProfileInfo from "./profile-info";
import VerticalHeader from "./vertical-header";
import Language from "./language";
import { useMediaQuery } from "@/hooks/use-media-query";
import MobileMenuHandler from "./mobile-menu-handler";
import ClassicHeader from "./layout/classic-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavTools = ({ isDesktop }) => {
  return (
    <div className="nav-tools flex items-center  gap-2">
      {isDesktop && <Language />}
      {isDesktop && (
        <div className="ltr:pl-2">
          <ProfileInfo />
        </div>
      )}

      {!isDesktop && <MobileMenuHandler />}
    </div>
  );
};
const Header = ({ handleOpenSearch, trans }) => {
  const { collapsed } = useSidebar();
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const isMobile = useMediaQuery("(min-width: 768px)");

  return (
    <ClassicHeader
      className={cn("has-sticky-header rounded-md sticky top-6 ", {
        "ltr:xl:ml-[72px] ": collapsed,
        "ltr:xl:ml-[272px]  ": !collapsed,
      })}
    >
      <div className="xl:mx-20 mx-4">
        <div className="w-full bg-card/90 backdrop-blur-lg md:px-6 px-[15px] py-3 rounded-md my-6 shadow-md border-b">
          <div className="flex justify-between items-center h-full">
            <VerticalHeader handleOpenSearch={handleOpenSearch} />
            <NavTools isDesktop={isDesktop} isMobile={isMobile} />
          </div>
        </div>
      </div>
    </ClassicHeader>
  );
};

export default Header;

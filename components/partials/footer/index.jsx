import React from "react";
import { useSidebar } from "@/store";
import { cn } from "@/lib/utils";
import FooterLayout from "./footer-layout";
import { useMounted } from "@/hooks/use-mounted";

const Footer = () => {
  const { collapsed } = useSidebar();
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <div className="xl:mx-20 mx-6">
      <FooterLayout
        className={cn(" rounded-md border sticky bottom-0", {
          "ltr:xl:ml-[72px] ": collapsed,
          "ltr:xl:ml-[272px] ": !collapsed,
        })}
      >
        <FooterContent />
      </FooterLayout>
    </div>
  );
};

export default Footer;

const FooterContent = () => {
  return (
    <div className="block md:flex md:justify-between text-muted-foreground">
      <p className="sm:mb-0 text-xs md:text-sm">
        COPYRIGHT © {new Date().getFullYear()} Promise Delivery All rights
        Reserved
      </p>
      <p className="mb-0 text-xs md:text-sm">
        Developed By{" "}
        <a
          className="text-primary"
          target="__blank"
          href="https://promisedelivery.com.bd/"
        >
          Promise Delivery IT
        </a>
      </p>
    </div>
  );
};

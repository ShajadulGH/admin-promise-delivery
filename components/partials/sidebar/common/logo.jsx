import React from "react";
import Image from "next/image";
import Link from "next/link";

const SidebarLogo = () => {
  return (
    <div className="px-4 py-4 ">
      <div className=" flex items-center">
        <Link href="/dashboard">
          <div className="flex-1  text-xl text-primary  font-semibold">
            <Image
              src="/Asset 1RP Logo.png"
              width={125}
              height={125}
              alt="Promise Logo"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SidebarLogo;

"use client";
import Image from "next/image";
import background from "@/public/login-bg-2.jpg";
import CreatePassword from "../reset-password/create-password-form";
import { useMediaQuery } from "@/hooks/use-media-query";

const RegisterPage = () => {
  const smallScreen = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <div className="min-h-screen grid grid-cols-2 items-center overflow-hidden w-full bg-red-100">
        <div className="col-span-2 lg:col-span-1"></div>
        {!smallScreen && (
          <Image
            src={background}
            alt="Background Image"
            className="absolute top-0 left-0 w-full h-full"
          />
        )}
        <div className="col-span-2 lg:col-span-1 flex justify-center">
          <div className=" w-full bg-background py-5 max-w-xl  rounded-sm relative z-10 2xl:p-16 xl:p-12 p-10 m-4 shadow-lg ">
            <CreatePassword />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;

"use client";
import background from "@/public/loginImage.jpg";
import LogInForm from "@/components/auth/login-form";
import Image from "next/image";

const LoginPage = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center  overflow-hidden w-full bg-red-600">
        {/* <Image
          src={background}
          alt="Background Image"
          className="absolute top-0 left-0 w-full h-full"
        /> */}
        <div className="w-full bg-background py-5 max-w-xl  rounded-xl relative z-10 2xl:p-16 xl:p-12 p-10 m-4 shadow-lg">
          <LogInForm />
        </div>

        {/* </div> */}
      </div>
    </>
  );
};

export default LoginPage;

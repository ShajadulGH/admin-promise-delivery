"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const LogInForm = () => {
  const [passwordType, setPasswordType] = React.useState("password");
  const isDesktop2xl = useMediaQuery("(max-width: 1530px)");
  const router = useRouter();
  const togglePasswordType = () => {
    if (passwordType === "text") {
      setPasswordType("password");
    } else if (passwordType === "password") {
      setPasswordType("text");
    }
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="w-full py-10">
      <Link href="/dashboard" className="inline-block">
        <Image src="/Asset 1RP Logo.png" width="150" height="150" />
      </Link>
      <div className="2xl:mt-8 mt-6 2xl:text-3xl text-2xl font-bold text-default-900">
        Welcome, Merchant!
      </div>
      <div className="2xl:text-lg text-base text-default-600 2xl:mt-2 leading-6">
        Sign in to have a reliable and fast product delivery
      </div>
      <form onSubmit={formSubmitHandler} className="mt-5 2xl:mt-7 space-y-2">
        <div>
          <Label htmlFor="email" className="mb-2 font-medium text-default-600">
            Company Name{" "}
          </Label>
          <Input
            name="email"
            type="email"
            id="email"
            className={cn("", {})}
            size={!isDesktop2xl ? "lg" : "md"}
          />
        </div>
        <div>
          <Label htmlFor="email" className="mb-2 font-medium text-default-600">
            Name{" "}
          </Label>
          <Input
            name="email"
            type="email"
            id="email"
            className={cn("", {})}
            size={!isDesktop2xl ? "lg" : "md"}
          />
        </div>
        <div>
          <Label htmlFor="email" className="mb-2 font-medium text-default-600">
            Pickup Address{" "}
          </Label>
          <Textarea placeholder="Type your address..." rows="3" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-2 lg:col-span-1">
            <Label
              htmlFor="email"
              className="mb-2 font-medium text-default-600"
            >
              Select District{" "}
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a District" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="mathmatics">Mathmatics</SelectItem>
                <SelectItem value="physics">Physics</SelectItem>
                <SelectItem value="chemistry">Chemistry</SelectItem>
                <SelectItem value="biology">Biology</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <Label
              htmlFor="email"
              className="mb-2 font-medium text-default-600"
            >
              Select Area{" "}
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a Area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="mathmatics">Mathmatics</SelectItem>
                <SelectItem value="physics">Physics</SelectItem>
                <SelectItem value="chemistry">Chemistry</SelectItem>
                <SelectItem value="biology">Biology</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label htmlFor="email" className="mb-2 font-medium text-default-600">
            Contact Number{" "}
          </Label>
          <Input
            name="email"
            type="email"
            id="email"
            className={cn("", {})}
            size={!isDesktop2xl ? "lg" : "md"}
          />
        </div>
        <div>
          <Label htmlFor="email" className="mb-2 font-medium text-default-600">
            Email{" "}
          </Label>
          <Input
            name="email"
            type="email"
            id="email"
            className={cn("", {})}
            size={!isDesktop2xl ? "lg" : "md"}
          />
        </div>

        <div className="mt-3.5 mb-3.5">
          <Label
            htmlFor="password"
            className="mb-2 font-medium text-default-600"
          >
            Password{" "}
          </Label>
          <div className="relative">
            <Input
              name="password"
              type={passwordType}
              id="password"
              className="peer "
              size={!isDesktop2xl ? "lg" : "md"}
              placeholder=" "
            />

            <div
              className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 cursor-pointer"
              onClick={togglePasswordType}
            >
              {passwordType === "password" ? (
                <Icon
                  icon="heroicons:eye"
                  className="w-5 h-5 text-default-400"
                />
              ) : (
                <Icon
                  icon="heroicons:eye-slash"
                  className="w-5 h-5 text-default-400"
                />
              )}
            </div>
          </div>
        </div>

        <Button className="w-full" size={!isDesktop2xl ? "lg" : "md"}>
          Sign In
        </Button>
      </form>
      <div className="mt-2 2xl:mt-4 text-center text-base text-default-600">
        Have an Account?{" "}
        <Link href="/" className="text-primary">
          {" "}
          Log in{" "}
        </Link>
      </div>
    </div>
  );
};

export default LogInForm;

"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";

const phoneSchema = z.object({
  phoneNumber: z
    .string()
    .min(10, { message: "Please enter a valid phone number." }),
});

const otpSchema = z.object({
  otp: z.string().min(6, { message: "Please enter a valid OTP." }),
});

const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Your password must be at least 8 characters." }),
    confirmPassword: z
      .string()
      .min(8, { message: "Your password must be at least 8 characters." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const CreatePasswordForm = () => {
  const [isPending, startTransition] = React.useTransition();
  const [step, setStep] = React.useState(1);
  const [newPasswordType, setNewPasswordType] = React.useState(false);
  const [confirmPasswordType, setConfirmPasswordType] = React.useState(false);
  const isDesktop2xl = useMediaQuery("(max-width: 1530px)");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(
      step === 1 ? phoneSchema : step === 2 ? otpSchema : passwordSchema
    ),
    mode: "all",
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    startTransition(async () => {
      if (step === 1) {
        // Simulate sending OTP
        toast.success("OTP sent successfully");
        setStep(2);
      } else if (step === 2) {
        // Simulate OTP verification
        toast.success("OTP verified successfully");
        setStep(3);
      } else if (step === 3) {
        // Simulate password reset
        toast.success("Password reset successful");
        reset();
        router.push("/dashboard");
      }
    });
  };

  return (
    <div className="w-full">
      <Link href="/dashboard" className="inline-block">
        <Image src="/Asset 1RP Logo.png" width="150" height="150" alt="Logo" />
      </Link>
      <div className="2xl:mt-8 mt-6 2xl:text-3xl lg:text-2xl text-xl font-bold text-default-900">
        {step === 1
          ? "Enter Phone Number"
          : step === 2
          ? "Enter OTP"
          : "Create New Password"}
      </div>
      <div className="2xl:text-lg text-base text-default-600 mt-2 leading-6">
        {step === 1
          ? "We will send you an OTP to verify your phone number."
          : step === 2
          ? "Enter the OTP sent to your phone."
          : "Enter your new password."}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-5 xl:mt-7">
        <div className="space-y-4">
          {step === 1 && (
            <div>
              <Label
                htmlFor="phoneNumber"
                className="mb-2 font-medium text-default-600"
              >
                Phone Number
              </Label>
              <Input
                disabled={isPending}
                {...register("phoneNumber")}
                type="text"
                id="phoneNumber"
                size={!isDesktop2xl ? "xl" : "lg"}
                className={cn("", { "border-destructive": errors.phoneNumber })}
              />
              {errors.phoneNumber && (
                <div className="text-destructive mt-2">
                  {errors.phoneNumber.message}
                </div>
              )}
            </div>
          )}
          {step === 2 && (
            <div>
              <Label
                htmlFor="otp"
                className="mb-2 font-medium text-default-600"
              >
                OTP
              </Label>
              <Input
                disabled={isPending}
                {...register("otp")}
                type="text"
                id="otp"
                size={!isDesktop2xl ? "xl" : "lg"}
                className={cn("", { "border-destructive": errors.otp })}
              />
              {errors.otp && (
                <div className="text-destructive mt-2">
                  {errors.otp.message}
                </div>
              )}
            </div>
          )}
          {step === 3 && (
            <>
              <div>
                <Label
                  htmlFor="password"
                  className="mb-2 font-medium text-default-600"
                >
                  Password
                </Label>
                <div className="relative">
                  <Input
                    disabled={isPending}
                    {...register("password")}
                    type={newPasswordType ? "text" : "password"}
                    id="password"
                    size={!isDesktop2xl ? "xl" : "lg"}
                    className={cn("", {
                      "border-destructive": errors.password,
                    })}
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 cursor-pointer"
                    onClick={() => setNewPasswordType(!newPasswordType)}
                  >
                    {newPasswordType ? (
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
                {errors.password && (
                  <div className="text-destructive mt-2">
                    {errors.password.message}
                  </div>
                )}
              </div>
              <div>
                <Label
                  htmlFor="confirmPassword"
                  className="mb-2 font-medium text-default-600"
                >
                  Confirm Password
                </Label>
                <div className="relative">
                  <Input
                    disabled={isPending}
                    {...register("confirmPassword")}
                    type={confirmPasswordType ? "text" : "password"}
                    id="confirmPassword"
                    size={!isDesktop2xl ? "xl" : "lg"}
                    className={cn("", {
                      "border-destructive": errors.confirmPassword,
                    })}
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 cursor-pointer"
                    onClick={() => setConfirmPasswordType(!confirmPasswordType)}
                  >
                    {confirmPasswordType ? (
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
                {errors.confirmPassword && (
                  <div className="text-destructive mt-2">
                    {errors.confirmPassword.message}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
        <Button className="w-full mt-8" size="lg" type="submit">
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {step === 1
            ? "Send OTP"
            : step === 2
            ? "Verify OTP"
            : "Reset Password"}
        </Button>
      </form>
      {step !== 1 && (
        <div className="mt-5 2xl:mt-8 text-center text-base text-default-600">
          <button onClick={() => setStep(step - 1)} className="text-primary">
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default CreatePasswordForm;

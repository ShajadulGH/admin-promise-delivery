"use client";
import { Inter } from "next/font/google";
// import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const Providers = ({ children }) => {
  return (
    <body className={cn("dash-tail-app ", inter.className, "theme-red")}>
      {/* <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
      > */}
      {children}
      <Toaster />
      {/* </ThemeProvider> */}
    </body>
  );
};

export default Providers;

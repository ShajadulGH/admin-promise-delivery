import { NextResponse } from "next/server";

let defaultLocale = "en";
let locales = ["bn", "en", "ar"];

// Simple locale matcher function without using Negotiator
function getLocale(request) {
  const acceptedLanguage = request.headers.get("accept-language") ?? "";

  // Split accepted languages by comma and trim each language tag
  const languages = acceptedLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim());

  // Find the first matching locale from the accepted languages
  for (const lang of languages) {
    const baseLang = lang.split("-")[0]; // Extract primary language (e.g., "en" from "en-US")
    if (locales.includes(baseLang)) {
      return baseLang;
    }
  }
  return defaultLocale; // Fallback to default
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!api|assets|docs|.*\\..*|_next).*)"],
};

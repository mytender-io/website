import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define your allowed routes
const ALLOWED_ROUTES = [
  "/",
  "/our-story",
  "/team",
  "/values",
  "/case-studies",
  "/book-demo",
  "/bidstats",
  "/personalized-demo",
  // Add all your valid routes here
];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip processing for Next.js internal routes, API routes, and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") || // Skip files like images, CSS, JS, etc.
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // Check if the current path is an allowed route or starts with an allowed route
  // Note: We need to be careful with '/' since all paths start with '/'
  const isAllowedRoute = ALLOWED_ROUTES.some((route) => {
    if (route === "/") {
      return pathname === "/"; // Only exact match for root
    }
    return pathname === route || pathname.startsWith(`${route}/`);
  });

  if (isAllowedRoute) {
    return NextResponse.next();
  }

  // For dynamic routes with params (like /blog/[slug])
  // You can implement pattern matching here
  if (/^\/blog\/[\w-]+$/.test(pathname)) {
    return NextResponse.next();
  }

  // If route is not allowed, redirect to homepage
  console.log(`Route not allowed: ${pathname}, redirecting to homepage`);
  return NextResponse.redirect(new URL("/", request.url));
}

// Configure middleware to run on all routes except certain paths
export const config = {
  matcher: [
    // Match all request paths except for specific Next.js paths
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-[#717680] selection:bg-white selection:text-primary-foreground dark:bg-white border-input flex h-10 w-full min-w-0 rounded-md border bg-white px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-white file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-[#f86a10] focus-visible:ring-[#f86a10]/0 focus-visible:ring-[3px]",
        "aria-invalid:ring-[#f86a10]/20 dark:aria-invalid:ring-[#f86a10]/40 aria-invalid:border-[#f86a10]",
        className
      )}
      {...props}
    />
  )
}

export { Input }

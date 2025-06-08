import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// 条件样式处理
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

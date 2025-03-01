"use client"

import { useRouter } from "next/navigation";

interface ButtonProps {
  text: string;
  href: string;
  isActive?: boolean;
}

export const Button = ({ text, href, isActive }: ButtonProps) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(href)}
      className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${isActive ? 'bg-darkGray text-white' : 'text-lightGray'}`}
    >
      {text}
    </button>
  )
};

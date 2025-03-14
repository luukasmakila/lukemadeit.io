"use client"

import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  href: string;
  isActive?: boolean;
}

export const Button = ({ text, href, isActive }: ButtonProps) => {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => router.push(href)}
      className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${isActive ? 'bg-darkGray text-white' : 'text-lightGray'}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {text}
    </motion.button>
  )
};

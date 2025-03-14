"use client"

import { useRouter } from "next/navigation";
import { Product } from "@/app/types";

export const BlogCard = ({ title, description, href, image }: Product) => {
  const router = useRouter();

  return (
    <a
      className="aspect-w-16 aspect-h-9 relative block overflow-hidden rounded-lg shadow-lg group"
      onClick={() => router.push(href)}
    >
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent w-full flex flex-col justify-end">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </a>
  )
};

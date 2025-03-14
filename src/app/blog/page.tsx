'use client'

import { motion } from "framer-motion";

import { Header } from "../components/header";
import { BasePage } from "../components/basePage";
import { BlogCard } from "../components/Blog/card";

import { blogPosts } from "./assets";

export default function Blog() {
  return (
    <>
      <Header />
      <BasePage>
      <div className="flex flex-col gap-4">
        <h1 className="text-lg">All Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.3,
                ease: "easeOut",
              }}
            >
              <BlogCard key={post.title} {...post} />
            </motion.div>
          ))}
        </div>
      </div>
      </BasePage>
    </>
  );
};

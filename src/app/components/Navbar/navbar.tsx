"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "./button"

export const Navbar = () => {
  const currentPath = usePathname();

  useEffect(() => {
    console.log(currentPath)
  }, [currentPath])

  return (
    <nav className="flex width-full max-w-[800px] justify-between items-center mt-4 mx-auto px-4">
      <img src="/profile-pic.jpg" alt="logo" className="w-8 h-8 rounded-full" />
      <div className="flex gap-1">
        <Button text="Home" href="/" isActive={currentPath === "/"} />
        <Button text="Blog" href="/blog" isActive={currentPath === "/blog"} />
        <Button text="Gear" href="/gear" isActive={currentPath === "/gear"} />
      </div>
      <a></a>
    </nav>
  )
}

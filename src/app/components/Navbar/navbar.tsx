import { Button } from "./button"

export const Navbar = () => {
  return (
    <nav className="flex width-full max-w-[800px] mx-auto justify-between items-center">
      <img src="/profilepic.jpg" alt="logo" className="w-10 h-10 rounded-full" />
      <div className="flex gap-1">
        <Button text="Home" href="/" />
        <Button text="About" href="/about" />
        <Button text="Blog" href="/blog" />
        <Button text="Gear" href="/gear" />
      </div>
      <a></a>
    </nav>
  )
}

import { BasePage } from "./components/basePage";
import { BlogCard } from "./components/Blog/card";
import { Header } from "./components/header";
import { SectionBody } from "./components/sectionBody";
import { SocialMediaButton } from "./components/socialMediaButton";

export default function Home() {
  return (
    <>
      <Header />
      <BasePage>
        <SectionBody>
            <div className="flex flex-col gap-4 max-w-xl">
              <h1 className="text-2xl">Whatsup, Im Luke!</h1>
              <p className="text-lightGray text-sm">A Fullstack Software Engineer by day and a content creator by night.</p>
              <p className="text-lightGray text-sm">With programming I mostly focus on the backend and infra side of things while on YouTube I get to exercise my creative side by posting about my life, tech and pretty much whatever else comes to mind.</p>
            </div>
            <div className="flex text-sm gap-3">
              <SocialMediaButton href="https://www.youtube.com/@LukeMadeIt" text="YouTube" icon="/youtube-icon.png" />
              <SocialMediaButton href="https://www.instagram.com/lukemadeit_" text="Instagram" icon="/instagram-icon.png"/>
              <SocialMediaButton href="https://discord.gg/ddJwnTBGHb" text="Discord" icon="/discord-icon.png"/>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-lg">Pinned posts</h2>
              <BlogCard
                title="M4 MacBook Pro - The Truth"
                description="My experience with the M4 MacBook Pro 3 months later"
                href="/blog/m4-macbook-pro"
                image="/blog/m4-macbook-pro.jpg"
              />
              <BlogCard
                title="Samsung Galaxy S25 Ultra Review"
                description="Apple users perspective on the Samsung Galaxy S25 Ultra"
                href="/"
                image="/blog/s25-ultra.jpg"
              />
            </div>
        </SectionBody>
      </BasePage>
    </>
  );
}

import { BlogPage } from "@/app/components/Blog/blogPage";

export default function MyStory() {
  return (
    <BlogPage>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">My Story</h1>
        <p>Hey there! I'm Luke or Luukas, but everyone has called me Luke since I was 4 years old playing football. Im a Software Engineer & a content creator based in Helsinki, Finland where I've lived my whole life.</p>
        <p>Growing up I was a huge gamer, which wasn't looked as a "cool" thing back then. My love for gaming led me to getting terrible grades at school and graduating high school one year late.</p>
        <p>After coming out of the militray a friend of mine recommended a coding course to me. At first I was skeptical and thought I was too dumb for it, but I ended up giving it a shot.</p>
        <p>Quickly after writing my first lines of code something clicked, I wasn't addicted to gaming, I was addicted to the feeling of learning new skills and building cool things. Gaming had just been the only way for me to experience that feeling until then.</p>
        <p>A few years passed and I had been working fulltime as a developer for a while, but every now and then a thought popped into my mind. It was something I spent my whole childhood watching and always dreamt of doing it myself. After a while I knew I had to give it a shot or I would regret not trying for the rest of my life. That something was starting a YouTube channel.</p>
        <p>I always hated being infront of a camera, was insecure about my looks and the way I spoke with an accent. It took months, but I finally got around my fears and posted my first video. It was a total flop, but I felt the same rush as I did when I started programming so I knew I had to keep going.</p>
        <p>Something I learned from all this is that whenever you start something new you will be bad at it, but in order for you to get good at anything you first have to fail a 1000 times. Keep going.</p>
      </div>
    </BlogPage>
  );
};

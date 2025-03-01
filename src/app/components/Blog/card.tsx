export const BlogCard = () => {
  return (
    <a href="/" target="_blank" className="relative block overflow-hidden rounded-lg shadow-lg group">
      <img
        src="/lake-como-at-night.jpg"
        alt="My Story"
        className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-lg font-semibold text-white">My Story</h3>
        <p className="text-sm text-gray-300">My journey from a gamer to a programmer to a YouTuber</p>
      </div>
    </a>
  )
};

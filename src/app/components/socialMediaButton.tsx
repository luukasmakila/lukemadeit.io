interface SocialMediaButtonProps {
  href: string;
  text: string;
  icon: string;
}

export const SocialMediaButton = ({ href, text, icon }: SocialMediaButtonProps) => {
  return (
    <div className="flex gap-1 items-center text-primary relative rounded-lg px-3 py-2 text-sm transition-colors bg-darkGray">
      <a
        href={href}
      >
        {text}
      </a>
      <img className="w-3 h-3" src={icon}/>
    </div>
  )
};

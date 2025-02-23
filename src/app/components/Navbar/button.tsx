interface ButtonProps {
  text: string;
  href: string;
}

export const Button = ({ text, href }: ButtonProps) => {
  return (
    <a className="text-primary relative rounded-lg px-3 text-sm transition-colors" href={href}>{text}</a>
  )
};

import { Product } from "../../types";

export const ProductCard = ({ title, description, href, image }: Product) => {
  return (
    <li className="col-span-1 row-span-1 flex snap-start items-center gap-4 transition-opacity max-w-80 p-4 rounded-lg">
      <a className="relative aspect-square h-[3rem] w-[3rem] min-w-[3rem] min-h-[3rem] overflow-hidden rounded-xl bg-darkGray" href={href} target="_blank">
        <img alt={title} loading="lazy" decoding="async" src={image} />
      </a>
      <div className="flex flex-col justify-between flex-1 pr-1">
        <div className="space-y-1">
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs text-lightGray">{description}</p>
        </div>
      </div>
      <div>
        <a className="ml-auto h-fit rounded-xl bg-darkGray px-4 py-2 text-sm" href={href} target="_blank">Buy</a>
      </div>
    </li>
  )
};

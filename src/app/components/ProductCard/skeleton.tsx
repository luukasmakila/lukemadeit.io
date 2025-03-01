export const SkeletonLoader = () => {
  return (
    <li className="col-span-1 row-span-1 flex snap-start items-center gap-4 transition-opacity max-w-80 p-4 rounded-lg bg-dark animate-pulse">
      <div className="relative aspect-square h-[3rem] w-[3rem] min-w-[3rem] min-h-[3rem] overflow-hidden rounded-xl bg-darkGray"></div>
      <div className="flex flex-col justify-between flex-1 pr-1">
        <div className="space-y-1">
          <div className="h-4 bg-darkGray rounded w-3/4"></div>
          <div className="h-3 bg-darkGray rounded w-1/2"></div>
        </div>
      </div>
      <div className="ml-auto h-fit rounded-xl bg-darkGray px-4 py-2 text-sm text-darkGray">Buy</div>
    </li>
  );
};

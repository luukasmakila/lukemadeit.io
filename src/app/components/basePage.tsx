import { ChildrenProps } from "../types";

export const BasePage = ({ children }: ChildrenProps) => {
  return (
    <div className="mx-auto px-2 width-full max-w-[800px] pb-24 pt-10 items-center">
      {children}
    </div>
  )
};

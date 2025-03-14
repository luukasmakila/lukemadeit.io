import { ChildrenProps } from "@/app/types";
import { BasePage } from "../basePage";
import { Header } from "../header";

export const BlogPage = ({ children }: ChildrenProps) => {
  return (
    <>
    <Header />
    <BasePage>
      <div className="flex flex-col gap-4 max-w-xl">
        {children}
      </div>
    </BasePage>
    </>
  );
}

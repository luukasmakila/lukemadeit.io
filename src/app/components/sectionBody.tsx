import { ChildrenProps } from "../types";

export const SectionBody = ({ children }: ChildrenProps) => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-8 px-4">
        {children}
      </div>
    </div>
  )
}

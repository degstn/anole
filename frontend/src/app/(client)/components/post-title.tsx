import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-4xl tracking-tighter leading-tight mb-8 mx-6">
      {children}
    </h1>
  );
}

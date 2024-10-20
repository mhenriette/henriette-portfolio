import { ReactNode } from "react";
import { Button } from "../ui/button";

import { ButtonProps } from "../ui/button";

export interface AnimatedButtonProps extends ButtonProps {
  children: ReactNode;
}

export default function AnimatedButton({children, className, type, ...props}:AnimatedButtonProps) {
  return (
    <Button
      variant="secondary"
      size="md"
      className={className}
      type={type}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a7a9be_0%,#f25f4c_50%,#a7a9be_100%)]"></span>
      <div className="flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 font-medium text-white backdrop-blur-3xl gap-2">
        {children}
      </div>
    </Button>
  );
}

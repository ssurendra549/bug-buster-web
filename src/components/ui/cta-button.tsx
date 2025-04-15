
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./button";

interface CtaButtonProps extends ButtonProps {
  className?: string;
}

export function PrimaryCta({ className, children, ...props }: CtaButtonProps) {
  return (
    <Button 
      className={cn(
        "text-base font-medium px-6 py-5 h-auto", 
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

export function SecondaryCta({ className, children, ...props }: CtaButtonProps) {
  return (
    <Button 
      variant="outline"
      className={cn(
        "text-base font-medium px-6 py-5 h-auto border-2", 
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

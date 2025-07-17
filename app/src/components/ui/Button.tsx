import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "outline" | "transparent";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: Variant;
    size?: Size;
    className?: string;
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    className,
    ...rest
}: ButtonProps) {
    const baseStyle = "rounded-full font-sm";

    const variantStyles: Record<Variant, string> = {
        primary: "bg-primary text-white hover:bg-primary/90",
        secondary: "bg-secondary text-white hover:bg-secondary/90",
        outline:
            "border border-primary text-primary bg-transparent hover:bg-primary/10",
        transparent: "bg-transparent hover:bg-primary/10",
    };

    const sizeStyles: Record<Size, string> = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg",
    };

    const classes = clsx(
        baseStyle,
        variantStyles[variant],
        sizeStyles[size],
        className
    );

    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    );
}

import cls from "@/shared/ui/Slider/ui/Button.module.scss";
import {ButtonHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type: "button" | "submit";
    content?: string;
    className?: string;
    onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
    const {
        type,
        content,
        className,
        onClick
    } = props;
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
        >
            <span className={cls.btnText}>
                {content}
            </span>
        </button>
    )
}
import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import S from "./ButtonAlt.module.css"

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type MyButtonPropsType = DefaultButtonPropsType & {
    variant?: ElementColorVariants
}
export type ElementColorVariants = "light" | "dark" | "standard" | "purple"
export const ButtonAlt: React.FC<MyButtonPropsType> = props => {
    const {disabled, onClick, className, children, variant = "standard", ...restProps} = props
    const finalClassName = `${S.button} ${variant ? S[variant] : className}`

    return (
        <div className={S.button_box}>
            <button
                className={finalClassName}
                onClick={onClick}
                disabled={disabled}
                {...restProps}
            >{children}</button>
        </div>
    );
}
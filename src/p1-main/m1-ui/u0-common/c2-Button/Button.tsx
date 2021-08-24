import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import classes from './Button.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ExtraButtonPropsType = DefaultButtonPropsType & {
    cancel?: boolean
    ok?: boolean
    backgroundImage?: boolean
}

const Button: React.FC<ExtraButtonPropsType> = (
    {
        cancel, ok, backgroundImage,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    let className = classes.button
    if (cancel) {
        className = `${classes.cancel} ${classes.button}`
    }
    if (ok) {
        className = `${classes.ok} ${classes.button}`
    }
    if (backgroundImage) {
        className = `${"backgroundImage"} ${className}`
    }
    return (
            <button style={{}}
                className={className}
                {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
            />
    )
}

export default Button

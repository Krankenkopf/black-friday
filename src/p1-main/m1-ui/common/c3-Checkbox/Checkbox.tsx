import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import classes from './Checkbox.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

const Checkbox: React.FC<SuperCheckboxPropsType> = (
    {
        type,
        onChange, onChangeChecked,
        className, spanClassName,
        alt,
        children,

        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.checked) {
            onChangeChecked && onChangeChecked(e.currentTarget.checked)// сделайте так чтоб работал onChange и onChangeChecked
            onChange && onChange(e)
        }
    }

    const finalInputClassName = `${classes.innerCbx}`
    const finalBoxClassName = `${classes.checkboxBox} ${alt && !restProps.checked ? alt : ''}`

    return (
        <label className={finalBoxClassName}>
            <input
                type={'checkbox'}
                onChange={onChangeCallback}
                className={finalInputClassName}
                id="cbx"

                {...restProps}
            />
            <label htmlFor="cbx" className={classes.check}>
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                    <path
                        d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"> </path>
                    <polyline points="1 9 7 14 15 4"> </polyline>
                </svg>

            </label>
            {children && <span className={classes.spanClassName}>{children}</span>}
        </label>
    )
}

export default Checkbox

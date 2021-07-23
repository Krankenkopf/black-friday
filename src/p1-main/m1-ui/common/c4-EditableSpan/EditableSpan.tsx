import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState} from 'react'
import Input from './../c1-Input/Input'
import css from "./EditableSpan.module.css"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>


type SuperEditableSpanType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    setError?: (error: string) => void
    spanClassName?: string

    spanProps?: DefaultSpanPropsType
}

const EditableSpan: React.FC<SuperEditableSpanType> = (
    {
        autoFocus, // игнорировать изменение этого пропса
        onBlur,
        onEnter,
        spanProps,
        setError,

        ...restProps
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(true)
    const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {}

    const onEnterCallback = () => {
         setEditMode(false)

        onEnter && onEnter()
    }
    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        setEditMode(false)

        onBlur && onBlur(e)
    }
    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setEditMode(true)
        setError && setError('')
        onDoubleClick && onDoubleClick(e)
    }

    const spanClassName = `${css.span} ${className}`
    const inputClassName = ``

    return (
        <>
            {editMode
                ? (
                    <Input
                        autoFocus
                        onBlur={onBlurCallback}
                        onEnter={onEnterCallback}
                        className={inputClassName}

                        {...restProps}
                    />
                ) : (
                    <span
                        onDoubleClick={onDoubleClickCallBack}
                        className={spanClassName}

                        {...restSpanProps}
                    >
                        {children || restProps.value}
                    </span>
                )
            }
        </>
    )
}

export default EditableSpan

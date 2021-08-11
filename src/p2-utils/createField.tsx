import React, {ChangeEvent} from "react";
import {ElementColorVariants} from "../p1-main/m1-ui/common/c2-Button/ButtonAlt";
import {InputAlt} from "../p1-main/m1-ui/common/c1-Input/InputAlt";


export const createField = (name: string, value: string, error?: string | null,
                            handler?: (e: ChangeEvent<HTMLInputElement>) => void,
                            variant?: ElementColorVariants, placeholder?: string, type?: string,
                            blur?: (e: React.FocusEvent<any>) => void) => {

    return (
        <>
            <InputAlt
                variant={variant}
                placeholder={placeholder}
                type={type}
                onChange={handler}
                name={name}
                onBlur={blur}
                value={value}
                style={{minWidth: "300px"}}
                error={error}
            />
        </>
    )
}
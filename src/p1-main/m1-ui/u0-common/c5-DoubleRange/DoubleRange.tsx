import React, {ChangeEvent} from "react";
import css from "./RangeDouble.module.css";
import Slider from "@material-ui/core/Slider";

type SuperDoubleRangePropsType = {
    onChangeRangeFirst?: (value: number) => void
    onChangeRangeSecond?: (value: number) => void
    onChangeRange?: ([min, max]: Array<number>) => void
    value: [number, number]
    disabled?: boolean
    min?: number
    max?: number
    onClickHandler?: (e: ChangeEvent<{}>) => void
}

export const DoubleRange: React.FC<SuperDoubleRangePropsType> = props => {
    const {onChangeRangeFirst, onChangeRangeSecond, onChangeRange, value, disabled, min, max, onClickHandler} = props
    const onChangeDoubleRange = (value: [number, number]) => {
        onChangeRangeFirst && onChangeRangeFirst(value[0])
        onChangeRangeSecond && onChangeRangeSecond(value[1])
        onChangeRange && onChangeRange([value[0], value[1]])
    }

    const onChangeCallback = (e: ChangeEvent<{}>, value: number | number[]) => {
        onChangeDoubleRange(value as [number, number])
    }

    function valuetext(value: number) {
        return `${value}`;
    }

    return <Slider
                className={css.doubleRange}
                value={value}
                onChange={onChangeCallback}
                disabled={disabled}
                min={min}
                max={max}
                valueLabelDisplay="on"
                getAriaValueText={valuetext}
                onClick={onClickHandler}
            />
}
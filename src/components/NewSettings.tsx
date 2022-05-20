import React, {ChangeEvent} from "react";

type NewSettingsPropsType = {
    startValue: number
    maxValue: number
    setMaxValue: (n:number) => void
    setShowNumber: (n: boolean) => void
    setStartValue: (n: number ) => void
}

export const NewSettings = (props: NewSettingsPropsType) => {

    const inputClass = props.maxValue === props.startValue || props.maxValue < 0 || props.startValue < 0 || props.startValue > props.maxValue ? 'error' : ''

    const onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(parseInt(e.currentTarget.value))
        props.setShowNumber(false)
    }

    const onStartValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(parseInt(e.currentTarget.value))
        props.setShowNumber(false)
    }

    return (
            <div className='inputs'>
                <div className='input'>
                    max value: <input
                    value={props.maxValue}
                    type='number'
                    onChange={onMaxValueChangeHandler}
                    className={inputClass}
                />
                </div>
                <div className='input'>
                    start value: <input
                    value={props.startValue}
                    type='number'
                    onChange={onStartValueChangeHandler}
                    className={inputClass}
                />
                </div>
            </div>
    )
}
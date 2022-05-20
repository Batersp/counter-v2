import React from "react";

type NewCountPropsType = {
    startValue: number
    maxValue: number
    number: number
    showNumber: boolean
}

export const NewCount = (props: NewCountPropsType) => {

    const textForCounter = props.maxValue === props.startValue || props.maxValue < 0 || props.startValue < 0 || props.startValue > props.maxValue ? 'error' : 'enter your settings'

    const numberClass = props.maxValue === props.number || props.maxValue === props.startValue || props.maxValue < 0 || props.startValue < 0 || props.startValue > props.maxValue ? 'count red' : 'count'

    const classForCounter = textForCounter === 'enter your settings' && !props.showNumber ? 'count' : numberClass

    return (

        <div
            className={classForCounter}>{props.showNumber && props.startValue >= 0 && props.maxValue !== props.startValue && props.startValue < props.maxValue
            ? props.number
            : textForCounter
        }</div>
    )
}
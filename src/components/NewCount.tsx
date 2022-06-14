import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";


export const NewCount = React.memo(() => {

    let startValue = useSelector<AppRootStateType, number>(state => state.count.startValue)
    let maxValue = useSelector<AppRootStateType, number>(state => state.count.maxValue)
    let number = useSelector<AppRootStateType, number>(state => state.count.number)
    let showNumber = useSelector<AppRootStateType, boolean>(state => state.count.showNumber)


    const textForCounter = maxValue === startValue || maxValue < 0 || startValue < 0 || startValue > maxValue ? 'error' : 'enter your settings'

    const numberClass = maxValue === number || maxValue === startValue || maxValue < 0 || startValue < 0 || startValue > maxValue ? 'count red' : 'count'

    const classForCounter = textForCounter === 'enter your settings' && !showNumber ? 'count' : numberClass

    return (

        <div
            className={classForCounter}>{showNumber && startValue >= 0 && maxValue !== startValue && startValue < maxValue
            ? number
            : textForCounter
        }</div>
    )
})
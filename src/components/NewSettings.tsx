import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {maxValueChangeAC, setShowNumberAC, startValueChangeAC} from "../state/count-reducer";


export const NewSettings = React.memo(() => {

    let startValue = useSelector<AppRootStateType, number>(state => state.count.startValue)
    let maxValue = useSelector<AppRootStateType, number>(state => state.count.maxValue)
    const dispatch = useDispatch()

    const inputClass = maxValue === startValue || maxValue < 0 || startValue < 0 || startValue > maxValue ? 'error' : ''

    const MaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(maxValueChangeAC(+e.currentTarget.value))
        dispatch(setShowNumberAC(false))
    }

    const startValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(startValueChangeAC(+e.currentTarget.value))
        dispatch(setShowNumberAC(false))
    }

    return (
        <div className='inputs'>
            <div className='input'>
                max value: <input
                value={maxValue}
                type='number'
                onChange={MaxValueChange}
                className={inputClass}
            />
            </div>
            <div className='input'>
                start value: <input
                value={startValue}
                type='number'
                onChange={startValueChange}
                className={inputClass}
            />
            </div>
        </div>
    )
})
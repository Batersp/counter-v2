import React, {useCallback} from "react";
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {increaseNumberAC, resetNumberAC, setSettingsAC} from "../state/count-reducer";


export const Buttons = React.memo(() => {

    let number = useSelector<AppRootStateType, number>(state => state.count.number)
    let maxValue = useSelector<AppRootStateType, number>(state => state.count.maxValue)
    let showNumber = useSelector<AppRootStateType, boolean>(state => state.count.showNumber)
    let startValue = useSelector<AppRootStateType, number>(state => state.count.startValue)
    let counterMode = useSelector<AppRootStateType, boolean>(state => state.count.counterMode)

    const dispatch = useDispatch()

    const increaseNumber = useCallback(() => {
        dispatch(increaseNumberAC())
    }, [])

    const resetNumber = useCallback(() => {
        dispatch(resetNumberAC())
    }, [])

    const setSettings = useCallback(() => {
        dispatch(setSettingsAC())
    }, [])

    const incDisabled = number === maxValue || !showNumber || startValue < 0 || startValue > maxValue;

    const resDisabled = number === startValue || !showNumber;

    const setDisabled = maxValue === startValue || startValue > maxValue || startValue < 0 || maxValue < 0

    return (
        <div className='counterBtn'> {!counterMode ?
            <>
                <div><Button ClassName='btn' name={'inc'} callBack={increaseNumber} disabled={incDisabled}/></div>
                <div><Button ClassName='btn' name={'res'} callBack={resetNumber} disabled={resDisabled}/></div>
                <div><Button ClassName='btn' name={'set'} callBack={setSettings} disabled={setDisabled}/></div>
            </>
            : <div><Button ClassName='btn' name={'set'} callBack={setSettings} disabled={setDisabled}/></div>
        }
        </div>
    )
})
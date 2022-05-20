import React from "react";
import {Button} from "./Button";

type ButtonsPropsType = {
    number: number
    maxValue: number
    showNumber: boolean
    startValue: number
    counterMode: boolean
    increaseNumber: () => void
    resetNumber: () => void
    setSettings: () => void
}

export const Buttons: React.FC<ButtonsPropsType> = ({maxValue, startValue, showNumber, ...props}) => {

    const incDisabled = props.number === maxValue || !showNumber || startValue < 0 || startValue > maxValue;

    const resDisabled = props.number === startValue || !showNumber;

    const setDisabled = maxValue === startValue || startValue > maxValue || startValue < 0 || maxValue < 0

    return (
        <div className='counterBtn'> {!props.counterMode ?
            <>
                <div><Button ClassName='btn' name={'inc'} callBack={props.increaseNumber} disabled={incDisabled}/></div>
                <div><Button ClassName='btn' name={'res'} callBack={props.resetNumber} disabled={resDisabled}/></div>
                <div><Button ClassName='btn' name={'set'} callBack={props.setSettings} disabled={setDisabled}/></div>
            </>
            : <div><Button ClassName='btn' name={'set'} callBack={props.setSettings} disabled={setDisabled}/></div>
        }
        </div>
    )
}
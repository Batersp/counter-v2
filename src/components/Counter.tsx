import React from "react";
import {Buttons} from "./Buttons";
import {NewCount} from "./NewCount";
import {NewSettings} from "./NewSettings";

export type CounterPropsType = {
    number: number
    startValue: number
    maxValue: number
    showNumber: boolean
    increaseNumber: () => void
    resetNumber: () => void
    setSettings: () => void
    counterMode: boolean
    setMaxValue: (n: number) => void
    setStartValue: (n: number) => void
    setShowNumber: (n: boolean) => void
}

export const Counter = (props: CounterPropsType) => {

    return (
            <div className='main'>
                 {!props.counterMode ?
                    <NewCount startValue={props.startValue}
                              maxValue={props.maxValue}
                              number={props.number}
                              showNumber={props.showNumber}
                    />
                    :
                    <NewSettings startValue={props.startValue}
                                 maxValue={props.maxValue}
                                 setMaxValue={props.setMaxValue}
                                 setStartValue={props.setStartValue}
                                 setShowNumber={props.setShowNumber}
                    />
                }

                <Buttons number={props.number}
                         maxValue={props.maxValue}
                         startValue={props.startValue}
                         showNumber={props.showNumber}
                         increaseNumber={props.increaseNumber}
                         resetNumber={props.resetNumber}
                         setSettings={props.setSettings}
                         counterMode={props.counterMode}
                />
            </div>
    )
}

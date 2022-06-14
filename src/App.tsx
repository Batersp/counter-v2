import React, {useEffect} from 'react';
import './App.css';
import {NewCount} from "./components/NewCount";
import {NewSettings} from "./components/NewSettings";
import {Buttons} from "./components/Buttons";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {InitialStateType, maxValueChangeAC, setNeNumberValueAC, startValueChangeAC} from "./state/count-reducer";

function App() {

    let state = useSelector<AppRootStateType, InitialStateType>(state => state.count)
    const dispatch = useDispatch()

    useEffect(() => {
        let maxValueFromLS = localStorage.getItem('maxValue')
        let startValueFromLS = localStorage.getItem('startValue')
        if (maxValueFromLS && startValueFromLS) {
            let newMaxValue = JSON.parse(maxValueFromLS);
            let newStartValue = JSON.parse(startValueFromLS);
            dispatch(maxValueChangeAC(newMaxValue))
            dispatch(startValueChangeAC(newStartValue))
            dispatch(setNeNumberValueAC(newStartValue))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
        localStorage.setItem('startValue', JSON.stringify(state.startValue))//сохраняю значения max and start value
    }, [state.maxValue, state.startValue])


    return (
        <div className="App">
            <div className='main'>
                {!state.counterMode ?
                    <NewCount/>
                    :
                    <NewSettings/>
                }
                <Buttons/>
            </div>
        </div>
    );
}

export default App;

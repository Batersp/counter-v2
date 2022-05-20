import React, {useEffect, useState} from 'react';
import './App.css';
import {NewCount} from "./components/NewCount";
import {NewSettings} from "./components/NewSettings";
import {Buttons} from "./components/Buttons";

function App() {

    const [maxValue, setMaxValue] = useState(/*limitedValue*/ 5)        // максимальное значение в setting
    const [startValue, setStartValue] = useState(0)      // стартовое значение в setting
    const [number, setNumber] = useState<number>(startValue)      // число которое увеличивается в counter
    const [showNumber, setShowNumber] = useState(true) //не могу менять счетчик на текст ( 2 варианта)
    const [counterMode, setCounterMode] = useState(true)

    useEffect(() => {
        let maxValueFromLS = localStorage.getItem('maxValue')
        let startValueFromLS = localStorage.getItem('startValue')
        if (maxValueFromLS && startValueFromLS) {
            let newMaxValue = JSON.parse(maxValueFromLS);
            let newStartValue = JSON.parse(startValueFromLS);
            setMaxValue(newMaxValue)
            setStartValue(newStartValue)
            setNumber(newStartValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))//сохраняю значения max and start value
    }, [maxValue, startValue])

    const increaseNumber = () => { // что происходит при нажатии на кнопку inc
        setNumber(number + 1)
    }
    const resetNumber = () => {  // что происходит при нажатии на кнопку res
        setNumber(startValue)
    }

    const setSettings = () => {  // что происходит при нажатии на кнопку set
        setNumber(startValue)
        setShowNumber(true)
        setCounterMode(!counterMode)
    }
    return (
        <div className="App">
            <div className='main'>
                {!counterMode ?
                    <NewCount startValue={startValue}
                              maxValue={maxValue}
                              number={number}
                              showNumber={showNumber}
                    />
                    :
                    <NewSettings startValue={startValue}
                                 maxValue={maxValue}
                                 setMaxValue={setMaxValue}
                                 setStartValue={setStartValue}
                                 setShowNumber={setShowNumber}
                    />
                }
                <Buttons number={number}
                         maxValue={maxValue}
                         startValue={startValue}
                         showNumber={showNumber}
                         increaseNumber={increaseNumber}
                         resetNumber={resetNumber}
                         setSettings={setSettings}
                         counterMode={counterMode}
                />
            </div>
        </div>
    );
}

export default App;

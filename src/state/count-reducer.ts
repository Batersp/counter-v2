const INCREASE_NUMBER = 'INCREASE_NUMBER'
const RESET_NUMBER = 'RESET_NUMBER'
const SET_SETTINGS = 'SET_SETTINGS'
const MAX_VALUE_CHANGE = 'MAX_VALUE_CHANGE'
const SET_SHOW_NUMBER = 'SET_SHOW_NUMBER'
const START_VALUE_CHANGE = 'START_VALUE_CHANGE'
const SET_NEW_NUMBER_VALUE = 'SET_NEW_NUMBER_VALUE'


export type InitialStateType = {
    startValue: number
    maxValue: number
    number: number
    showNumber: boolean
    counterMode: boolean
}

const initialState: InitialStateType = {
    startValue: 0,
    maxValue: 0,
    number: 0,
    showNumber: true,
    counterMode: true
}


export const countReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case INCREASE_NUMBER: {
            return {...state, number: state.number + 1}
        }
        case RESET_NUMBER: {
            return {...state, number: state.startValue}
        }
        case SET_SETTINGS: {
            return {...state, number: state.startValue, showNumber: true, counterMode: !state.counterMode}
        }
        case MAX_VALUE_CHANGE: {
            return {...state, maxValue: action.payload.currentValue}
        }
        case SET_SHOW_NUMBER: {
            return {...state, showNumber: action.payload.show}
        }
        case START_VALUE_CHANGE: {
            return {...state, startValue: action.payload.currentValue}
        }
        case SET_NEW_NUMBER_VALUE: {
            return {...state, number: action.payload.newNumber}
        }

        default:
            return state
    }

}

type ActionType =
    IncreaseNumberACType
    | ResetNumberACType
    | SetSettingsACType
    | MaxValueChangeACType
    | SetShowNumberACType
    | StartValueChangeACType
    | SetNeNumberValueACType

type IncreaseNumberACType = ReturnType<typeof increaseNumberAC>
type ResetNumberACType = ReturnType<typeof resetNumberAC>
type SetSettingsACType = ReturnType<typeof setSettingsAC>
type MaxValueChangeACType = ReturnType<typeof maxValueChangeAC>
type SetShowNumberACType = ReturnType<typeof setShowNumberAC>
type StartValueChangeACType = ReturnType<typeof startValueChangeAC>
type SetNeNumberValueACType = ReturnType<typeof setNeNumberValueAC>

export const increaseNumberAC = () => {
    return {
        type: INCREASE_NUMBER
    } as const
}

export const resetNumberAC = () => {
    return {
        type: RESET_NUMBER
    } as const
}

export const setSettingsAC = () => {
    return {
        type: SET_SETTINGS
    } as const
}

export const maxValueChangeAC = (currentValue: number) => {
    return {
        type: MAX_VALUE_CHANGE,
        payload: {currentValue}
    } as const
}

export const setShowNumberAC = (show: boolean) => {
    return {
        type: SET_SHOW_NUMBER,
        payload: {show}
    } as const
}

export const startValueChangeAC = (currentValue: number) => {
    return {
        type: START_VALUE_CHANGE,
        payload: {currentValue}
    } as const
}

export const setNeNumberValueAC = (newNumber: number) => {
    return {
        type: SET_NEW_NUMBER_VALUE,
        payload: {newNumber}
    } as const
}
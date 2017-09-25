import { combineReducers } from 'redux'

const MAIN = 'MAIN'

export const main = (main) => ({
    type: MAIN,
    main
})

export const mainReducer = (state = '', action) => {
    switch(action.type) {
        case MAIN:
            return action.main
    }
    return state;
}

export default combineReducers({
    main: mainReducer
})
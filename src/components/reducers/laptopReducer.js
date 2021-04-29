import { BUY_LAPTOP } from '../actions/type'

const initialState = {
    numberOfLaptops: 1000
}

export const lapTopReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case BUY_LAPTOP:
            return {
                numberOfLaptops: state.numberOfLaptops - 1

            }
        default:
            return state

    }

}


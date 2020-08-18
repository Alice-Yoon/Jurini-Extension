const TOGGLE_CARD = 'search/TOGGLE_CARD';
const UPDATE_VALUE = 'search/UPDATE_VALUE'

export const toggleCards = (payload) => ({
    type: TOGGLE_CARD,
    payload
});

export const updateValue = (value) => ({
    type: UPDATE_VALUE,
    payload: {
        newValue: value
    }
})

const initialState = {
    isShow: false,
    value: '',
}

function search(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_CARD:
            return {
                ...state,
                isShow: action.payload
            }
        case UPDATE_VALUE:
            return {
                ...state,
                value: action.payload.newValue
            }
        default:
            return state;
    }
}

export default search;
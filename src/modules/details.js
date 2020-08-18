const TOGGLE_SHOW = 'details/TOGGLE_SHOW';

export const toggleDetails = (payload) => ({
    type: TOGGLE_SHOW,
    payload
});

const initialState = {
    isShow: false,
}

function details(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_SHOW:
            return {
                ...state,
                isShow: action.payload
            }
        default:
            return state;
    }
}

export default details;
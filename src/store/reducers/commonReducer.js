import { commonActionTypes } from "../actionTypes";

const initialState = {
    requesting: false,
}

const commonReducer = (state, action) => {
    state = state || initialState;

    switch (action.type) {
        case commonActionTypes.ON_ASYNC_REQUEST:
            return {
                ...state,
                requesting: true,
            };
        case commonActionTypes.ON_ASYNC_RESPONSE_SUCCESS:
            return {
                ...state,
                requesting: false,
                error: null,
            };
        case commonActionTypes.ON_ASYNC_RESPONSE_FAILURE:
            return {
                ...state,
                requesting: false,
                error: "Async request failed!",
            };
        default:
            return state;
    }
};

export default commonReducer;

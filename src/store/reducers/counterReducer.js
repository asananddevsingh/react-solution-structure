import { counterActionTypes } from "../actionTypes";

const initialState = { currentCount: 10 };

const counterReducer = (state, action) => {
  state = state || initialState;

  switch (action.type) {
    case counterActionTypes.ON_INCREMENT:
      return {
        ...state,
        currentCount: state.currentCount + 1,
      };
    case counterActionTypes.ON_DECREMENT:
      return {
        ...state,
        currentCount: state.currentCount - 1,
      };
    case counterActionTypes.ON_ASYNC_ADDITION_RESPONSE:
      return {
        ...state,
        currentCount: state.currentCount + action.payload,
      };
    case counterActionTypes.ON_ASYNC_SUBSTRACTION_RESPONSE:
      return {
        ...state,
        currentCount: state.currentCount - action.payload,
      };
    case counterActionTypes.ON_ASYNC_ADDITION_WITH_LOADER_SUCCESS_RESPONSE:
      return {
        ...state,
        currentCount: state.currentCount + action.payload
      };
    default:
      return state;
  }
};

export default counterReducer;

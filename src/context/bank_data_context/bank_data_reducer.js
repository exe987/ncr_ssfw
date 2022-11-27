import { GET_BANK_DATA, GET_BANK_DATA_ERROR, GET_BANK_DATA_SUCCESS } from './types';

const bankDataReducer = (state, action) => {
  switch (action.type) {
    case GET_BANK_DATA:
      return {
        ...state,
        loader: true,
      };
    default:
      return state;
  }
};

export default bankDataReducer;

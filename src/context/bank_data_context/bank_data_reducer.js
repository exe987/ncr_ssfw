import { CHANGE_PAGE, GET_BANK_DATA, GET_BANK_DATA_ERROR, GET_BANK_DATA_SUCCESS, SELECT_BANK_ACCOUNT } from './types';

const bankDataReducer = (state, action) => {
  switch (action.type) {
    case GET_BANK_DATA:
      return {
        ...state,
      };

    case GET_BANK_DATA_SUCCESS:
      return {
        ...state,
        loader: false,
        accounts: action.payload,
        savings_accounts: action.payload.filter((data) => data.tipo_letras === 'CA'),
        current_accounts: action.payload.filter(
          (data) => data.tipo_letras === 'CC' || data.tipo_letras === 'Cc' || data.tipo_letras === 'CCP'
        ),
        pages: Math.ceil(action.payload.length / 5),
      };

    case GET_BANK_DATA_ERROR:
      return {
        ...state,
      };

    case SELECT_BANK_ACCOUNT:
      return {
        ...state,
        selected_account: state.accounts.filter((data) => data.n === action.payload),
      };

    case CHANGE_PAGE:
      return {
        ...state,
        page: state.page + action.payload,
      };

    default:
      return state;
  }
};

export default bankDataReducer;

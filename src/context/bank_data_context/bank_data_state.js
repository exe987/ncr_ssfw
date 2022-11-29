import React, { useReducer } from 'react';
import BankDataContext from './bank_data_context';
import bankDataReducer from './bank_data_reducer';
import { GET_BANK_DATA, GET_BANK_DATA_ERROR, GET_BANK_DATA_SUCCESS, SELECT_BANK_ACCOUNT, CHANGE_PAGE } from './types';

const BankDataState = (props) => {
  const initialState = {
    loader: true,
    accounts: null,
    savings_accounts: null,
    current_accounts: null,
    selected_account: null,
    page: 0,
    pages: null,
  };

  //REDUCER
  const [state, dispatch] = useReducer(bankDataReducer, initialState);

  //FUNCTIONS
  const getDataBank = async () => {
    dispatch({
      type: GET_BANK_DATA,
    });
    try {
      const response = await fetch(`https://api.npoint.io/97d89162575a9d816661`).then((res) => res.json());
      dispatch({
        type: GET_BANK_DATA_SUCCESS,
        payload: response.cuentas,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_BANK_DATA_ERROR,
      });
    }
  };

  const getAccountType = (type) => {
    if (type === 'CC' || type === 'Cc' || type === 'CCP') {
      return 'Cuenta corriente';
    } else {
      return 'Caja de ahorro';
    }
  };

  const selectAccount = async (data) => {
    dispatch({
      type: SELECT_BANK_ACCOUNT,
      payload: data,
    });
  };

  const changePage = (i) => {
    dispatch({
      type: CHANGE_PAGE,
      payload: i,
    });
  };

  return (
    <BankDataContext.Provider
      value={{
        getDataBank,
        selectAccount,
        getAccountType,
        changePage,
        loader: state.loader,
        savings_accounts: state.savings_accounts,
        current_accounts: state.current_accounts,
        accounts: state.accounts,
        selected_account: state.selected_account,
        page: state.page,
        pages: state.pages,
      }}>
      {props.children}
    </BankDataContext.Provider>
  );
};

export default BankDataState;

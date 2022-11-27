import React, { useReducer } from 'react';
import BankDataContext from './bank_data_context';
import bankDataReducer from './bank_data_reducer';
import { GET_BANK_DATA, GET_BANK_DATA_ERROR, GET_BANK_DATA_SUCCESS } from './types';

const BankDataState = (props) => {
  const initialState = {
    loader: false,
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
      console.log(response);
      dispatch({
        type: GET_BANK_DATA_SUCCESS,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_BANK_DATA_ERROR,
      });
    }
  };

  return <BankDataContext.Provider value={{getDataBank}}>{props.children}</BankDataContext.Provider>;
};

export default BankDataState;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BankDataContext from '../../context/bank_data_context/bank_data_context';
import './BtnBankAccount.css';

const BtnBankAccount = ({ account_type, account_number, id }) => {
  const bankDataContext = useContext(BankDataContext);
  const { selectAccount, getAccountType } = bankDataContext;

  return (
    <Link className='btn_ba' to={`/${id}`} onClick={() => selectAccount(account_number)}>
      <p>{getAccountType(account_type)}</p>
      <p>N°: {account_number && account_number}</p>
    </Link>
  );
};

export default BtnBankAccount;

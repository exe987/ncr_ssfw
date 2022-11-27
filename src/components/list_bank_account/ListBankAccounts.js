import React from 'react';
import BtnBankAccount from '../btn_bank_account/BtnBankAccount';
import './ListBankAccounts.css';

const ListBankAccounts = () => {
  return (
    <div className='lba'>
      <h3>Consulta de Saldo</h3>
      <h2>Selecciona la cuenta a consultar</h2>
      <div className='list_bank_accounts'>
        <BtnBankAccount />
        <BtnBankAccount />
        <BtnBankAccount />
        <BtnBankAccount />
        <BtnBankAccount />
        <BtnBankAccount />
      </div>
    </div>
  );
};

export default ListBankAccounts;

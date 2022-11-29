import React, { useContext } from 'react';
import BankDataContext from '../../context/bank_data_context/bank_data_context';
import './BalanceBank.css';

const BalanceBank = () => {
  const bankDataContext = useContext(BankDataContext);
  const { selected_account, getAccountType } = bankDataContext;
  if (selected_account) {
    const account = selected_account[0];
    return (
      <div className='balance_account'>
        <h3>Consulta de Saldo</h3>
        <h2>Selecciona la cuenta a consultar</h2>
        <p>Saldo de la cuenta: {account.moneda} {account.saldo}</p>
        <p>Tipo de cuenta: {getAccountType(account.tipo_letras)}</p>
        <p>Numero de cuenta: {account.n}</p>
      </div>
    );
  }
};

export default BalanceBank;

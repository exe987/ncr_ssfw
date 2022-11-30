import React, { useContext } from 'react';
import BtnBankAccount from '../btn_bank_account/BtnBankAccount';
import BankDataContext from '../../context/bank_data_context/bank_data_context';
import './ListBankAccounts.css';

const ListBankAccounts = ({ pagination }) => {
  const bankDataContext = useContext(BankDataContext);
  const { pages, changePage, page } = bankDataContext;

  if (pagination.length > 1) {
    return (
      <div className='lba'>
        <h3>Consulta de Saldo</h3>
        <h2>Selecciona la cuenta a consultar</h2>
        <div className='list_bank_accounts'>
          {page >= 1 ? (
            <button className='btn_ba' onClick={() => changePage(-1)}>
              <p>{'<< Opciones anteriores'}</p>
            </button>
          ) : null}
          {pagination[page]?.map((data, index) => (
            <BtnBankAccount key={index} id={index} account_type={data.tipo_letras} account_number={data.n} />
          ))}
          {page <= pages - 2 ? (
            <button className='btn_ba' onClick={() => changePage(1)}>
              <p>{'Más opciones >>'}</p>
            </button>
          ) : null}
        </div>
      </div>
    );
  } else {
    return window.location.reload();
  }
};

export default ListBankAccounts;

import React, { useEffect, useContext } from 'react';
import BankDataContext from '../context/bank_data_context/bank_data_context';
import Layout from '../layout/Layout';
import ListBankAccounts from '../components/list_bank_account/ListBankAccounts';

const HomeBank = () => {
  const bankDataContext = useContext(BankDataContext);
  const { getDataBank } = bankDataContext;
  useEffect(() => {
    getDataBank();
  }, []);

  return (
    <Layout>
      <ListBankAccounts />
    </Layout>
  );
};

export default HomeBank;

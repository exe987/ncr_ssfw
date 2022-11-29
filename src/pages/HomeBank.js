import React, { useEffect, useContext, useState } from 'react';
import BankDataContext from '../context/bank_data_context/bank_data_context';
import Layout from '../layout/Layout';
import ListBankAccounts from '../components/list_bank_account/ListBankAccounts';

const HomeBank = () => {
  const bankDataContext = useContext(BankDataContext);
  const { getDataBank, loader, accounts } = bankDataContext;

  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    getDataBank();
    if (accounts) {
      const a = paginate(accounts);
      setPagination(a);
    }
    //eslint-disable-next-line
  }, [loader]);

  const paginate = (a) => {
    let acc = a;
    let items_per_page = 4;
    let first_page = acc?.splice(0, 5);
    let pagination = [];
    pagination.push(first_page);
    while (acc?.length > 0) {
      pagination.push(acc.splice(0, items_per_page));
    }
    return pagination;
  };

  return <Layout>{pagination && <ListBankAccounts pagination={pagination} />}</Layout>;
};

export default HomeBank;

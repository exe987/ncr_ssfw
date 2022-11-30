import React from 'react';
import Layout from '../layout/Layout';
import BalanceBank from '../components/balance_bank/BalanceBank';
import BtnToHome from '../components/btn_to_home/BtnToHome';

const AccountData = () => {
  return (
    <Layout>
      <BalanceBank />
      <BtnToHome />
    </Layout>
  );
};

export default AccountData;

import React from 'react';

import AccountMenu from '../../components/AccountMenu';
import Purchase from '../../components/Purchase';
import './PurchasePage.scss';

PurchasePage.propTypes = {

};

function PurchasePage(props) {
  return (
    <div className="container purchasePage">
      <AccountMenu/>
      <Purchase/>
    </div>
    
  );
}

export default PurchasePage;
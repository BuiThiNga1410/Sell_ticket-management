import React from 'react';

import AccountMenu from '../../components/AccountMenu';
import CancelTickets from '../../components/Purchase/CancelTickets';

function CancelTicketsPage() {
  return (
    <div className="container purchasePage">
      <AccountMenu/>
      <CancelTickets/>
    </div>
    
  );
}

export default CancelTicketsPage;

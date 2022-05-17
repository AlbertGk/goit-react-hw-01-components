import PropTypes from 'prop-types';

import {
  TableHead,
  TableHeadItem,
  TableBodyItem,
} from 'Styles/TransactionHistory.styles';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <TableHead>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </TableHead>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TableBodyItem>{item.type}</TableBodyItem>
            <TableBodyItem>{item.amount}</TableBodyItem>
            <TableBodyItem>{item.currency}</TableBodyItem>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
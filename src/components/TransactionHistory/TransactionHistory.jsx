import PropTypes from "prop-types";

import { History, Head, Body, Th } from "./TransactionHistory.styled";

export const TransactionHistory = ({ transactions }) => {
  return (
    <History>
      <Head>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </Head>

      {transactions.map((item) => (
        <Body key={item.id}>
          <tr>
            <Th>{item.type}</Th>
            <Th>{item.amount}</Th>
            <Th>{item.currency}</Th>
          </tr>
        </Body>
      ))}
    </History>
  );
};

History.prototype = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.number.isRequired,
    })
  ).isRequired,
};

import Card from "../Card";

const List = ({ listTransactions }) => {
  return (
    <div>
      {listTransactions.map((transaction, index) => (
        <Card transaction={transaction} key={index} />
      ))}
    </div>
  );
};

export default List;

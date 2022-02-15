const Card = ({ transaction }) => {
  return (
    <div
      className={transaction.type === "Entrada" ? "Card-Entrada" : "Card-Saida"}
    >
      <div className="Div-Name">
        <h3>{transaction.description}</h3>
        <p>{transaction.type}</p>
      </div>
      <span>R$ {transaction.value}</span>
    </div>
  );
};

export default Card;

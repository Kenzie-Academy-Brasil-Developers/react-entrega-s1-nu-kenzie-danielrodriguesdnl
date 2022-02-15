const TotalMoney = ({ listTransactions }) => {
  const initialValue = 0;
  const totalValue = listTransactions.reduce(
    (totalValue, currentValue) => totalValue + currentValue.value,
    initialValue
  );

  return (
    <div className="Div-TotalValue">
      <div className="Div-title">
        <h3>Valor total:</h3>
        <p>Valor liquido referente ao saldo da conta</p>
      </div>
      <span>R$ {totalValue}</span>
    </div>
  );
};

export default TotalMoney;

import { useState } from "react";
import "./style.css";

const Form = ({ listTransactions, setListTransactions }) => {
  const [transaction, setTransaction] = useState({
    description: "",
    type: "Defaut",
    value: "",
  });

  const addTransaction = () => {
    if (transaction.type === "Saída") {
      transaction.value = -Math.abs(transaction.value);
    }
    setListTransactions([...listTransactions, transaction]);
  };

  return (
    <div className="Div-insert">
      <div className="Div-description">
        <h3>Descrição</h3>
        <input
          className="Input-description"
          value={transaction.description}
          onChange={(event) =>
            setTransaction({ ...transaction, description: event.target.value })
          }
          placeholder="Digite aqui sua descrição"
        />
        <span>Ex:Compra de roupas</span>
      </div>

      <section className="Section-value">
        <div className="Div-value">
          <h3>Valor</h3>
          <input
            className="Input-value"
            value={transaction.value || 0}
            onChange={(event) =>
              setTransaction({
                ...transaction,
                value: Number(event.target.value),
              })
            }
          />
        </div>

        <div className="Div-select">
          <h3>Tipo de valor</h3>
          <select
            className="Select-option"
            value={transaction.type}
            onChange={(event) =>
              setTransaction({ ...transaction, type: event.target.value })
            }
          >
            <option defaultValue="Default">Default</option>
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
      </section>
      <button className="Button-send" onClick={() => addTransaction()}>
        Inserir valor
      </button>
    </div>
  );
};

export default Form;

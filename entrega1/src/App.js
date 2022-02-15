import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import { useState } from "react";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Saída", value: -150 },
  ]);

  return (
    <div className="App">
      <header>
        {console.log(listTransactions)}
        <h1>Nu Kenzie</h1>
      </header>
      <div className="App-body">
        <div className="Div-body">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <div className="Div-headerCard">
          <div className="Div-headerTitle">
            <h2>Resumo financeiro</h2>
            <div className="Div-headerButtons">
              <button className="Button-Todos">Todos</button>
              <button className="Button-Entradas">Entradas</button>
              <button className="Button-Saidas">Saídas</button>
            </div>
          </div>
          <div className="Div-Cards">
            <List listTransactions={listTransactions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

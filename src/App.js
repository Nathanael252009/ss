// CSS
import "./App.css";
// Components
import Header from "./components/header/Header";
import Money from "./components/money/Money";
import Cards from "./components/cards/Cards";
import Receipt from "./components/receipt/Receipt";

function App() {
  return (
    <div className="App">
      <Header />
      <Money />
      <Cards />
      <Receipt />
    </div>
  );
}

export default App;

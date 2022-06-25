import Card from "../src/components/cards/Card"
import Header from "../src/components/header/Header"
import Navbar from "../src/components/navbar/Navbar"
import data from "./components/helper/data.js"
import "./App.css"


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Card data={data} />

    </div>
  );
}

export default App;

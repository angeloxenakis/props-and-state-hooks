import logo from './logo.svg';
import './App.css';
import { InfoCard } from "./InfoCard.js"
import { React, useState } from 'react'

function App() {
  // let name = "Angelo" <--- non-statefull variable
  let [name, setName] = useState("Angelo")

  const updateName = () => {
    // name = "Super Angelo" <--- non-statefull change
    setName("Super Angelo")
    console.log(name)
  }

  return (
    <div className="App">
      <InfoCard name={name} updateName={updateName}/>
    </div>
  );
}

export default App;

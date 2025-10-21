import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.error("Error fetching bots:", err));
  }, []);

  const handleAddToArmy = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const handleRelease = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const handleDischarge = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then(() => {
        setBots(bots.filter((b) => b.id !== bot.id));
        setArmy(army.filter((b) => b.id !== bot.id));
      })
      .catch((err) => console.error("Error deleting bot:", err));
  };

  return (
    <div className="App">
      <Header />
      <YourBotArmy
        army={army}
        onRelease={handleRelease}
        onDischarge={handleDischarge}
      />
      <BotCollection bots={bots} onAddToArmy={handleAddToArmy} />
    </div>
  );
}

export default App;

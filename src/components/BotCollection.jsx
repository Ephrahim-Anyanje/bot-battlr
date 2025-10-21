import React from "react";

function BotCollection({ bots, onAddToArmy }) {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="bot-list">
        {bots.map((bot) => (
          <div
            key={bot.id}
            className="bot-card"
            onClick={() => onAddToArmy(bot)}
          >
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Class: {bot.class}</p>
            <p>
              ⚔️ {bot.damage} | 🛡️ {bot.armor} | ❤️ {bot.health}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;

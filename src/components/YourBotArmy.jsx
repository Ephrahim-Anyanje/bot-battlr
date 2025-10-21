import React from "react";

function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="your-army">
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {army.length === 0 && <p>No bots enlisted yet. Tap a bot to add it!</p>}
        {army.map((bot) => (
          <div key={bot.id} className="bot-card">
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Class: {bot.class}</p>
            <p>
              ⚔️ {bot.damage} | 🛡️ {bot.armor} | ❤️ {bot.health}
            </p>
            <div className="bot-actions">
              <button onClick={() => onRelease(bot)}>Release</button>
              <button onClick={() => onDischarge(bot)} className="danger">
                Discharge
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;

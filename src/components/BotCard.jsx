import React from "react";

function BotCard({ bot, onClick, onDischarge, isArmy }) {
  return (
    <div className={`bot-card ${isArmy ? "army-card" : ""}`} onClick={onClick}>
      <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
      <h3>{bot.name}</h3>
      <p className="bot-class">{bot.bot_class}</p>
      <div className="stats">
        <p>❤️ {bot.health}</p>
        <p>⚔️ {bot.damage}</p>
        <p>🛡️ {bot.armor}</p>
      </div>
      <p className="catchphrase">"{bot.catchphrase}"</p>
      {isArmy && (
        <button
          className="discharge-btn"
          onClick={(e) => {
            e.stopPropagation();
            onDischarge(bot);
          }}
        >
          ✖
        </button>
      )}
    </div>
  );
}

export default BotCard;

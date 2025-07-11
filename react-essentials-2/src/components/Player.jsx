import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing((isEditing)=>!isEditing);
  }

  let playerName = <span className="player-name">{name}</span>;
  //   let btnContent = "Save";

  if (isEditing) {
    playerName = <input type="text" required value={name}/>;
    // btnContent = "Edit"
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

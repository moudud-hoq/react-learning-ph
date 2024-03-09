import { useState } from "react";

function UseStateAndHooks() {
  const [team, setTeam] = useState(11);

  const handleAdd = () => {
    if (team < 20) {
      const newTeam = team + 1;
      setTeam(newTeam);
    }
  };

  const handleRemove = () => {
    if (team > 11) {
      const newTeam = team - 1;
      setTeam(newTeam);
    }
  };

  const teamStyle = {
    border: "2px solid red",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };

  return (
    <div style={teamStyle}>
      <h3>Players: {team}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}

export default UseStateAndHooks;

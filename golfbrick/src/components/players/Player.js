import React, { useState } from "react";
import "./Player.css";
import { TextField, Fab } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

const Player = (props) => {
  const [removedPlayer, setRemovedPlayer] = useState(props.player.id); //setting this original state alleviates the need to double click to remove player
  

  const removePlayerHandler = () => {
    props.onRemovedPlayerId(removedPlayer); //passing up state to remove player
  };

  const playerNameHandler = (event) => {
    let player = event.target.value
    props.onPlayerChange(player, props.player.id); 
    //passing player name up to players.js
  };

  const postcodeHandler = (event) => {
    let postcode = event.target.value
    props.onPostcodeChange(postcode, props.player.id); 
  };
  return (
    <div className="player-section">
      <div>
        <TextField
          id="outlined-name"
          label="Player Name"
          onChange={playerNameHandler}
        />
      </div>
      <div className="postcode">
        <TextField
          id="outlined-basic"
          label="Postcode"
          variant="outlined"
          onChange={postcodeHandler}
        />
      </div>
      <Fab
        style={{ backgroundColor: "#FF1A1E" }}
        size="small"
        aria-label="remove"
        onClick={removePlayerHandler}
      >
        <RemoveIcon style={{ color: "white" }} />
      </Fab>
    </div>
  );
};

export default Player;

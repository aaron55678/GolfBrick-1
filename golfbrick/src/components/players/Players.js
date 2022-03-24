import React from "react";
import "./Players.css";
import "./Player.css";
import Player from "./Player";
import { Button } from "@mui/material";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";

const Players = (props) => {
  const removedPlayerIdHandler = (removedId) => {
    props.onDeletedPlayerChange(removedId); //passing up state
  }; //need to rerender the map function below

  const playerChangeHandler = (player, playerId) => {
    props.onPlayerDataChange(player, playerId);
     //passing player name up to app.js
  };

  const postcodeChangeHandler = (postcode, playerId) => {
    props.onPostcodeDataChange(postcode, playerId);
    //passing player name up to app.js
  };

  const submittedFormHandler = () => {
      console.log(props.players);
  };

  return (
    <div className="players-section">
      <ul>
        {props.players.map((player) => {
          return (
            <li key={player.id}>
              <Player
                player={player}
                onRemovedPlayerId={removedPlayerIdHandler}
                onPlayerChange={playerChangeHandler}
                onPostcodeChange={postcodeChangeHandler}
              ></Player>
            </li>
          );
        })}
      </ul>
      <Button
        className="search-button"
        size="large"
        variant="outlined"
        endIcon={<GolfCourseIcon />}
        onClick={submittedFormHandler}
      >
        Search
      </Button>
      
    </div>
  );
};

export default Players;

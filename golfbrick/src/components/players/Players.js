import React from "react";
import "./Players.css";
import "./Player.css";
import Player from "./Player";
import Search from "./Search";


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

  const searchClickHandler = (status) => {
    props.onSearchStatusChange(status);
  }

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
      <Search 
        players={props.addedPlayer}
        onSearchClick={searchClickHandler}
      />
      
    </div>
  );
};

export default Players;

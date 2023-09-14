import React, { useState, useEffect } from "react";
import PlayerInfoCard from "./PlayerInfoCard";

export default function PlayerSelect(props) {
  const [input, setInput] = useState("");
  const [playerList, setPlayerList] = useState([]);
  const [playerSelected, setPlayerSelected] = useState();

  useEffect(() => {
    if (input) {
      setPlayerList(
        props.playerData.filter((p) => {
          return (p.first_name + " " + p.second_name)
            .toLowerCase()
            .includes(input);
        })
      );
    } else {
      setPlayerList([]);
    }
  }, [input]);

  function handleChangeInput(e) {
    setInput(e.target.value.toLowerCase());
  }

  function handleClickPlayer(e) {
    setPlayerSelected(
      playerList.find(function (p) {
        return p.id == e.target.closest("li").id;
      })
    );
    setPlayerList([]);
  }

  function showPlayerCard() {
    if (playerSelected) {
      return (
        <PlayerInfoCard
          playerSelected={playerSelected}
          teamPlaysFor={props.teamData.find(function (t) {
            return t.code === playerSelected.team_code;
          })}
        />
      );
    }
  }

  return (
    <div className="fpl-player-select--container">
      <input
        className="fpl-player-select"
        name="player"
        onChange={handleChangeInput}
        type="text"
      />
      <ul className="fpl-player-select__player-list">
        {playerList.map(function (p) {
          return (
            <li
              className="fpl-player-select__player-item"
              id={p.id}
              key={p.id}
              onClick={handleClickPlayer}
            >
              <p>{p.first_name + " " + p.second_name}</p>
            </li>
          );
        })}
      </ul>
      {showPlayerCard()}
    </div>
  );
}

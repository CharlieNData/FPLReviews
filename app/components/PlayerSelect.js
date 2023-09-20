import React, {useState, useEffect} from 'react';
import PlayerInfoCard from './PlayerInfoCard';

/** Search bar for FPL players.
 * @param {*} props
 * @return {React.ReactElement} Player search bar with dropdown select.
*/
export default function PlayerSelect(props) {
  const [input, setInput] = useState('');
  const [playerList, setPlayerList] = useState([]);
  const [playerSelected, setPlayerSelected] = useState();

  useEffect(() => {
    if (input) {
      setPlayerList(
          props.playerData.filter((p) => {
            return (p.first_name + ' ' + p.second_name)
                .toLowerCase()
                .includes(input);
          }),
      );
    } else {
      setPlayerList([]);
    }
  }, [input]);

  /**
   * Handles when value is typed into search bar.
   * @param {*} e
   */
  function handleChangeInput(e) {
    setInput(e.target.value.toLowerCase());
  }

  /**
   * Handles when dropdown player item is clicked.
   * @param {*} e
   */
  function handleClickPlayer(e) {
    setPlayerSelected(
        playerList.find(function(p) {
          return p.id == e.target.closest('li').id;
        }),
    );
    setPlayerList([]);
  }

  /**
   * Displays player card if a player has been selected from search bar.
   * @return {React.ReactElement} Player info card.
   */
  function showPlayerCard() {
    if (playerSelected) {
      return (
        <PlayerInfoCard
          playerSelected={playerSelected}
          teamPlaysFor={props.teamData.find(function(t) {
            return t.code === playerSelected.team_code;
          })}
          fixtures={props.fixtureData.filter((f) => {
            const hasPlayedIn =
              f.team_a === playerSelected.team ||
              f.team_h === playerSelected.team;
            return hasPlayedIn && f.finished;
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
        {playerList.map(function(p) {
          return (
            <li
              className="fpl-player-select__player-item"
              id={p.id}
              key={p.id}
              onClick={handleClickPlayer}
            >
              <p>{p.first_name + ' ' + p.second_name}</p>
            </li>
          );
        })}
      </ul>
      {showPlayerCard()}
    </div>
  );
}

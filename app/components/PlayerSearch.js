import React, {useState, useEffect} from 'react';

export default function PlayerSearch(props) {
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

  function handleChangeInput(e) {
    setInput(e.target.value.toLowerCase());
  }

  function handleClickPlayer(e) {
    setPlayerSelected(
        playerList.find(function(p) {
          return p.id == e.target.closest('li').id;
        }),
    );
    setPlayerList([]);
  }

  return (
    <div className="fpl-player-search--container">
      <input
        className="fpl-player-search"
        name="player"
        onChange={handleChangeInput}
        type="text"
      />
      <ul className="fpl-player-search__player-list">
        {playerList.map(function(p) {
          return (
            <li
              className="fpl-player-search__player-item"
              id={p.id}
              key={p.id}
              onClick={handleClickPlayer}
            >
              <p>{p.first_name + ' ' + p.second_name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

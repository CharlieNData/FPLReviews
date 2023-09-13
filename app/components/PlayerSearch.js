import React, {useState, useEffect} from 'react';

export default function PlayerSearch(props) {
    const [input, setInput] = useState('');
    const [playerList, setPlayerList] = useState([]);

    useEffect(() => {
        if (input) {
            setPlayerList(props.playerData.filter((p) => {
                return (p.first_name + ' ' + p.second_name).toLowerCase().includes(input);
            }))
        } else {
            setPlayerList([]);
        }
    }, [input]);

    function handleChange(e) {
        setInput(e.target.value.toLowerCase());
    }

    return (
        <div className='fpl-player-search--container'>
            <input className='fpl-player-search' name='player' onChange={handleChange} type='text'/>
            <ul className='fpl-player-search__player-list'>
                {playerList.map(function(p) {
                    return (
                        <li className='fpl-player-search__player-item' key={p.id}>
                            <p>{p.first_name + ' ' + p.second_name}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}


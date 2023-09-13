import React, {useState} from 'react';

export default function PlayerSearch(props) {

    const [input, setInput] = useState('');

    function handleChange(e) {
        setInput(e.target.value);
    }

    return (
            <div className='fpl-player-search--container'>
                <input className='fpl-player-search' name='player' onChange={handleChange} type='text'/>
                <ul className='fpl-player-search__player-list'>
                    {props.playerData.map(function(p) {
                        return (
                            <li className='fpl-player-search__player-item' key={p['id']}>
                                <p>{p['first_name'] + ' ' + p['second_name']}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
    );
}


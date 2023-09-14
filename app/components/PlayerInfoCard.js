import React from 'react';

export default function PlayerInfoCard(props) {

  const player = props.playerSelected;
  const team = props.teamPlaysFor;

  return (
    <div className='fpl-player-info-card'>
      <div className='fpl-player-info-card__titles'>
        <h2>{player.first_name + ' ' + player.second_name}</h2>
        <p>{team.name}</p>
      </div>
    </div>
  );
};

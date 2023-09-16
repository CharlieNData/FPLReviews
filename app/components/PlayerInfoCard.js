import React from 'react';
import { Value } from 'sass';

export default function PlayerInfoCard(props) {

  const player = props.playerSelected;
  const team = props.teamPlaysFor;

  const positions = [
    'Goalkeeper', 
    'Defender', 
    'Midfielder', 
    'Forward'
  ];

  const stats = [
    {
      title: 'Goals',
      value:'goals_scored'
    },
    {
      title: 'Assists',
      value:'assists'
    },
    {
      title: 'Form',
      value:'form'
    },
    {
      title: 'Expected Goals',
      value:'expected_goals'
    },
    {
      title: 'Expected Assists',
      value: 'expected_assists'
    },
    {
      title: 'Ownership',
      value:'selected_by_percent'
    }
  ];

  const buildStat = (title, value) => {
    return (
      <tr className='fpl-player-info-card__stats__row'>
        <td className='fpl-player-info-card__stats__item'>{title}: </td>
        <td className='fpl-player-info-card__stats__item'>{player[value]}</td>
      </tr>
    );
  }
  

  return (
    <div className='fpl-player-info-card'>
      <div className='fpl-player-info-card__titles'>
        <h1>{player.first_name + ' ' + player.second_name}</h1>
        <p>{positions[player.element_type-1]} | {team.name}</p>
      </div>
      <div className='fpl-player-info-card__stats--container'>
        <table className='fpl-player-info-card__stats'>
          {stats.map(function(s) {
            return buildStat(s.title, s.value);
          })}
        </table>
      </div>
    </div>
  );
};

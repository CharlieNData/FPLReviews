import React from 'react';

/** Displays information for an individual player.
 * @param {*} props
 * @return {React.ReactElement} The player information card.
*/
export default function PlayerInfoCard(props) {
  const player = props.playerSelected;
  const team = props.teamPlaysFor;

  const positions = [
    'Goalkeeper',
    'Defender',
    'Midfielder',
    'Forward',
  ];

  const stats = [
    {
      title: 'Goals',
      value: 'goals_scored',
    },
    {
      title: 'Assists',
      value: 'assists',
    },
    {
      title: 'Form',
      value: 'form',
    },
    {
      title: 'Expected Goals',
      value: 'expected_goals',
    },
    {
      title: 'Expected Assists',
      value: 'expected_assists',
    },
    {
      title: 'Ownership',
      value: 'selected_by_percent',
    },
  ];

  const buildStat = (title, value, index) => {
    return (
      <tr className='fpl-player-info-card__stats__row' key={index}>
        <td className='fpl-player-info-card__stats__item'>{title}: </td>
        <td className='fpl-player-info-card__stats__item'>{player[value]}</td>
      </tr>
    );
  };

  return (
    <div className='fpl-player-info-card'>
      <div className='fpl-player-info-card__titles'>
        <h1>{player.first_name + ' ' + player.second_name}</h1>
        <p>{positions[player.element_type-1]} | {team.name}</p>
      </div>
      <div className='fpl-player-info-card__fixture-list'>
        {

        }
      </div>
      <div className='fpl-player-info-card__stats--container'>
        <table className='fpl-player-info-card__stats'>
          <tbody>
            {
              stats.map(function(s, i) {
                return buildStat(s.title, s.value, i);
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

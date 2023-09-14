'use client';

import React, {useState, useEffect} from 'react';
import '../../styles/App.scss';

import Header from './Header';
import PlayerSelect from './PlayerSelect';

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://fantasy.premierleague.com/api/bootstrap-static/')
        .then((res) => res.json())
        .then((result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className='fpl-layout__app-container'>
        <Header />
        <PlayerSelect playerData={items.elements} teamData={items.teams} />
      </div>
    );
  }
}

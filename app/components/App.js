"use client";

import React, { useState, useEffect } from "react";
import "../../styles/App.scss";
import Header from "./Header";
import PlayerSelect from "./PlayerSelect";

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [stats, setStats] = useState([]);
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("https://fantasy.premierleague.com/api/bootstrap-static/").then(
        (res) => res.json()
      ),
      fetch("https://fantasy.premierleague.com/api/fixtures/").then((res) =>
        res.json()
      ),
    ]).then(
      ([general, fixtures]) => {
        setIsLoaded(true);
        setStats(general);
        setFixtures(fixtures);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="fpl-layout__app-container">
        <Header />
        <PlayerSelect
          fixtureData={fixtures}
          playerData={stats.elements}
          teamData={stats.teams}
        />
      </div>
    );
  }
}

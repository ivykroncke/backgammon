import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { getToken, removeToken } from "./services/tokenFetcher";

export const Games = props => {
  const [games, setGames] = useState([]);
  const [token, setToken] = useState();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      props.history.push("/login");
    } else {
      setToken(token);
    }
  }, [token]);

  useEffect(() => {
    const token = getToken();
    const getGames = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/games", {
          headers: { Authorization: `Bearer ${token}` }
        });
        const games = response.data;
        setGames(games);
      } catch (error) {
        removeToken();
        props.history.push("/login");
      }
    };
    getGames();
  }, []);

  const gameList = () =>
    games.map(game => {
      return <div key={game.id}>GameId: {game.id}</div>;
    });

  const newGame = async () => {
    const response = await axios.post(
      "http://localhost:3000/api/games",
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(response)
    const game = response.data
    // localStorage.setItem("token", response.data.token);
    props.history.push(`/games/${game.id}`);
  };

  return (
    <Fragment>
      {games.length > 0 && <div>{gameList()}</div>}
      <button onClick={newGame}>Add Game</button>
    </Fragment>
  );
};

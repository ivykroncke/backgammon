import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getToken, removeToken } from "./services/tokenFetcher";
import axios from "axios"

export const Game = props => {
  // const [games, setGames] = useState([]);
  // const [token, setToken] = useState();

  const {id} = useParams()

  useEffect(() => {
    const token = getToken();
    const getGame = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/games/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const game = response.data;
        console.log(game)
      } catch (error) {
        removeToken();
        props.history.push("/login");
      }
    };
    getGame();
  }, []);

  return <div>GAME HERE</div>;
};

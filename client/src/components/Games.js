import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { getToken } from "./services/tokenFetcher"

export const Games = (props) => {

    const [games, setGames] = useState([]);
    const [token, setToken] = useState();

    useEffect(()=> {
        const token = getToken()
        if (!token) {
            props.history.push("/login")
        } else {
            setToken(token)
        }
    }, [token])

    useEffect(()=> {
        const token = getToken()
        const getGames = async () => {
            const response = await axios.get('http://localhost:3000/api/games', { headers: { Authorization: `Bearer ${token}`} })
            const games = response.data
            setGames(games)
        }
        getGames()
    }, [])

    const gameList = () => games.map((game)=> {
        return (
            <div>
                {game.id}
            </div>
        )
    })

    return (
      <Fragment>{games.length && <div>{gameList()}</div>}</Fragment>    
    )
};

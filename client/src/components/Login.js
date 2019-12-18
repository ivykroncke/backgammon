import React, { useEffect } from "react";
import axios from "axios"
import { UserForm } from "./common/userform"
import { getToken } from "./services/tokenFetcher"

export const Login = (props) => {

    useEffect( () => {
        const token = getToken()
        if (token) {
            props.history.push("/games")
        }
    })

    const submitFunction = async (email, password) => {
        const response = await axios.post('http://localhost:3000/auth/login', {email: email, password: password})
        localStorage.setItem("token", response.data.token)
        props.history.push("/games")
    }

    return (
        <UserForm type="login" submitFunction={submitFunction} />
    )
};

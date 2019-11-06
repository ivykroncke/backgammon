import React from "react";
import axios from "axios"
import { UserForm } from "./common/userform"

export const Login = (props) => {

    const submitFunction = async (email, password) => {
        const response = await axios.post('http://localhost:3000/auth/login', {email: email, password: password})
        localStorage.setItem("token", response.data.token)
        props.history.push("/games")
    }

    return (
        <UserForm type="login" submitFunction={submitFunction} />
    )
};

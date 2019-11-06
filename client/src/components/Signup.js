import React from "react";
import axios from "axios"
import { UserForm } from "./common/userform"

export const Signup = (props) => {

    const submitFunction = async (email, password, confirmPassword) => {
        const response = await axios.post('http://localhost:3000/auth/signup', {email, password, password_confirmation: confirmPassword})
        localStorage.setItem("token", response.data.token)
        props.history.push("/games")
    }

    return (
        <UserForm type="signup" submitFunction={submitFunction} />
    )
};

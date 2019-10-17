import React from "react";
import axios from "axios"
import { UserForm } from "./common/userform"

export const Login = () => {

    const submitFunction = (email, password) => {
        axios.post('http://localhost:3000/auth/login', {user: {email: email, password: password}})
    }

    return (
        <UserForm submitFunction={submitFunction} />
    )
};

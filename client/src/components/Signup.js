import React from "react";
import axios from "axios"
import { UserForm } from "./common/userform"

export const Signup = () => {

    const submitFunction = (email, password, confirmPassword) => {
        axios.post('http://localhost:3000/auth/signup', {email, password, password_confirmation: confirmPassword})
    }

    return (
        <UserForm submitFunction={submitFunction} />
    )
};

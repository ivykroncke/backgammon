import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./button";
import { Input } from "./input";

export const UserForm = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const SIGNUP = "signup"
  const LOGIN = "login"

  const isDisabled = () => {
    if (!email || !password) {
      return true
    }
    if (props.type === SIGNUP) {
      return password !== confirmPassword
    }
    return false
  }

  return (
    <div>
      <div>Email</div>
      <Input value={email} onChange={e => setEmail(e.target.value)} />
      <div>Password</div>
      <Input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      {props.type === SIGNUP && (
        <div>
          <div>Confirm Password</div>
          <Input
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
      )}
      <div>
        <Button
          disabled={isDisabled()}
          text={props.type === LOGIN ? "Login" : "Signup"}
          onClick={() => props.submitFunction(email, password, confirmPassword)}
        />
      </div>
    </div>
  );
};

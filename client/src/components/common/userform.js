import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./button";
import { Input } from "./input";

export const UserForm = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <div>
      <div>Email</div>
      <Input value={email} onChange={e => setEmail(e.target.value)} />
      <div>Password</div>
      <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <div>Confirm Password</div>
      <Input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
      <div>
      <Button text="Submit" onClick={() => props.submitFunction(email, password, confirmPassword)} />
      </div>
    </div>
  );
};

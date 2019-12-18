import React, { Fragment } from "react";
import { getToken } from "./services/tokenFetcher"

export const Nav = props => {

  const token = getToken()

  return <Fragment>{token && <div>Header</div>}</Fragment>;
};

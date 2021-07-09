import React from "react";
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Chat from "./Chat/Chat"
import Login from "./Login/Login"

export default function Routes(){
    return (
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/">
                <Chat />
            </Route>
        </Switch>
    )
}
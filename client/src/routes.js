import React from 'react'
import { Switch,Route, Redirect } from 'react-router-dom'
import LinksPage from './pages/LinksPage'
import CreatePage from './pages/CreatePage'
import DetailPage from './pages/DetailPage'
import AuthPage from './pages/AuthPage'


export const useRouts = isAuthenticared => {
    if(isAuthenticared) {
        return(
            <Switch>
                <Route path="/links" exact>
                    <LinksPage />
                </Route>
                <Route path="/create" >
                    <CreatePage />
                </Route>
                <Route path="/detail/:id" >
                    <DetailPage />
                </Route>
                <Redirect to="/create" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact >
                <AuthPage />
            </Route>
            <Redirect to='/'/>
        </Switch>
    )
}
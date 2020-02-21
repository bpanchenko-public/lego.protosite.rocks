import React, { useContext, useEffect, useState } from 'react'
import './App.css'

import AppContext from './AppContext'
import Article from '../components/Article'
import ArticlesList from '../components/ArticlesList'

import { RSS_FEED_URL } from '../config'
import logo from '../resources/svg/logo.svg'

const App = () => {
    const [state] = useState(useContext(AppContext))

    useEffect(() => {
        fetch(RSS_FEED_URL + `?rss=${state.url}`, {
            method: 'GET',
            mode: 'cors'
        }).then(r => r.json()).then(j => console.log(j))
    })

    return (
        <main className="app">
            <header className="app__header">
                <div className="c-logo">
                    <img src={logo} className="c-logo__image" alt="logo" />
                    <span className="c-logo__text">Article Reader</span>
                </div>
            </header>
            <AppContext.Provider value={state}>
                <ArticlesList className="app__sidebar" />
                <Article className="app__content" />
            </AppContext.Provider>
        </main>
    )
}

export default App

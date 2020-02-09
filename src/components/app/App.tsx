import React, { useContext, useEffect, useState } from 'react'
import './App.css'

import Article from '../Article/Article'
import ArticlesList from '../ArticlesList'

import logo from '../../resources/svg/logo.svg'

const App = () => {
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

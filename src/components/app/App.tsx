import React from 'react'
import './App.css'

import Article from '../Article/Article'

import logo from '../../resources/svg/logo.svg'

const App = () => {
    return (
        <main className="app">
            <header className="app__header">
                <img src={logo} className="app-logo" alt="logo" />
            </header>
            <aside className="app__sidebar"></aside>
            <Article className="app__content" />
        </main>
    )
}

export default App

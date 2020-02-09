import React from 'react'

const AppContext = React.createContext({
    list: [
        "Buy milk",
        "Some eggs",
        "Go to work"
    ],
    url: 'http://feeds.bbci.co.uk/russian/rss.xml'
})

export default AppContext
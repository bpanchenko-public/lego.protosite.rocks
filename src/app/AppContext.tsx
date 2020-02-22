import React from 'react'

/* <Partial<Props>> */
const AppContext = React.createContext({
    list: [],
    url: 'http://feeds.bbci.co.uk/russian/rss.xml'
})

type Props = { 
    list: {
        title:string,
        guid:object
    }[],
    url: string
}

export default AppContext
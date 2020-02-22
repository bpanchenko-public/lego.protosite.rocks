import React, { useContext } from "react"
import AppContext from "../app/AppContext"
import ArticlesListItem from "./ArticlesListItem"

const ArticlesList = ({ className }: Props) => {
    const { list: articles } = useContext(AppContext);
    return (
        <aside className={className}>
            {articles.map(article => (
                <ArticlesListItem
                    data={article}
                />
            ))}
        </aside>
    )
}

/* TODO: key={article.guid.toString()} */

type Props = {
    className: string
}

export default ArticlesList
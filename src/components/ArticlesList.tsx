import React from "react"

const ArticlesList = ({ className }: Props) => {
    return (
        <aside className={className}></aside>
    )
}

type Props = {
    className: string
}

export default ArticlesList
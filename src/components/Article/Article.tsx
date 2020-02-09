import React from "react"

const Article = ({ className }: Props) => {
    return (
        <article className={`o-article ${className}`}></article>
    )
}

type Props = {
    className: string
}

export default Article
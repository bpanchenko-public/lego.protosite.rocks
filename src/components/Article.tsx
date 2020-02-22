import React from "react"

const Article = ({ className, data }: Props) => {
    return (
        <article className={`o-article ${className}`}></article>
    )
}

type Props = {
    className: string,
    data?: object
}

export default Article
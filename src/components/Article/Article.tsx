import React from "react"

const Article = (props: Props) => {
    return (
        <article className={props.className}></article>
    )
}

type Props = {
    className: string
}

export default Article
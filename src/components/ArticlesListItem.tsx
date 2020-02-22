import React from "react"

/* TOD: aria-selected="{(data.selected ? 'true' : 'false')}" */

const ArticlesListItem = ({ data }: Props) => (
    <section className="o-list__item{ props.item.done ? 'is-read' : '' }">
        <div className="o-list__cell">{data.title}</div>
        <div className="o-list__cell"></div>
    </section>
)

type Props = {
    data: {
        title: String,
        selected?: Boolean
    }
}

/* <a href="" onClick={() => props.onClick(props.item)}></a> */

export default ArticlesListItem
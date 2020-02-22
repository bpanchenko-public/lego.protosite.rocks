import React from "react"
import cn from "classnames"

const ArticlesListItem = ({ data }: Props) => (
    <section className={cn('o-list__item', { 'is-read': data.isRead})} aria-selected={data.selected ? 'true' : 'false'}>
        <div className="o-list__cell">{data.title}</div>
        <div className="o-list__cell"></div>
    </section>
)

type Props = {
    data: {
        title: String,
        selected?: Boolean,
        isRead?: Boolean
    }
}

/* <a href="" onClick={() => props.onClick(props.item)}></a> */

export default ArticlesListItem
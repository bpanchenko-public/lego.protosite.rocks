import React from "react"
import cn from "classnames"

const ArticlesListItem = ({ data }: Props) => {
    const className = cn(
        'o-article',
        'o-list__item',
        {
            'is-read': data.isRead
        })
    
    return (
        <section className={className} aria-selected={data.selected ? 'true' : 'false'}>
            <div className="o-list__cell">
                <a href={data.link} onClick={event => event.preventDefault()}>{data.title}</a>
            </div>
            <div className="o-list__cell">
                {data.description}
            </div>
        </section>
    )
}

type Props = {
    data: {
        title: string,
        description: string,
        link: string,
        selected?: boolean,
        isRead?: boolean
    }
}

export default ArticlesListItem
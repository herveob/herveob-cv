import React from 'react'

export type Props = {
    category: string,
    list: string[],
}

function Tools({category, list}: Props) {
    return (
        <div>
            <p>{category} : {list.join(', ')}</p>
        </div>
    )
}

export default Tools

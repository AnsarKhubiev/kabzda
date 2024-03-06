import React from "react";

type StarPropsType = {
    selected: boolean
}

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating({value}: RatingPropsType) {
    let stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(value > i)
    }
    return (
        <div>
            {stars.map(s => <Star selected={s}/>)}
        </div>
    )
}

function Star({selected}: StarPropsType) {
    return selected ? <span><b>star </b></span> : <span>star </span>
}
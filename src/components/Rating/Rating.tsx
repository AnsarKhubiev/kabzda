type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

type StarPropsType = {
    selected: boolean
}

export function Rating({value}: RatingPropsType) {
    const stars = []
    for (let i = 1; i <= 5; i++) {
     stars.push(<Star selected={i <= value}/>)
    }

    return <div>{stars}</div>
}

function Star({selected}: StarPropsType) {
    return selected ? <span><b>star </b></span> : <span>star </span>
}
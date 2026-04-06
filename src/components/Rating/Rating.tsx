type RatingProps = { value: 0 | 1 | 2 | 3 | 4 | 5 }

type StarProps = { selected: boolean }

export const Rating = ({value}: RatingProps) => {
    const stars = []

    for (let i = 1; i <= 5; i++) {
        stars.push(<Star key={i} selected={i <= value}/>)
    }

    return <>{stars}</>
}

const Star = ({selected}: StarProps) => <span style={selected ? {fontWeight: 'bolder', color:'yellow'} : {}}>star </span>

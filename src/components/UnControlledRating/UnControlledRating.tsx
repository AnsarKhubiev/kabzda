import {useState} from "react";

type StarPropsType = {
    selected: boolean
}

export function UnControlledRating() {

    const [value, setValue] = useState(0)

    return (
        <div className="Stars">
            <Star selected={value >= 1}/>
            <button onClick={() => setValue(1)}>1</button>
            <Star selected={value >= 2}/>
            <button onClick={() => setValue(2)}>2</button>
            <Star selected={value >= 3}/>
            <button onClick={() => setValue(3)}>3</button>
            <Star selected={value >= 4}/>
            <button onClick={() => setValue(4)}>4</button>
            <Star selected={value >= 5}/>
            <button onClick={() => setValue(5)}>5</button>
        </div>
    )
}

function Star({selected}: StarPropsType) {
    return selected ? <div><b>star </b></div> : <div>star</div>
}
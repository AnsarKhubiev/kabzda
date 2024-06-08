import {useState} from "react";

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

export function UnControlledRating() {

    const [value, setValue] = useState(0)

    return (
        <div className="Stars">
            <Star selected={value >= 1} setValue={()=>{setValue(1)}} />
            <Star selected={value >= 2} setValue={()=>{setValue(2)}} />
            <Star selected={value >= 3} setValue={()=>{setValue(3)}} />
            <Star selected={value >= 4} setValue={()=>{setValue(4)}} />
            <Star selected={value >= 5} setValue={()=>{setValue(5)}} />
        </div>
    )
}

function Star({selected, setValue}: StarPropsType) {
    return <span onClick={setValue}>{selected ? <b>star </b> : "star"}</span>
}
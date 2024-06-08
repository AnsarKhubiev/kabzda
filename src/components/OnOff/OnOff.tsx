import React, {useState} from "react";

type OnOffPropsType = {
    // on: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    const [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white',
        marginBottom: '2px'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: "10px",
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red',
    }

    const onClickHandler = (on: boolean) => {
        setOn(on)
    }

    return (
        <div>
            <button onClick={()=>onClickHandler(true)} style={onStyle}>ON</button>
            <button onClick={()=>onClickHandler(false)} style={offStyle}>OFF</button>
            <div style={indicatorStyle}/>
        </div>
    );
};


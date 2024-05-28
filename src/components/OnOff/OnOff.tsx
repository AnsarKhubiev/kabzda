import React from 'react';

type OnOffPropsType = {
    value: boolean
}

export const OnOff = ({value}: OnOffPropsType) => {
    return (
        <div className="lights">
            <span className={`bulb ${value && "green-lights"}`}>ON</span>
            <span className={`bulb ${!value && "red-lights"}`}>OFF</span>
            <span className={`round-light ${value ? "green-lights" : "red-lights"}`}/>
        </div>
    );
};


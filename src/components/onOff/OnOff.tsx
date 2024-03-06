import React from 'react';

type OnOffType = {
    isOn: boolean
}

export const OnOff = ({isOn}: OnOffType) => {

    let greenLight = isOn && 'on'
    let redLight = !isOn && 'off'
    let isLight = isOn ? 'on' : 'off'

    return (
        <div>
            <div className='light-wrapper'>
                <div className={`tablo ${greenLight}`}>on</div>
                <div className={`tablo ${redLight}`}>off</div>
                <div className={`light ${isLight}`}></div>
            </div>
        </div>
    );
};
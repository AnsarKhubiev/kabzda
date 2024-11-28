import React from "react";

type ItemType = {
    title: string
    value: string
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion({titleValue, collapsed, onChange, items, onClick}: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={titleValue} onChange={onChange}/>
            {!collapsed && <AccordionBody items={items} onClick={onClick}/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle({title, onChange}: AccordionTitlePropsType) {
    return (
        <h3 onClick={onChange}>{title}</h3>
    )
}

function AccordionBody({items, onClick}: AccordionBodyPropsType) {
    return (
        <ul>
            {items.map(item => <li onClick={()=>{onClick(item.value)}} key={item.value}>{item.title}</li>)}
        </ul>
    )
}
import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

type AccordionTitlePropsType = {
    title: string
}

export function Accordion({titleValue, collapsed}: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={titleValue}/>
            {!collapsed && <AccordionBody />}
        </div>
    )
}

function AccordionTitle({title}: AccordionTitlePropsType) {
    return (
        <h3>{title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
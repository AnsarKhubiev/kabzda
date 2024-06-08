import React, {useState} from "react";

type UnControlledAccordionPropsType = {
    titleValue: string
}

type UnControlledAccordionTitlePropsType = {
    title: string
}

export function UnControlledAccordion({titleValue}: UnControlledAccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false)

    const switchToggle = () => setCollapsed(!collapsed)

    return (
        <div>
            <AccordionTitle title={titleValue}/>
            <button onClick={switchToggle}>TOGGLE</button>
            {collapsed && <AccordionBody />}
        </div>
    )
}

function AccordionTitle({title}: UnControlledAccordionTitlePropsType) {
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
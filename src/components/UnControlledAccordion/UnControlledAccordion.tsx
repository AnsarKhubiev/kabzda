import React, {useState} from "react";

type UnControlledAccordionPropsType = {
    titleValue: string
}

type UnControlledAccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export function UnControlledAccordion({titleValue}: UnControlledAccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={titleValue} onClick={() => setCollapsed(!collapsed)}/>
            {collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle({title, onClick}: UnControlledAccordionTitlePropsType) {
    return <h3 onClick={onClick}>{title}</h3>
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
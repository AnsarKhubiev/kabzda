type AccordionProps = {
    collapsed: boolean
    title: string
}

export const Accordion = ({collapsed, title}: AccordionProps) => {
    if (collapsed) {
        return <AccordionTitle title={title}/>
    } else {
        return <>
            <AccordionTitle title={title}/>
            <AccordionBody/>
        </>
    }
}

type AccordionTitleProps = { title: string }
const AccordionTitle = ({title}: AccordionTitleProps) => <div>{title}</div>

const AccordionBody = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
}
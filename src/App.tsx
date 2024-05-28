import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

type PagePropsType = {
    title: string
}

function App() {
    return (
        <div>
            <PageTitle title="This is App Component"/>
            <PageTitle title="My friends"/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue="Menu" collapsed={false}/>
            <Accordion titleValue="Users" collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOff value={true}/>
            <OnOff value={false}/>
        </div>
    );
}

function PageTitle({title}: PagePropsType) {
    return <h3>{title}</h3>
}


export default App;

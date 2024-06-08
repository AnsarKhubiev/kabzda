import React, {useState} from "react";
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";

type PagePropsType = {
    title: string
}

function App() {

    return (
        <div className='App'>
            {/*<PageTitle title="This is App Component"/>*/}
            {/*<PageTitle title="My friends"/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}
            <UnControlledAccordion titleValue="Menu" />
            <UnControlledAccordion titleValue="Users" />
            <UnControlledRating />
            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<OnOff />*/}
            {/*<OnOff />*/}
        </div>
    );
}

function PageTitle({title}: PagePropsType) {
    return <h3>{title}</h3>
}


export default App;

import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import {OnOff} from "./components/onOff/OnOff";

function App() {
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <Rating value={3}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            <OnOff isOn={false}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle({title}: PageTitlePropsType) {
    return <h1>{title}</h1>
}



export default App;

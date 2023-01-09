import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating/Rating";
import {UnControledAccordion} from "./components/UnControledAccordion/UnControledAccordion";
import {Accordion} from "./components/accordion/Accordion";
import {UnControledOnOff} from "./components/UnControledOnOff/UnControledOnOff";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledRating} from "./components/unControledRating/UnControlledRating";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [onOffValue, setOnOffValue] = useState<boolean>(true)


    return (
        <div className="App">
            <UnControlledRating/>
            <Rating value={ratingValue}
                    setRatingValue={setRatingValue}/>


            <UnControledAccordion titleValue={'Menu'}/>
            <Accordion titleValue={'Users'}
                       accordion={accordionCollapsed}
                       setAccordion={setAccordionCollapsed}/>


            <UnControledOnOff/>
            <OnOff onOffValue={onOffValue}
                   setOnOffValue={setOnOffValue}
            />

        </div>
    );
}


export default App;

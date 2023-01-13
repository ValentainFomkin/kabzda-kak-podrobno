import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UnControledAccordion} from "./components/UnControledAccordion/UnControledAccordion";
import {Accordion} from "./components/accordion/Accordion";
import {UnControledOnOff} from "./components/UnControledOnOff/UnControledOnOff";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledRating} from "./components/unControledRating/UnControlledRating";
import {Select} from "./components/Select/Select";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [onOffValue, setOnOffValue] = useState<boolean>(true)
    let [selectValue, setSelectValue] = useState('')


    return (
        <div className="App">
            <UnControlledRating/>
            <Rating value={ratingValue}
                    setRatingValue={setRatingValue}/>


            <UnControledAccordion titleValue={'Menu'}/>
            <Accordion titleValue={'Users'}
                       accordion={accordionCollapsed}
                       setAccordion={setAccordionCollapsed}
                       onClick={() => {
                       }}
                       items={[{title: 'salam popolam', value: 2}]}/>


            <UnControledOnOff/>
            <OnOff onOffValue={onOffValue}
                   setOnOffValue={setOnOffValue}/>


            <Select value={selectValue}
                    onChange={setSelectValue}
                    items={[{title: '111', value: 1},
                        {title: '222', value: 2},
                        {title: '333', value: 3}
                    ]}/>


        </div>
    );
}


export default App;

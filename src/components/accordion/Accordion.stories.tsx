import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
}

const callBack = action('accordion mode change event fired')
const callBackOnClick = action('some item was be clicked')

let arr = [
    {title: 'dyma', value: 1},
    {title: 'valya', value: 2},
    {title: 'valera', value: 3},
    {title: 'alina', value: 4},
    {title: 'mama', value: 5}
]

export const CollapsedMode = () => <Accordion accordion={true}
                                              setAccordion={callBack}
                                              titleValue={'111'}
                                              items={arr}
                                              onClick={callBack}/>
export const UnCollapsedMode = () => <Accordion accordion={false}
                                                setAccordion={callBack}
                                                titleValue={'222'}
                                                items={[]}
                                                onClick={callBackOnClick}/>


export const ModeCollapsed = () => {
    let [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'333'} accordion={value} setAccordion={setValue} items={arr}
                      onClick={callBackOnClick}/>
}

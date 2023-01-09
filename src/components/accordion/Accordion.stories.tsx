import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
}

const callBack = action('accordion mode change event fired')

export const CollapsedMode = () => <Accordion accordion={true} setAccordion={callBack} titleValue={'111'}/>
export const UnCollapsedMode = () => <Accordion accordion={false} setAccordion={callBack} titleValue={'222'}/>


export const ModeCollapsed = () => {
    let [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'333'} accordion={value} setAccordion={setValue}/>
}

import React from 'react';
import {action} from "@storybook/addon-actions";
import {UnControledAccordion} from "./UnControledAccordion";


export default {
    title: 'UnControledAccordion',
    component: UnControledAccordion,
}

const callBack = action('accordion mode change event fired')

export const ModeCollapsed = () => {

    return <UnControledAccordion titleValue={'333'}/>
}

import React from 'react';
import {action} from "@storybook/addon-actions";
import {UnControledOnOff} from "./UnControledOnOff";


export default {
    title: 'UnControledOnOff',
    component: UnControledOnOff,
}

const callBack = action('')

export const ModeCollapsed = () => {

    return <UnControledOnOff/>
}

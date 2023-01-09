import React from 'react';
import {action} from "@storybook/addon-actions";
import {UnControlledRating} from "./UnControlledRating";


export default {
    title: 'UnControlledRating',
    component: UnControlledRating,
}

const callBack = action('')

export const ModeCollapsed = () => {

    return <UnControlledRating/>
}

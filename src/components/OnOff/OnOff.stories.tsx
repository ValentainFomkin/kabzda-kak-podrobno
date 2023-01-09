import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff stories',
    component: OnOff,
}

const callBack = action('on or off was clicked')

export const OnMode = () => <OnOff onOffValue={true} setOnOffValue={callBack}/>
export const OffMode = () => <OnOff onOffValue={false} setOnOffValue={callBack}/>


export const ModeChanging = () => {
    let [value, setValue] = useState<boolean>(true)
    return <OnOff onOffValue={value} setOnOffValue={setValue}/>
}

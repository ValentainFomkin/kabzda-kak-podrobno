import React, {useState} from 'react';
import {Select} from "./Select";

export default {
    title: 'New Select',
    component: Select,
}


export const ChangingRating = () => {

    let [selectValue, setSelectValue] = useState<string | undefined>('')

    let arr = [
        {title: 'Volgograd', value: 1},
        {title: 'Sparta', value: 2},
        {title: 'GES', value: 3}
    ]

    const onChangeHandler = (e: any) => {
        setSelectValue(e)
    }

    return <Select value={selectValue} onChange={onChangeHandler} items={arr}/>
}

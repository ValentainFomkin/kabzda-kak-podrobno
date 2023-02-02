import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Simulate} from "react-dom/test-utils";
import {Select} from "../components/Select/Select";
import input = Simulate.input;


export default {
    title: 'input',
    // component: UnControlledRating,
}

const callBack = action('')

export const ControlledAndUncontrolledInput = () => {

    let [valueInput, setValueInput] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setValue(e.currentTarget.value)
    // }
    //
    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValueInput(el.value)
    }


    return <><input ref={inputRef}/> -
        <button onClick={onClickHandler}>save</button>
        - actual value: {valueInput}</>

}

export const ControlledInput = () => {

    let [parentValue, setParentValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)

    return <><input value={parentValue}
                    onChange={onChangeHandler}/> value: {parentValue}</>
}

export const ControlledCheckBox = () => {

    let [parentValue, setParentValue] = useState(true)

    const onClick = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <>
        <input checked={parentValue} type="checkbox" onChange={onClick}/>
    </>
}

export const ControlledSelect = () => {
    let [parentValue, setParentValue] = useState<string | undefined>('3')

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <>
        <select value={parentValue} onChange={onChange}>
            <option value={'1'}>1</option>
            <option value={'2'}>2</option>
            <option value={'3'}>3</option>
            <option value={'4'}>4</option>
        </select>

    </>
}

export const ControlledNewSelect = () => {
    let [parentValue, setParentValue] = useState<string | undefined>('2')

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    let arr = [
        {title: 'Moscow', value: 1},
        {title: 'Volgograd', value: 2},
        {title: 'Saratov', value: 3},
        {title: 'Kazan', value: 4}
    ]

    return <>
        <Select value={parentValue} onChange={onChange} items={arr}/>

    </>
}
import React, {ChangeEvent} from "react";

export type ItemType = {
    title: string
    value: any
}

type SelectType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        props.onChange(e.currentTarget.value)
    }

    return (
        <select value={props.value} onChange={onChangeHandler}>
            {props.items.map((e, index) => <option value={e.value}>{e.title}</option>)}
        </select>
    )
}
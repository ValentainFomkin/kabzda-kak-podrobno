import React, {useState} from "react";

type RatingType = {}

export const UnControlledRating = (props: RatingType) => {

    let [value, setValue] = useState(0)

    return (
        <div>

            <Star setValue={() => setValue(1)} selected={value > 0}/>
            <Star setValue={() => setValue(2)} selected={value > 1}/>
            <Star setValue={() => setValue(3)} selected={value > 2}/>
            <Star setValue={() => setValue(4)} selected={value > 3}/>
            <Star setValue={() => setValue(5)} selected={value > 4}/>
        </div>
    )

}

type StarType = {
    selected?: boolean
    setValue: () => void
}

export const Star = (props: StarType) => {

    const onClickHandler = () => props.setValue()

    // return props.selected ? <span><b>star </b></span> : <span>star </span>
    return <span onClick={onClickHandler}>
        {props.selected ? <b>star </b> : 'star '}
    </span>


}
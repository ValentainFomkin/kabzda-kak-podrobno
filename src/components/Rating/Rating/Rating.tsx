import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingType = {
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}

export const Rating = (props: RatingType) => {

    return (
        <div>
            
            <Star value={1} onClick={props.setRatingValue} selected={props.value > 0}/>
            <Star value={2} onClick={props.setRatingValue} selected={props.value > 1}/>
            <Star value={3} onClick={props.setRatingValue} selected={props.value > 2}/>
            <Star value={4} onClick={props.setRatingValue} selected={props.value > 3}/>
            <Star value={5} onClick={props.setRatingValue} selected={props.value > 4}/>
        </div>
    )
}

type StarType = {
    selected?: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}

export const Star = (props: StarType) => {

    return <span onClick={() => props.onClick(props.value)}>
        {props.selected ? <b>star </b> : 'star '}
    </span>


}
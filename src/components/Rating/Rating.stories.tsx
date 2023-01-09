import React, {useState} from 'react';
import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'Rating',
    component: Rating,
}

export const EmptyStars1 = () => <Rating value={1} setRatingValue={x => x}/>
export const EmptyStars2 = () => <Rating value={2} setRatingValue={x => x}/>
export const EmptyStars3 = () => <Rating value={3} setRatingValue={x => x}/>

export const ChangingRating = () => {
    let [rating, setRating] = useState<RatingValueType>(5)
    return <Rating value={rating} setRatingValue={setRating}/>
}

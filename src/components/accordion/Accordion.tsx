import React from 'react';

type AccordionPropsType = {
    titleValue: string
    accordion: boolean
    setAccordion: (accordion: boolean) => void
}

export const Accordion = (props: AccordionPropsType) => {

    const onClickCollapsedHandler = () => props.setAccordion(!props.accordion)


    return (
        <div>
            <PageTitle setAccordion={onClickCollapsedHandler}
                       title={props.titleValue}/>
            {props.accordion &&
                <div>
                    <AccordionBody number={1}/>
                    <AccordionBody number={2}/>
                    <AccordionBody number={3}/>
                </div>}
        </div>
    )
};

type PageTitlePropsType = {
    title: string
    setAccordion: () => void
}
export const PageTitle = (props: PageTitlePropsType) => {
    const onClickHandler = () => props.setAccordion()

    return (
        <h1 onClick={onClickHandler}>--- {props.title} ---</h1>
    )
}

type AccordionBodyPropsType = {
    number: number
}
export const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
        <ul>
            <li>{props.number}</li>
        </ul>
    )
}
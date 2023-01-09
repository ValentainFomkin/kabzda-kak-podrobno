import React from 'react';


type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    accordion: boolean
    setAccordion: (accordion: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}

export const Accordion = (props: AccordionPropsType) => {

    const onClickCollapsedHandler = () => props.setAccordion(!props.accordion)


    return (
        <div>
            <PageTitle setAccordion={onClickCollapsedHandler}
                       title={props.titleValue}/>
            {props.accordion &&
                <div>
                    <AccordionBody items={props.items} onClick={props.onClick}/>
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
    items: ItemType[]
    onClick: (value: any) => void
}
export const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => {
                props.onClick(i.value)
            }} key={index}>{i.title}</li>)}
        </ul>
    )
}
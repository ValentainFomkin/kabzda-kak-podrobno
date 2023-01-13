import React, {useReducer} from 'react';

type AccordionPropsType = {
    titleValue?: string
    // collapsed?: boolean
}

type ActionType = {
    type: string

}

const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {

        case 'TOGGLE-COLLAPSED': {

            return !state
        }
        default:
            return state
    }


}

export const UnControledAccordion = (props: AccordionPropsType) => {

    // let collapsed = false
    // let [collapsed, setCollapsed] = useState(false)
    let [collapsed, dispatch] = useReducer(reducer, false)

    const onClickCollapsedHandler = () => {

        dispatch({type: 'TOGGLE-COLLAPSED'})
    }


    return (
        <div>
            <PageTitle title={props.titleValue}
                       onClickCollapsedHandler={onClickCollapsedHandler}
            />
            {/*<button onClick={onClickHandler}>TOGGLE</button>*/}
            {!collapsed &&
                <div>
                    <AccordionBody number={1}/>
                    <AccordionBody number={2}/>
                    <AccordionBody number={3}/>
                </div>

            }
        </div>
    )


};

type PageTitlePropsType = {
    title?: string
    onClickCollapsedHandler: () => void
}

export const PageTitle = (props: PageTitlePropsType) => {
    const onClickHandler = () => props.onClickCollapsedHandler()


    return (
        <>
            <h1 onClick={onClickHandler}>--- {props.title} ---</h1>
        </>


    )
}

type AccordionBodyPropsType = {
    number: number
}

export const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
        <>
            <ul>
                <li>{props.number}</li>
            </ul>
        </>
    )
}
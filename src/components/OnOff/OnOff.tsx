import React from 'react';

type OnOffPropsType = {
    onOffValue: boolean
    setOnOffValue: (onOffValue: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {


    const onButtonStyle = {
        backgroundColor: props.onOffValue ? 'green' : '',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginRight: '5px',
        padding: '2px',
    }
    const offButtonStyle = {
        backgroundColor: props.onOffValue ? '' : 'red',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginRight: '5px',
        padding: '2px',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        backgroundColor: props.onOffValue ? 'green' : 'red',
        display: 'inline-block',
    }

    const onButtonHandler = () => props.setOnOffValue(true)
    const offButtonHandler = () => props.setOnOffValue(false)


    return (
        <div>
            {/*<span style={props.work ? onButtonStyle : offButtonStyle}>{props.name}</span>*/}
            {/*<span style={props.work ? colorOnButton : colorOffButton}> X </span>*/}

            <div onClick={onButtonHandler} style={onButtonStyle}> On
            </div>
            <div onClick={offButtonHandler} style={offButtonStyle}> Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )


};


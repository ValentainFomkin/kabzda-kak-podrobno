import React, {useState} from 'react';

type OnOffPropsType = {}

export const UnControledOnOff = (props: OnOffPropsType) => {
    let [value, setValue] = useState(false)

    const onButtonStyle = {
        backgroundColor: value ? 'green' : '',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginRight: '5px',
        padding: '2px',
    }
    const offButtonStyle = {
        backgroundColor: value ? '' : 'red',
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
        backgroundColor: value ? 'green' : 'red',
        display: 'inline-block',
    }

    const onButtonHandler = () => setValue(true)
    const offButtonHandler = () => setValue(false)


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


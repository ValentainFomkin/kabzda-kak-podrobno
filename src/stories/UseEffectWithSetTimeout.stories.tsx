import {useEffect, useState} from "react";

export default {
    title: 'useEffect With Set Timeout demo'
}


export const Example1 = () => {
    const [date, setDate] = useState(new Date())
    // const [fake, setFake] = useState(1)

    console.log('SetTimeOutExample')

    // const changer = (state: number) => state + 1
    // const countSum = () => setCounter((state) => state + 1)
    // const fakeSum = () => setFake((state) => state + 1)
    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('setTimeout')
    //         document.title = counter.toString()
    //     }, 1000)
    // }, [counter])

    useEffect(() => {
        console.log('useEffect')
        const intervalId = setInterval(() => {
            console.log('setInterval')
            setDate(new Date)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const getTime = (num: number) => num < 10 ? `0${num}` : num


    const seconds = getTime(date.getSeconds())
    const minutes = getTime(date.getMinutes())
    const hours = getTime(date.getHours())

    function now() {
        return new Date();
    }

    return <>
        {/*<button onClick={countSum}>Counter +</button>*/}
        {/*<button onClick={fakeSum}>Fake +</button>*/}
        <div>
            hour: {hours} min : {minutes} sec : {seconds} <br/>
            {date.toLocaleTimeString()}
        </div>
    </>


}


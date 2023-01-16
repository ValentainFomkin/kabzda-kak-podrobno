import {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}


function generateDataForCounter() {
    console.log('generateDataForCounter')
    return 1
}

function generateDataForFake() {
    console.log('generateDataForFake')
    return 1
}

export const Example1 = () => {
    const [counter, setCounter] = useState(generateDataForFake)
    const [fake, setFake] = useState(generateDataForCounter)

    console.log('SimpleExample')


    // const changer = (state: number) => state + 1
    const countSum = () => setCounter((state) => state + 1)
    const fakeSum = () => setFake((state) => state + 1)


    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        <button onClick={countSum}>Counter +</button>
        <button onClick={fakeSum}>Fake +</button>
        <div>
            counter : {counter} fake : {fake}
        </div>
    </>


}


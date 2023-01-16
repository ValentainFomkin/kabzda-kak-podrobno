import {useState} from "react";

export default {
    title: 'useState demo'
}


function generateData() {
    console.log('generateData')
    return 1
}

export const Example1 = () => {
    console.log('LikeUseCallBack')

    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)

    // const changer = (state: number) => state + 1
    const countSum = () => setCounter((state) => state + 1)


    return <>
        <button onClick={countSum}>+</button>
        {counter}
    </>


}


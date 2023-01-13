import {memo, useState} from "react";

export default {
    title: 'React.memo demo'
}

export const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

export const UserSecret = memo((props: { users: Array<string> }) => {
    console.log('PRIVET!!!')
    return (
        <div>
            {props.users.map((e, i) => <div key={i}>{e}</div>)}
        </div>
    )
})

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['valera', 'dima', 'valya', 'alina'])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <Counter count={counter}/>
        <UserSecret users={users}/>
    </>

}
import {memo, useState} from "react";

export default {
    title: 'React.memo demo'
}

const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UserSecret = memo((props: { users: Array<string> }) => {
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
    console.log(counter)
    console.log(users)


    const countSum = () => {

        setCounter(counter + 1)
    }

    const addUser = () => {
        const newUser = 'Sveta'
        setUsers([
            newUser,
            ...users
        ])
    }

    const restNewUsers = () => {
        setUsers(['valera', 'dima', 'valya', 'alina'])
    }
    return <>
        <button onClick={countSum}>+</button>
        <button onClick={addUser}>add user</button>
        <button onClick={restNewUsers}>rest users</button>
        <Counter count={counter}/>
        <UserSecret users={users}/>
    </>

}
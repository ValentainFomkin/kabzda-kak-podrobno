import {memo, useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResA = tempResA * i
        }
        return tempResA
    }, [a])

    resultB = useMemo(() => {
        let tempB = 1
        for (let i = 1; i <= b; i++) {
            tempB = tempB * i
        }
        return tempB
    }, [b])


    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>

}

const UserSecret = memo((props: { users: Array<string> }) => {
    console.log('users secret')
    return (
        <div>
            {props.users.map((e, i) => <div key={i}>{e}</div>)}
        </div>
    )
})

export const HalpsToReactMemo = () => {
    console.log('HalpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['valera', 'dimych', 'valya', 'alina'])


    const countSum = () => setCounter(counter + 1)

    const newArr = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUser = 'Sveta'
        setUsers([
            newUser,
            ...users
        ])
    }

    return <>
        <button onClick={countSum}>+</button>
        <button onClick={addUser}>add User</button>
        {counter}
        <UserSecret users={newArr}/>
    </>


}


export const LikeUseCallBack = () => {
    console.log('LikeUseCallBack')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'Js', 'Html', 'TS'])

    const countSum = () => setCounter(counter + 1)


    // const addBook = () => {
    //     const newUser = 'Angular'
    //     setBooks([newUser, ...books])
    // }

    // const memoisedAddBook = useMemo(() => {
    //     return () => {
    //         console.log(books)
    //         const newUser = 'Angular'
    //         setBooks([newUser, ...books])
    //     }
    // }, [books])

    const memoisedAddBook2 = useCallback(() => {
        console.log(books)
        const newUser = 'Angular'
        setBooks([newUser, ...books])

    }, [books])

    return <>
        <button onClick={countSum}>+</button>
        {counter}
        <BooksSecret addBook={memoisedAddBook2}/>

        {/*<UserSecret users={newArr}/>*/}
    </>


}

const BooksSecret = memo((props: { addBook: () => void }) => {
    console.log('BooksSecret')
    return (
        <div>
            <button onClick={props.addBook}>add book</button>

        </div>
    )
})
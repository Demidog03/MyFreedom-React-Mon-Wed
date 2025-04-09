import { useEffect, useState } from "react"

function TestPage() {
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)

    // useEffect(() => {
    //     console.log('USE EFFECT')
    // }) // будет работать в mount и любом update

    // useEffect(() => {
    //     console.log('USE EFFECT')
    // }, []) // будет работать только в mount (1 раз)

    // useEffect(() => {
    //     console.log('USE EFFECT')
    // }, [counter2]) // будет работать в mount и update каких то состоянии

    // useEffect(() => {
    //     return () => {
    //         console.log('USE EFFECT')
    //     }
    // }, []) // будет работать при unmount

    function increaseCounter() {
        setCounter(counter + 1) // setCounter(0 + 1) // 1
    }

    function increaseCounter2() {
        setCounter2(counter2 + 1) // setCounter2(0 + 1) // 1
    }

    return (
        <>
            <h1>TEST PAGE</h1>
            <h2>Counter 1: {counter}</h2>
            <button onClick={increaseCounter}>Increase counter</button>
            <h2>Counter 2: {counter2}</h2>
            <button onClick={increaseCounter2}>Increate counter 2</button>
        </>
    )
}

export default TestPage

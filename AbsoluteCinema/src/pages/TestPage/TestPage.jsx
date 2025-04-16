import { useEffect, useState } from "react"

function TestPage() {
    const [counter, setCounter] = useState(0)

    function increaseCounter() {
        setCounter((counter) => counter + 1) // counter = 1
        setCounter((counter) => counter + 1) // counter = 2
        setCounter((counter) => counter + 1) // counter = 3
        setCounter((counter) => counter + 1) // counter = 4
        setCounter((counter) => counter + 1) // counter = 5
    }

    return (
        <>
           <h1>Counter: {counter}</h1>
           <button onClick={increaseCounter}>Increase</button>
        </>
    )
}

export default TestPage

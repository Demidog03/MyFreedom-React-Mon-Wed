import { useRef } from "react"

function TestPage() {
    const h1Ref = useRef(null) // ссылка на VDOM element
    console.log(h1Ref)

    return (
        <>
           <h1 ref={h1Ref}>TEXT</h1>
        </>
    )
}

export default TestPage


function Test({ num, setNum }) {
    console.log(num)

    function decreaseNumber() {
        setNum(num - 1)
    }

    return (
        <>
            <h1>Число: {num}</h1>
            <button onClick={decreaseNumber}>Decrease number</button>
        </>
    )
}

export default Test

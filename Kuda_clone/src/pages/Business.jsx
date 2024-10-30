import {useState} from 'react'
import styled from 'styled-components'


const Business = () =>{

    const [myNum, setMyNum] = useState(0)

    const increaseNum = () => {
        setMyNum(myNum + 1)
    }

    const decreaseNum = () => {
        setMyNum(myNum - 1)
    }

    return (
        <div>
            <Holder>
            <button onClick={decreaseNum}>Substract</button>
            <h1>{myNum}</h1>
            <button onClick={increaseNum} >Add</button>
        </Holder>
        </div>
    )
}

export default Business

const Holder = styled.div`
    display: flex;
    gap: 60px;
`
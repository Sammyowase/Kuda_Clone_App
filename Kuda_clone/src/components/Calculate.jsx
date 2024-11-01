import { useState } from "react";

const Calculate =()=>{

        const [num, setNum] = useState (0)
const increaseNum=()=>{
        setNum( 
            num +1
        )
};

const decreaseNum =()=>{
    setNum(
        num -1
    )
}
    return(
        <div>
            <button onClick={decreaseNum}>Sub</button>
            <h1>
                {num}
            </h1>
            <button onClick={increaseNum}>Add</button>
        </div>
    )

    
}

export default Calculate;
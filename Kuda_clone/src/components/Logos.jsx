import styled from "styled-components"
import te from "../assets/image/svg/te.svg"
import world from "../assets/image/svg/world.svg"
import fintech from "../assets/image/svg/fintech.svg"
import bbc from "../assets/image/svg/bbc.svg"
import cnbc from "../assets/image/svg/cnbc.svg"
import euromoney from "../assets/image/svg/euromoney.svg"

const Logos = () =>{
    return (
       <Wrapper>
            <Logcont>
                <img src={te} alt="" />
                <img src={world} alt="" />
                <img src={fintech} alt="" />
                <img src={bbc} alt="" />
                <img src={cnbc} alt="" />
                <img src={euromoney} alt="" />
            </Logcont>
       </Wrapper>
    )
}

export default Logos

const Wrapper = styled.div`
    max-width: 1280px;
    margin: 60px auto;
    display: flex;
    
`

const Logcont = styled.div`
    width: 100%;
    display: flex;
    gap: 37px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    /* border: 1px solid red; */
    margin: 0 auto;
    cursor: pointer;
    padding: 30px;

    img{
        max-width: 200px;
    }

`
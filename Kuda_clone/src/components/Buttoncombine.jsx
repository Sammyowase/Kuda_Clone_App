import styled from "styled-components"
import bottombutton from "../../src/assets/image/png/downbutton.png"

const Buttoncombine = () =>{
    return(
        <Wrapper>
            <Buttonwrap>
                <Imagecont>
                    <img src={bottombutton} alt="" />
                </Imagecont>

                <Buttoncont>
                    <p>Products may vary by country or market.</p>
                </Buttoncont>
            </Buttonwrap>
        </Wrapper>
    )
}

export default Buttoncombine


const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`
const Buttonwrap = styled.div`
    width: 85%;
    margin: 80px auto;

`
const Imagecont = styled.div`
    img{
        width: 400px;
    }

    @media (max-width: 800px) {
        img{
            width: 250px;}
    }
`
const Buttoncont = styled.div`
    text-align: center;
    margin: 10px 0;
    color: #40196d;
`
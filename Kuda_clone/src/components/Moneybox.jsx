
import styled from "styled-components"
import apple from "../assets/image/png/applee.png"
import playstore from "../assets/image/png/google.png"
import roundspin from "../assets/image/png/roundspin.png"

const Moneybox = () =>{

    return(
       <Wrapper>
            <Contentdet>
                
                <Moneycont>
                    <Textmoney>
                        <h2>The money app for Africans.</h2>
                        <p>Save, spend, send and invest money across borders.</p>
                    </Textmoney>

                    <Button>
                        <button>Join Kuda</button>
                    </Button>
                </Moneycont>

                <Imagecont>
                    <img src={roundspin} className="imagetop" alt="Hero Image" />
                </Imagecont>
            </Contentdet>
       </Wrapper>
    )
}

export default Moneybox

const Wrapper = styled.div`
    max-width: 1280px;
    margin: 100px auto;
`
const Contentdet = styled.div`
    margin: 0 auto;
    max-width: 85%;
    max-height: 350px;
    background-color: #eff1ff;
    border: 1px solid #ddd;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;

    @media (max-width: 950px) {
    justify-content: center;
    text-align: center;
}
`
const Textmoney = styled.div`
    padding: 50px;


`

const Moneycont = styled.div`
    
    h2{
        font-size: 40px;
        line-height: normal;
        color: #40196d;
    }

    p{
        margin-top: 20px;
        font-size: 18px;
    }

@media (max-width: 1200px) {
    h2{
        font-size: 30px;
    }
}

`
const Button = styled.div`
    button{
        padding: 16px 40px;
        background-color: #40196d;
        color: white;
        font-size: 20px;
        font-weight: bold;
        border-radius: 10px;
        border: none;
        margin-left: 50px;
        margin-bottom: 50px;
        cursor: pointer;
    &:hover{
        background-color: #520f9e;
        transform: translateY(-1px);
    }

    @media (max-width: 800px) {
        margin-left: 0;
    }
}`

const Imagecont = styled.div`
    overflow: hidden;
    max-width: 500px;
    height: 350px;
    position: relative;
   
    img{
        width: 100%;
        object-fit: cover;
        
    }

@media (max-width: 1000px) {
    img{
        display: 80%;
    }
}  

@media (max-width: 950px) {
    img{
        display: none;
    }
}
`

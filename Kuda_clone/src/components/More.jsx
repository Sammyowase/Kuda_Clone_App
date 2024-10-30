
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowsToDot } from "react-icons/fa6";
import { TbLocationFilled } from "react-icons/tb";
import { PiGithubLogoFill } from "react-icons/pi";


const More = () => {
    const Conten = [
        {
            icon: <Iconstyled as= {FaArrowsToDot}/>,
            title: "Kuda Business",
            text: "Grow your business with our all-in-one business manager. Get a POS, bulk transfers, payroll and more.",
            link: "Learn more"
        },

        {
            icon: <Iconstyled as= {TbLocationFilled}/>,
            title: "Transfer & Spend",
            text: "Send money for free to any Nigerian account with 25 free transfers every month.",
            link: "Learn more"
        },

        {
            icon: <Iconstyled as= {PiGithubLogoFill}/>,
            title: "Loans",
            text: "Get up to ₦150,000 in your Kuda account easily and repay in convenient instalments.",
            link: "Learn more"
        },
    ]
    
    return (
  
        <Wrapper>
             <Headtext>
                <h2>More for you</h2>
            </Headtext>

            <Container>
                {Conten.map((content, index) =>(
                    <Carddetails key={index}>
                            {content.icon}
                            <Title>{content.title}</Title>
                            <Text>{content.text}</Text>
                        {content.link && (<Link href = "#" >{content.link} <IoIosArrowForward/> </Link>)}  
                    </Carddetails>
                ))}

            </Container>
        </Wrapper>
        
    )
      
}

export default More

const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`
const Container = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0 auto;
    margin-bottom: 40px;
    
`
const Carddetails = styled.div`
    
    max-width: 340px;
    height: auto;
    background-color: white;
    border-radius: 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    display: flex;
    flex-direction: column;
    padding: 20px;

@media (max-width: 800px) {
    max-width: 90%;
    }
`
const Headtext = styled.div`
    text-align: center;
    margin: 40px 0;
    font-size: 20px;
    font-weight: 900;
    color: #40196d;

@media (max-width: 800px) {
    h2{
        font-size: 28px;
    }
}
`

const Title = styled.h2`
    font-weight: 800;
    margin: 20px 0;
    color: #40196d;

@media (max-width: 800px) {
    font-size: 22px;
}
`
const Text = styled.p`
    
@media (max-width: 800px) {
    font-size: 12px;
    }
`
const Link = styled.a`
    margin-top: 40px;
    font-weight: 600;
    display: flex;
    align-items: center;
    color: #40196d;

@media (max-width: 800px) {
    font-size: 12px;
}
`
const Iconstyled = styled.div`
    font-size: 30px;
    color: #2c012c; 
    border-radius: 50%;
    width: 30px;
    height: 30px;
    /* background-color:  #40196d97; */
    border: 8px solid #612e9b96;
    display: flex;
    align-items: center;
    justify-content: center;
`;

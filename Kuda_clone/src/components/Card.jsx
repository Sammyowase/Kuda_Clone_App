import { FaCreditCard } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { FaNetworkWired } from "react-icons/fa6";
import { GiPiggyBank } from "react-icons/gi";
import styled from "styled-components";

const Card = () => {
    const CardArray = [
        {
            icon: <FaCreditCard as = {FaCreditCard} />,
            Description: 'Order a Kuda card on the app with pickup and delivery options.'
        },

        {
            icon: <MdAccountBalance as = {MdAccountBalance} />,
            Description: 'Enjoy cashless payment options online and offline.'
        },

        {
            icon: <FaNetworkWired  as = {FaNetworkWired} />,
            Description: 'Pay your essential bills and buy gift cards easily.'
        },

        {
            icon: <IoIosSend as = {IoIosSend} />,
            Description: 'Get 25 free transfers to Nigerian banks every month.'
        },

        {
            icon: <GiPiggyBank as = {GiPiggyBank} />,
            Description: 'Save money automatically any time you spend.'
        },
    ];

    return (
        <Wrapper>
            <CardCont>
                {CardArray.map((card, index) =>(
                    <CardItem key={index}>
                        {card.icon}
                        <Description>{card.Description}</Description>
                    </CardItem>
                ))}
            </CardCont>
        </Wrapper>
    )
}

export default Card;

const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    min-height: calc(100vh - 70px);

`

const CardCont = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
    width: 85%;
    margin: 0 auto;
    max-width: 1280px;
`

const CardItem = styled.div `
    width: 100%;
    max-width: 320px;
    height: 150px;
    background-color: white;
    border-radius: 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    
@media (max-width: 900px) {
    min-width: 80%;
    height: 100px;
    flex-direction: row;
    align-items: center;
    gap: 30px;
}`

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

const Description = styled.span `
    margin-top: 10px;
    font-weight: bold;
    font-size: 14px;
    color: #40196d; 

@media (max-width: 768px) {
    font-size: 13px;
    
}
`
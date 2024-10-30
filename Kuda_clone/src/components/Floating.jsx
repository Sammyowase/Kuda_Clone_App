import styled, { keyframes } from "styled-components";
import babajide from "../assets/image/svg/babajide.svg";
import realsok from "../assets/image/svg/realsok.svg";
import muhammad from "../assets/image/svg/muhammad.svg";
import adebambo from "../assets/image/svg/adebambo.svg";

const Floating = () => {
    const Flow = [
        {
            text: "Never thought an app would stylish become my everyday way to bank and have access to physical cash. kudabank is sleek",
            imageUrl: babajide,
            imagetext: "Babajide Duroshola",
        },
        {
            text: "This is the best banking app! I’m enjoying seamless banking plus the free transfers to other banks is a thing of joy. This is what I call freedom. I’ve made kuda my main bank account and I’m gonna refer all my friends!",
            imageUrl: realsok,
            imagetext: "@RealSOK_",
        },
        {
            text: "Just joined the best Digital Bank in Nigeria I have no complaints whatsoever since I started using Kuda",
            imagetext: "Tomisinv",
        },
        {
            text: "Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah",
            imageUrl: muhammad,
            imagetext: "Mu'azu Muhammad Kudu",
        },
        {
            text: "I like the fact that Kuda Microfinance Bank doesn’t only run a no-fee policy and 25 free transfers in a month but you can also create a budget plan to control your spending pattern. Really nice!",
            imageUrl: adebambo,
            imagetext: "Adebambo Oyekan",
        },
        {
            text: "I highly recommend this app, it does what it says: The bank of the free. I have received my Kuda card.",
            imagetext: "Ifeanyichukwu Obaji",
        },
    ];

    return (
        <ScrollContainer>
            <InnerContainer>
                {Flow.concat(Flow).map((float, index) => (
                    <Nonstop key={index}>
                        <FloatDet>
                            <Text>{float.text}</Text>
                        </FloatDet>
                        <ImageDet>
                            {float.imageUrl && <img src={float.imageUrl} alt="" />}
                            <Imagetext>{float.imagetext}</Imagetext>
                        </ImageDet>
                    </Nonstop>
                ))}
            </InnerContainer>
        </ScrollContainer>
    );
};

export default Floating;


const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;


const ScrollContainer = styled.div`
    width: 100%;
    overflow: hidden;
`;

const InnerContainer = styled.div`
    display: flex;
    width: 200%;
    animation: ${scroll} 60s linear infinite;
`;

const Nonstop = styled.div`
    flex: 0 0 400px;
    height: 300px;
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 30px;
    margin-right: 20px;
    position: relative;
    margin-bottom: 80px;
`;

const FloatDet = styled.div``;

const Text = styled.p`
    font-size: 16px;
    text-align: justify;
`;

const ImageDet = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    position: absolute;
    bottom: 30px;

    img {
        width: 40px;
        border-radius: 50%;
    }
`;

const Imagetext = styled.p`
    font-size: 14px;
    font-weight: bold;
`;
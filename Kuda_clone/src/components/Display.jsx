import styled from "styled-components";
import app from "../assets/image/svg/imageone.svg";
import apptwo from "../assets/image/svg/imagetwo.svg"
import appthree from "../assets/image/svg/imagethree.svg"
import appfour from "../assets/image/svg/imagefour.svg"
import appfive from "../assets/image/svg/imagefive.svg"
import appsix from "../assets/image/svg/imagesix.svg"
import { IoIosArrowForward } from "react-icons/io";



const Display = () =>{
    const DisplayContent = [
        {
            imageUrl: app,
            title: "Your phone + our app + a debit card = a simpler life.",
            text: "We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves.",
            link: "Open An Account in Minutes " ,
            reverse: true,
        },

        {
            imageUrl: apptwo,
            title: "It’s your money, we just help you manage it.",
            text: "Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that.",
            reverse: false,
        },

        {
            imageUrl: appthree,
            title: "Save money as you spend it, seriously.",
            text: "You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow.",
            link: "See all our Savings",
            reverse: true,
        },

        {
            imageUrl: appfour,
            title: "Turn off access, turn on safety.",
            text: "Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try.",
            link: "Learn more about Cards",
            reverse: false,
        },

        {
            imageUrl: appfive,
            title: "We’re always happy to help you.",
            text: "You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy.",
            link: "Get Help",
            reverse: true,
        },

        {
            imageUrl: appsix,
            title: "Fees as clear as glass.",
            text: "We’re serious about free banking, and we will never, ever charge you for anything without your consent.",
            link: "See all our fees",
            reverse: false,
        },
]

    return (
        <Wrapper>
            <Insidewrap>
                {DisplayContent.map((disp, index) =>(
                    <Contentdiv key={index} reverse = {disp.reverse}>

                        <ImageCont>
                            <img src={disp.imageUrl} alt="" />
                        </ImageCont>

                        <DetailsCont>
                            <Title isFirst = {index ===  0} >{disp.title}</Title>
                            <Text>{disp.text}</Text>

                            {disp.link && (<Link href = "#">{disp.link} 
                            <IoIosArrowForward />
                            </Link>)}
                        </DetailsCont>
                    </Contentdiv>
                ))}
            </Insidewrap>

            <Bottomhead>
                <h1>Don’t just take our word for it</h1>
            </Bottomhead>
        </Wrapper>
    )
}

export default Display

const Wrapper = styled.div`
    max-width: 1280px;
    /* border: 1px solid; */
    margin: 50px auto;
`

const Insidewrap = styled.div`
    width: 85%;
    /* border: 1px solid red; */
    margin: 0 auto;
`

const Contentdiv = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({reverse}) => (reverse ? 'row-reverse' : 'row')};
    align-items: center;
    justify-content: space-between;

@media (max-width: 800px) {
    justify-content: center;
}
`

const ImageCont = styled.div`
    img{
        max-width: 500px;
    }
@media (max-width: 1200px) {
    img{
        max-width: 300px;
    }
}
`

const DetailsCont = styled.div`
    max-width: 44%;

@media (max-width: 1300px) {
    max-width: 40%;
    /* text-align: center; */
}
@media (max-width: 800px) {
    max-width: 90%;
    /* text-align: center; */
}
@media (max-width: 800px) {
    text-align: center;
}
`

const Title = styled.h2`
    max-width: ${({isFirst}) =>(isFirst ? '45%' : '100%')};
    font-size: 30px;
    line-height: normal;
    font-weight: 700;
    color: #40196d;

@media (max-width: 1200px) {
    max-width: 100%;
    font-size: 22px;
    /* text-align: center; */
}
`

const Text = styled.p`
    font-size: 20px;
    margin: 30px 0;

@media (max-width: 1200px) {
    font-size: 16px;
}`

const Link = styled.a`
    color: #46088d;
    font-weight: 600;
    display: flex;
    align-items: center;

@media (max-width: 800px) {
    justify-content: center;
    font-size: 13px;
}
`

const Bottomhead = styled.div`
    text-align: center;
    font-size: 16px;
    color: #40196d;
    margin: 40px 0 80px 0;

@media (max-width: 800px) {
    font-size: 13px;
    margin: 20px 40px;
    text-align: center;
}
`
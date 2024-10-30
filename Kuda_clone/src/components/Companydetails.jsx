import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaMediumM } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import styled from "styled-components";


const Companydetails = () =>{
    return (
        <Wrapper>
            <Companydet>
                <Contact>
                    <h5>Contact</h5>
                    <a href="">help@kuda.com</a>

                    <Socialicon>
                        <Iconstyle as = {FaXTwitter} />
                        <Iconstyle as = {BsInstagram} />
                        <Iconstyle as = {FaFacebook} />
                        <Iconstyle as = {IoLogoYoutube} />
                        <Iconstyle as = {FaMediumM} />
                        <Iconstyle as = {TiSocialLinkedin} />
                    </Socialicon>
                </Contact>

                <Lagos>
                    <h5>Lagos</h5>
                    <p>1-11 Commercial Avenue, Yaba, Lagos,
                    Nigeria</p>
                    
                </Lagos>

                <London>
                    <h5>London</h5>
                    <p>5 New Street Square,
                        London, EC4A 3TW,
                        United Kingdom</p>
                </London>

                <CapeTown>
                    <h5>Cape Town</h5>
                    <p>146 Campground Road, 
                    Snakepit Building, Level 4, Newlands, Cape Town</p>
                </CapeTown>

                <Canada>
                    <h5>Canada</h5>
                    <p>3080 Yonge Street,
                        Suite 6060, Toronto,
                        Ontario M4N 3N1</p>
                </Canada>

            </Companydet>
        </Wrapper>
    )
}

export default Companydetails

const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto
`
const Companydet = styled.div`
    width: 85%;
    margin: 80px auto;
    display: flex;
    gap: 20px;

@media (max-width: 768px) {
    flex-direction: column;
    
}
`
const Contact = styled.div`
    h5 {
        margin-bottom: 10px;
        color: #40196d;
        font-size: 14px;
    }
    a{
        font-weight: bold;
        font-size: 12px;
    }
`
const Socialicon = styled.div`
    display: flex;
    align-items: center;
    color: #40196d;
    gap: 20px;
    margin: 10px 0;
    font-size: 20px;
`
const Iconstyle = styled.div`
    border: 3px solid  #40196d3b;
    border-radius: 50%;
    background-color:#40196d3b;
`
const Section = styled.div`
    h5 {
        margin-bottom: 10px;
        color: #40196d;
        font-size: 14px;
    }

    p {
        max-width: 500px;
        font-size: 12px;
    }
`


const Lagos = Section;
const London = Section;
const CapeTown = Section;
const Canada = Section;
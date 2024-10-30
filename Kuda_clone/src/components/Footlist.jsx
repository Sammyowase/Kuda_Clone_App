import styled from "styled-components"

const Footlist = () =>{
    return(
        <Wrapper>
            <FooterDet>
                <Rowone>
                    <img src="/logo2.png"alt="" />
                </Rowone>

                <Personal>
                    <h5>Personal</h5>
                    <p>Discover Personal</p>
                    <p>Transfer & Spend</p>
                    <p>Save</p>
                    <p>Investments</p>
                    <p>Kuda card</p>
                </Personal>

                <Business>
                    <h5>Business</h5>
                    <p>Discover Business</p>
                    <p>Business Registration</p>
                    <p>softPOS</p>
                    <p>Invoicing</p>
                    <p>POS Machine
                    </p>
                    <p>Business Loan</p>
                    <p>Join Kuda Business</p>
                    <p></p>
                </Business>

                <Company>
                    <h5>Company</h5>
                    <p>Blog</p>
                    <p>Press</p>
                    <p>softPOS</p>
                    <p>Join Our Team</p>
                    <p>About Us
                    </p>
                    
                </Company>

                <Help>
                    <h5>Help</h5>
                    <p>Get Help</p>
                    <p>Scam Awareness</p>
                    <p>Security</p>
                    <p>Contact Us</p>
                    <p>Self Help
                    </p>
                    
                </Help>

                <Transparency>
                    <h5>Transparency</h5>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Information Security Policy</p>
                    <p>Cookie Policy</p>
                    <p>Whistleblowing Policy
                    </p>
                    
                </Transparency>
            </FooterDet>
        </Wrapper>

    )
}

export default Footlist

const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`
const FooterDet = styled.div`
    margin: 0 auto;
    max-width: 85%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 20px;
`
const Rowone = styled.div`
    img{
        width: 100px;
    }
`
const Section = styled.div`
    h5{
        margin-bottom: 20px;
        color: #40196d;
        font-size: 14px;
    }    

    p{
        margin: 20px 0;
        font-size: 12px;
    }
`

const Personal = Section;
const Business = Section;
const Company = Section;
const Help = Section;
const Transparency = Section;
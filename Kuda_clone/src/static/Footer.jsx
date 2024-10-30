import styled from "styled-components"

const Footer = () =>{
    return (
        <Wrapper>
            <Priva>
                <p>© 2024 Kuda Technologies Ltd (Company No.11472232). All rights reserved.</p>
                <p>
                If you would like to find out more about which Kuda entity you receive services from, please reach out to us via the in-app chat in the Kuda app. Nigerian banking services offered by Kuda Microfinance Bank (RC796975) with registered address at 1-11 Commercial Avenue, Yaba, Lagos, Nigeria. Kuda Microfinance Bank is licensed by the Central Bank of Nigeria. Deposits are insured by the Nigerian Deposit Insurance Corporation (NDIC).
                </p>
                
                <p>UK services are offered by Kuda EMI Ltd (Company No. 13724208) with registered address at 5 New Street Square, London, EC4A 3TW, United Kingdom.</p>

                <p>
                Canada services will be provided by Kuda Canada Technologies Limited, an Ontario corporation registered under number 1000286176, with its registered address located at 3080 Yonge Street, Suite 6060, Toronto, Ontario M4N 3N1. Kuda Canada Technologies Limited is duly registered with The Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) as a money service business, bearing registration number M23163015.
                </p>
            </Priva>

        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`
const Priva = styled.div`
    margin: 0 auto;
    max-width: 85%;

    p {
        font-size: 14px;
        margin-bottom: 20px;
        color: grey;
    }
`
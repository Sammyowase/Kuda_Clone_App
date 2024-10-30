import styled from "styled-components";
import { AiTwotoneMinusCircle } from "react-icons/ai";
import { AiTwotoneCheckCircle } from "react-icons/ai";

const Choose = () => {
  return (
    <Wrapper>
      <Container>
        <Details>
          <h2>Choose the freedom you need.</h2>

          <StyledTable>
            <thead>
              <tr>
                <th></th>
                <th>Other Banks</th>
                <th>
                  <img src="/logo2.png" alt="Kuda Logo" />
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Card Delivery</td>
                <td> <AiTwotoneMinusCircle/> Up to ₦50 plus V.A.T.</td>
                <td> <AiTwotoneCheckCircle/> 25 free transfers every month</td>
              </tr>

              <tr>
                <td>Card Maintenance Fee</td>
                <td> <AiTwotoneMinusCircle/> 😣</td>
                <td> <AiTwotoneCheckCircle/> Yes</td>
              </tr>

              <tr>
                <td>Alerts</td>
                <td> <AiTwotoneMinusCircle/> Up to ₦50 per quarter</td>
                <td> <AiTwotoneCheckCircle/> No</td>
              </tr>

              <tr>
                <td>Annual Interest</td>
                <td> <AiTwotoneMinusCircle/> 4%</td>
                <td> <AiTwotoneCheckCircle/> Up to 15%</td>
              </tr>

              <tr>
                <td>Bill Payment Fee</td>
                <td> <AiTwotoneMinusCircle/> Up to ₦100 per bill</td>
                <td> <AiTwotoneCheckCircle/> No</td>
              </tr>

              <tr>
                <td>Instant Reversals</td>
                <td> <AiTwotoneMinusCircle/> 😏</td>
                <td> <AiTwotoneCheckCircle/> Yes</td>
              </tr>

              <tr>
                <td>Maintenance</td>
                <td> <AiTwotoneMinusCircle/> Yes</td>
                <td> <AiTwotoneCheckCircle/> No</td>
              </tr>
            </tbody>
          </StyledTable>

        </Details>
      </Container>
    </Wrapper>
  );
};

export default Choose;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Details = styled.div`
  text-align: center;
  margin-bottom: 30px;
  

  h2 {
    font-size: 40px;
    margin: 50px 0;
    color: #40196d;
    /* font-weight: 800; */
  }

@media (max-width: 800px) {
    h2{
        font-size: 28px;
    }
}
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  
  th{
    font-size: 26px;
    color: #40196d;
  }

  th, td {
    border-bottom: 1px solid #ddd;
    padding: 16px;
    text-align: left;
    width: 320px;
  }

 th:not(:last-child), td:not(:last-child) {
    border-right: none;
 }

  img {
    width: 100px;
  }

  td:first-child {
    font-weight: bold;
    text-align: left;
  }

@media (max-width: 1200px) {
    
    width: 80%;
    margin: 0 auto;
    
    th{
        font-size: 20px;
    }
}
;

@media (max-width: 800px) {
    
    width: 80%;
    margin: 0 auto;
    
    th{
        font-size: 20px;
    }
}
`;
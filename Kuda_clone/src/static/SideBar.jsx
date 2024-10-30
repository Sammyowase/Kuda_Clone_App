import styled from "styled-components";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = ({ toggle, setToggle }) => {
  const test = () => {
    setToggle(false);
  };

  return (
    <Container>
      <Loginbutton>
        <Button>
          <Link to="/">
            <button>Join Kuda</button>
          </Link>
        </Button>

        <Sighin>
          <button>Sign in</button>
        </Sighin>
      </Loginbutton>

      <Naviga>
        <Styledlink to="/" onClick={test}>
          <nav>
            Personal <IoMdArrowDropright />
          </nav>
        </Styledlink>

        <Styledlink to="/business" onClick={test}>
          <nav>
            Business <IoMdArrowDropright />
          </nav>
        </Styledlink>

        <Styledlink to="/companies">
          <nav>
            Companies <IoMdArrowDropright />
          </nav>
        </Styledlink>

        <Styledlink to="/developer">
          <nav>Developer</nav>
        </Styledlink>

        <Styledlink to="/contact">
          <nav>Contact Us</nav>
        </Styledlink>

        <Styledlink to="/help">
          <nav>
            Help <IoMdArrowDropright />
          </nav>
        </Styledlink>
      </Naviga>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding-left: 20px;
`;

const Loginbutton = styled.div`
  display: flex;
`;

const Button = styled.div`
  button {
    padding: 16px 30px;
    background-color: #40196d;
    color: white;
    font-size: 12px;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    margin-bottom: 50px;
    cursor: pointer;
    &:hover {
      background-color: #520f9e;
      transform: translateY(-2px);
    }
  }
`;

const Sighin = styled.div`
  button {
    padding: 16px 30px;
    background-color: #d3d3d365;
    color: #40196d;
    font-size: 12px;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    margin-left: 20px;
    margin-bottom: 50px;
    cursor: pointer;
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const Naviga = styled.div``;

const Styledlink = styled(Link)`
  text-decoration: none;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border-bottom: 1px solid lightgrey;
    font-size: 16px;
    font-weight: 500;
    padding: 20px 0;
    color: #40196d;
  }
`;

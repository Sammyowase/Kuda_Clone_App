import { MdArrowDropDown } from 'react-icons/md';
import styled from 'styled-components';
import HeaderLogo from '../assets/image/png/download (2).png';
import NigIcon from '../assets/image/png/ngnFlag.jpg';
import { IoReorderTwoOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './SideBar';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <>
            <Container>
                <LogoNav>
                    <Logo>
                        <img src={HeaderLogo} alt="Header Logo" />
                    </Logo>
                    <Navigations>
                        <StyledLink to="/">
                            <nav>
                                <span>Personal</span>
                                <MdArrowDropDown size={20} />
                            </nav>
                        </StyledLink>
                        <StyledLink to="/business">
                            <nav>
                                <span>Business</span>
                                <MdArrowDropDown size={20} />
                            </nav>
                        </StyledLink>
                        <StyledLink to="/companies">
                            <nav>
                                <span>Company</span>
                                <MdArrowDropDown size={20} />
                            </nav>
                        </StyledLink>
                        <nav>
                            <span>Help</span>
                            <MdArrowDropDown size={20} />
                        </nav>
                    </Navigations>
                </LogoNav>
                <Buttons>
                    <SignBtn>Sign In</SignBtn>
                    <StyledLink to="/companies">
                        <JoinBtn>Join Kuda</JoinBtn>
                    </StyledLink>
                    <ConBtn>
                        <img src={NigIcon} alt="Nigerian Flag" />
                    </ConBtn>
                    <SideNav onClick={handleToggle}>
                        <IoReorderTwoOutline />
                    </SideNav>
                </Buttons>
            </Container>
            {toggle === false ? null : <Sidebar toggle={toggle} setToggle={setToggle} />}
        </>
    );
};

export default Header;

const Container = styled.div`
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background-color:white;
`;

const LogoNav = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.div`
    margin: 0px 80px 0px 50px;
    img {
        width: 100px;
    }
`;

const Navigations = styled.div`
    display: flex;
    nav {
        display: flex;
        align-items: center;
        color: #5e025e;
        margin: 0px 20px;
        span {
            margin-right: 3px;
            font-size: 13px;
            font-weight: 600;
        }
    }
    @media (max-width: 800px) {
        display: none;
    }
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 800px) {
        margin-right: 30px;
    }
`;

const SignBtn = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 600;
    color: #40196D;
    @media (max-width: 800px) {
        display: none;
    }
`;

const JoinBtn = styled.button`
    width: 150px;
    height: 45px;
    border-radius: 10px;
    outline: none;
    border: none;
    color: #fff;
    font-weight: 700;
    background-color: #5e025e;
    margin: 0px 25px;
    @media (max-width: 800px) {
        display: none;
    }
`;

const ConBtn = styled.button`
    background-color: #a4e3c6;
    outline: none;
    border: none;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
    img {
        width: 20px;
    }
`;

const SideNav = styled.div`
    display: none;
    font-size: 30px;
    margin-left: -30px;
    @media (max-width: 800px) {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

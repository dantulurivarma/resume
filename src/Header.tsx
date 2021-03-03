import styled, { css } from 'styled-components';
import React, { useEffect, useState } from 'react';
import img from './assets/appImage.jpg';
import { moveInLeft, moveIn, moveOutNav, moveInNav } from './styles/animations';
import {  NavHashLink } from 'react-router-hash-link';


const Title = styled.h1`
  font-style: normal;
  font-size: 17px;
  padding-left: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
`;

const Link = styled.a`
  font-size: 14px;
  font-weight: 400;
  color: rgb(255, 255, 255);
  text-decoration: none;
  margin-left: 30px;
  letter-spacing: 1px;
  &:hover {
    color: red;
    font-size: 16px;
  }
`;

const Nav = styled.nav<{isScrolling: boolean, scrollPosition: number}>`
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  display: none;
  justify-content: space-between;
  align-items: center;
  z-index: 500;
  height: 60px;
  animation: ${props => props.isScrolling ?  css` ${moveOutNav} 0.5s ease-in-out  both` :  css`${moveInNav} 0.4s ease-in-out  both`};
  background-color:  ${props => props.scrollPosition > 0 ? 'black': 'transparent'};
  @media (min-width: 576px) {
   display: flex;
  };
`;

const Wrapper = styled.div`
  display:flex;
  background-image: url(${img});
  height: 500px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  color:rgb(255, 255, 255);

  a {
  font-size: 14px;
  font-weight: 400;
  color: rgb(255, 255, 255);
  text-decoration: none;
  margin-left: 30px;
  letter-spacing: 1px;
  &:hover,:active,:focus {
    font-weight: 600;
    color: rgb(255, 255, 255);
    text-shadow: rgb(212 212 212) 1px 1px 2px;;
  }
}
.active{
    font-weight: 600;
    color: rgb(255, 255, 255);
    text-shadow: rgb(212 212 212) 1px 1px 2px;
}
`;

const TitleDiv = styled.div`
  margin: auto;
  text-align: center;
`

const LinksDiv = styled.div`
  padding: 0 20px;
`;

const H1 = styled.h1`
  font-style: normal;
  font-weight: 300;
  line-height: 1.1;
  font-size: 60px;
  letter-spacing: 0.12em;
  animation: ${moveIn} 2s ease-in-out .2s both;
  padding: 1rem;
  @media (max-width: 576px) {
    font-size: 40px;
    padding: 0.5rem;
  };
`;

const H4 = styled.h4`
  font-style: normal;
  letter-spacing: 0.04em;
  font-weight: 600;
  font-size: 16px;
  animation: ${moveInLeft} 2s ease-in-out .2s both;
`;


const StyledBurger = styled.button<{open : boolean}>`
  position: absolute;
  top: 5%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  margin:  1rem 1.5rem ;
  right: 0;
  z-index: 500;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    box-shadow: rgb(47 47 47) 0px 0px 3px 1px;l

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(-20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const StyledMenu = styled.div<{open : boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgb(47, 47, 47);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100%;
  text-align: left;
  z-index: 400;
  position: fixed;
  padding: 5rem 1rem;
  top: 0;
  right: 0;
  width: 60%;
  transition: transform 0.3s ease-in-out;
   
  h1 {
    margin: 0 0 30px;
    padding: 0;
  }

  a {
    font-size: 14px;
    margin: 0 0 30px;
    font-weight: 400;
    letter-spacing: 1px;
    text-decoration: none;
  }
`;

const HamburgerContainer = styled.div`
  display: none;
  position: fixed;
  top:0;
  right: 0;
  z-index: 400;

  @media (max-width: 576px) {
    display: block
  };
`;

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const[scrollPosition , setScrollPosition] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
      setScrollPosition(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);


  const handleNavBar = () => {
   setOpen((prevValue) => !prevValue)
  };
  return (
   
    <Wrapper>
    <HamburgerContainer>
    <StyledBurger open={open} onClick={() => handleNavBar()}>
      <div />
      <div />
      <div />
    </StyledBurger>
    <StyledMenu open={open}>
    <Title> Phaneendra Dantuluri</Title>
      <NavHashLink smooth to="/#about" activeClassName="active" onClick={() => handleNavBar()}>About</NavHashLink>
      <NavHashLink smooth to="/#experience"  activeClassName="active" onClick={() => handleNavBar()}>Experience</NavHashLink>
      <NavHashLink smooth to="/#contact"  activeClassName="active"  onClick={() => handleNavBar()}>Contact</NavHashLink>
    </StyledMenu>
    </HamburgerContainer>
    <Nav isScrolling={scrolling} scrollPosition={scrollPosition}>
      <Title> Phaneendra Dantuluri</Title>
      <LinksDiv>
      <NavHashLink smooth to="/#about" activeClassName="active">About</NavHashLink>
      <NavHashLink smooth to="/#experience"  activeClassName="active">Experience</NavHashLink>
      <NavHashLink smooth to="/#contact"  activeClassName="active">Contact</NavHashLink>
      </LinksDiv>
    </Nav>
    <TitleDiv>
    <H1>Phaneendra Dantuluri</H1>
    <H4>Fullstack Software Engineer</H4>
    </TitleDiv>
  </Wrapper>
  );
};


export default Header;
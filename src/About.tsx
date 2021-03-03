import React from 'react';
import styled from 'styled-components';
import {StyledH2, StyledH4, Border, StyledParagraph} from './styles/global';
import img from './assets/phani.jpeg';


const Container = styled.div`
 display: flex;
 padding: 90px 12vw;
 align-items: center;
 width: 100%;
 @media (max-width: 576px) {
  flex-direction: column;
  padding: 60px 24px
 };
`;

const FirstChild = styled.div`
 margin-right: 80px;
 text-align: initial;

 @media (max-width: 576px) {
  margin-right: 0;
 };
`;

const ImageDiv = styled.div`
  width: 340px;
  height: 380px;
  flex-shrink: 0;
  border-radius: 28px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url(${img}); 

  @media (max-width: 576px) {
    display: none;
   };
`;


const MobileImageDiv = styled.div`
  width: 340px;
  height: 380px;
  flex-shrink: 0;
  border-radius: 28px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url(${img});
  margin: 30px auto;

  @media (max-width: 48em) {
    width: 280px;
    height: 340px;
}


  @media (min-width: 576px) {
    display: none;
   };
`;


const About = () => {
  return (
    <Container>
      <FirstChild>
     <StyledH2> Hi, I'm Phaneendra.</StyledH2>
     <StyledH4>I'm a passionate and detail-oriented software engineer who loves to bring great ideas to life!</StyledH4>
      <Border  hide/>
      <MobileImageDiv />

      <StyledParagraph>
        <b>I’m currently working as a Fullstack Developer at Royal Bank Of Canada, </b>
         I love managing projects and building web/mobile applications that can turn innovative ideas into great products.
      </StyledParagraph>

      <StyledParagraph>
       With over 6+ years of development experience, I have worked on a variety of projects ranging from building products from scratch to building small components on web apps used nationally throughout Canada. On top of that, I enjoy learning new technologies and always keep my self refreshed with best practices for any upcoming opportunities and challenges.
       </StyledParagraph>

       <StyledParagraph>In my spare time, I love watching/playing basketball and barbecuing in my backyard.</StyledParagraph>
     </FirstChild>


     <ImageDiv></ImageDiv>
    </Container>
  );
};


export default About;
import styled from "styled-components";
import img from '../assets/phani.jpeg';
import {StyledH2, StyledH4, Border, StyledParagraph} from '../styles/global';

const Wrapper = styled.div`
  position: relative;
  padding: 0 0 90px 10vw;
  display: flex;
  width: 100%;
  background-color: rgb(31, 31, 31);
  display: flex;
  @media (max-width: 576px) {
    padding: 0;
    flex-direction: column;
    background-color: white;
    .mob-desc {
      height: 180px;
      background-color: rgb(31, 31, 31);
    }
   };

   @media (min-width: 576px) {
    .mob-desc {
     display:none;
    }
   };
`;

const Description = styled.div`
   display: inline-block;
   margin-left: -170px;
   background: #f0f2f5;
   padding: 90px 5em 90px 12em;

   @media (max-width: 576px) {
    padding:   10px 24px 60px 24px;
    margin-top: 200px;
    margin-left: 0;
   };
    `

const ImageDiv = styled.div`
  width: 340px;
  margin-top: 90px;
  height: 380px;
  flex-shrink: 0;
  box-shadow:  10px 10px 3px -6px #777;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url(${img}); 
  z-index: 1;

  @media (max-width: 576px) {
    display: none;
   };
`;

const MobileImageDiv = styled.div`
  position: relative;
  width: 340px;
  height: 380px;
  flex-shrink: 0;
  border-radius: 28px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url(${img});
  margin: 30px auto;
  box-shadow:  0 10px 6px -6px #777;

  @media (max-width: 48em) {
    width: 280px;
    height: 340px;
}
`;

const About = () => {
  return (
    <Wrapper>
      {/* <ImageDiv data-aos="fade-right"></ImageDiv> */}
      <div className="mob-desc">
      <MobileImageDiv data-aos="fade-right"/>
      </div>
      <Description data-aos="zoom-in">
      <div>
      <StyledH2> Hi, I'm Phaneendra.</StyledH2>
      <StyledH4>I'm a passionate and detail-oriented software engineer who loves to bring great ideas to life!</StyledH4>
      <Border />
      <StyledParagraph>
        <b>I’m currently working as a Fullstack Developer at Royal Bank Of Canada, </b>
         I love managing projects and building web/mobile applications that can turn innovative ideas into great products.
      </StyledParagraph>

      <StyledParagraph>
       With over 6+ years of development experience, I have worked on a variety of projects ranging from building products from scratch to building small components on web apps used nationally throughout Canada. On top of that, I enjoy learning new technologies and always keep my self refreshed with best practices for any upcoming opportunities and challenges.
       </StyledParagraph>

       <StyledParagraph>In my spare time, I love watching/playing cricket and barbecuing in my backyard.</StyledParagraph>
      </div>
      </Description>
    </Wrapper>
  );
};


export default About;
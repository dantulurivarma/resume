import React from "react";
import styled from "styled-components";
import { Border, StyledH2 } from "./styles/global";
import { AiOutlineCheck } from "react-icons/ai";

const Container = styled.div`
  padding: 90px 12vw;
  width: 100%;
  background-color: rgb(31, 31, 31);
  color: rgb(255, 255, 255);

  @media (max-width: 37.5em) {
      padding: 60px 24px;
  }
  .skill-container {
    @media (max-width: 75em)
    {
        margin-bottom: 90px;
    }
  }

  p {
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  line-height: 1.4
  };

  li {
    span {
      vertical-align: middle;
      font-weight: 400;
      padding-right: 8px;
    };

    p {
      display: inline;
    }
  };

  .margin-bottom-md {
    margin-bottom: 20px;
    list-style: none;
  }
`;


const StyledSkills = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 576px) {
   flex-direction: column;
  };
  .skill-container {
  @media (max-width: 62.5em)
  {
    margin-bottom: 38px;
  }
`;

const StyledH4 = styled.h4`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 40px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 35vw;
  max-width: 500px;
  gap: 24px 4vw;

  
  @media (max-width: 48em){
    gap: 20px 30px;
  };

  @media (max-width: 62.5em)
    {
      width: auto;
      max-width: 380px;
    };
`;

const StyledGridItem = styled.div`
    background-color: rgba(255, 255, 255, 0.18);
    box-shadow: rgb(255 255 255 / 18%) 0px 0px 4px 4px;
    padding: 20px 0px;
    text-align: center;
    border-radius: 30px;

   
`;
const Skills = () => {
  return (
    <Container>
      <StyledH2>Skills</StyledH2>
      <Border color={'rgb(255, 255, 255)'} />
      <StyledSkills>
        <div className={'skill-container'}>
          <StyledH4>LIBRARIES & FRAMEWORKS</StyledH4>
          <StyledGrid>
            <StyledGridItem><p>Angular</p></StyledGridItem>
            <StyledGridItem><p>React</p></StyledGridItem>
            <StyledGridItem><p>Spring Boot</p></StyledGridItem>
            <StyledGridItem><p>Node Js</p></StyledGridItem>
            <StyledGridItem><p>Flask</p></StyledGridItem>
            <StyledGridItem><p>Express</p></StyledGridItem>
            <StyledGridItem><p>React Native</p></StyledGridItem>
            <StyledGridItem><p>Vue</p></StyledGridItem>
            <StyledGridItem><p>jQuery</p></StyledGridItem>
          </StyledGrid>
        </div>
        <div className={'skill-container'}>
          <StyledH4>LANGUAGES</StyledH4>
          <ul>
            <li className={'margin-bottom-md'}><span><AiOutlineCheck /></span><p>TypeScript</p></li>
            <li className={'margin-bottom-md'}><span><AiOutlineCheck /></span><p>JavaScript (ES6+)</p></li>
            <li className={'margin-bottom-md'}><span><AiOutlineCheck /></span><p>HTML5</p></li>
            <li className={'margin-bottom-md'}><span><AiOutlineCheck /></span><p>CSS/Sass</p></li>
            <li className={'margin-bottom-md'}><span><AiOutlineCheck /></span><p>Java</p></li>
            <li className={'margin-bottom-md'}><span><AiOutlineCheck /></span><p>Python</p></li>
          </ul>
        </div>
        <div className={'skill-container'}>
          <StyledH4>TOOLS & PLATFORMS</StyledH4>
          <ul>
            <li className={'margin-bottom-md'}><span><AiOutlineCheck /></span><p>Git</p></li>
            <li className={'margin-bottom-md'}><span><AiOutlineCheck /></span><p>Firebase</p></li>
            <li className={'margin-bottom-md'}><span><AiOutlineCheck /></span><p>Webpack</p></li>
            <li className={'margin-bottom-md'}><span><AiOutlineCheck /></span><p>BitBucket</p></li>
            <li className={'margin-bottom-md'}><span><AiOutlineCheck /></span><p>AWS</p></li>
            <li className={'margin-bottom-md'}><span><AiOutlineCheck /></span><p>Dockers</p></li>
          </ul>
        </div>
      </StyledSkills>
    </Container>
  );
};



export default Skills;
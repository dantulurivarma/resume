import styled from "styled-components";
import { Border, StyledH2 } from "../styles/global";
import { AiOutlineCheck } from "react-icons/ai";
import angularImg from "../assets/angular.svg";
import reactImg from "../assets/react.png";
import nodeImg from "../assets/node.png";
import springImg from "../assets/spring-boot.png";
import vueImg from "../assets/vue.svg";
import d3Img from "../assets/d3.png";
import jquery from "../assets/jquery.png";

const Container = styled.div`
  padding: 90px 11vw;
  width: 100%;
  color: rgb(255, 255, 255);
  background-color:  rgb(31, 31, 31);

  @media (max-width: 37.5em) {
      padding: 60px 1rem;
  }

  .additional {
    background-color:  #f0f2f5;;
    color:  rgb(31, 31, 31);
    border-radius: 0.5rem;
    padding: 1rem;
   
  }
  .skill-container {
    img {
      width: 100px;
      height: 100px;
      &:hover {
     
      }
    }

    .extra-img {
      width: 200px;
      grid-column: 1 / 4;
      grid-row: 3 / 3;
    }

    @media (max-width: 75em)
    {
        margin-left: 0;
        margin-bottom: 90px;
        img {
          width: 75px;
          height: 75px;
        }
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
  background-color:  rgb(31, 31, 31);
    box-shadow: rgb(31 31 31 / 18%) 0px 0px 4px 4px;
    color:  rgb(255, 255, 255);
    padding: 20px 0px;
    text-align: center;
    border-radius: 30px;
   
    p {
      @media (max-width: 48em){
       font-size: 14px;
      };
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
const Skills = () => {
  return (
    <Container>
      <StyledH2>Skills</StyledH2>
      <Border color={'rgb(255, 255, 255)'} data-aos="fade-right" />
      <StyledSkills>
        <div className='skill-container'>
          <StyledH4>LIBRARIES & FRAMEWORKS</StyledH4>
          <StyledGrid>
            <img src={angularImg} data-aos="flip-right" />
            <img src={reactImg} data-aos="flip-right" />
            <img src={nodeImg} data-aos="flip-right" />
            <img src={vueImg} data-aos="flip-right" />
            <img src={d3Img} data-aos="flip-right" />
            <img src={jquery} data-aos="flip-right" />
            <img className="extra-img " src={springImg} data-aos="flip-right" />

            {/* <StyledGridItem data-aos="flip-right"><p>Angular</p></StyledGridItem>
            <StyledGridItem data-aos="flip-right"><p>React</p></StyledGridItem>
            <StyledGridItem data-aos="flip-right"><p>Spring Boot</p></StyledGridItem>
            <StyledGridItem data-aos="flip-right"><p>Node Js</p></StyledGridItem>
            <StyledGridItem data-aos="flip-right"><p>Flask</p></StyledGridItem>
            <StyledGridItem data-aos="flip-right"><p>Express</p></StyledGridItem>
            <StyledGridItem data-aos="flip-right"><p>React Native</p></StyledGridItem>
            <StyledGridItem data-aos="flip-right"><p>Vue</p></StyledGridItem>
            <StyledGridItem data-aos="flip-right"><p>jQuery</p></StyledGridItem> */}
          </StyledGrid>
        </div>
        <div className='skill-container additional'>
          <StyledH4>LANGUAGES</StyledH4>
          <ul>
            <li className={'margin-bottom-md'} data-aos="fade-up"><span><AiOutlineCheck /></span><p>TypeScript</p></li>
            <li className={'margin-bottom-md'} data-aos="fade-up"><span><AiOutlineCheck /></span><p>JavaScript (ES6+)</p></li>
            <li className={'margin-bottom-md'} data-aos="fade-up"><span><AiOutlineCheck /></span><p>HTML5</p></li>
            <li className={'margin-bottom-md'} data-aos="fade-up"><span><AiOutlineCheck /></span><p>CSS/Sass</p></li>
            <li className={'margin-bottom-md'} data-aos="fade-up"><span><AiOutlineCheck /></span><p>Java</p></li>
          </ul>
        </div>

        <div className='skill-container additional'>
          <StyledH4>TOOLS & PLATFORMS</StyledH4>
          <ul>
            <li className={'margin-bottom-md'} data-aos="fade-up"><span><AiOutlineCheck /></span><p>Git</p></li>
            <li className={'margin-bottom-md'} data-aos="fade-up"><span><AiOutlineCheck /></span><p>Firebase</p></li>
            <li className={'margin-bottom-md'} data-aos="fade-up"><span><AiOutlineCheck /></span><p>Webpack</p></li>
            <li className={'margin-bottom-md'} data-aos="fade-up"><span><AiOutlineCheck /></span><p>BitBucket</p></li>
            <li className={'margin-bottom-md'} data-aos="fade-up"><span><AiOutlineCheck /></span><p>AWS</p></li>
            <li className={'margin-bottom-md'} data-aos="fade-up"><span><AiOutlineCheck /></span><p>Dockers</p></li>
            <li className={'margin-bottom-md'} data-aos="fade-up"><span><AiOutlineCheck /></span><p>GraphQl</p></li>
          </ul>
        </div>
      </StyledSkills>
    </Container>
  );
};


export default Skills;
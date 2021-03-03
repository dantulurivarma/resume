import styled from "styled-components";
import img from "./assets/expimage.jpg";
import { TiPencil } from "react-icons/ti"
import { IoBagCheck } from "react-icons/io5";



const StyledDesc = styled.div<{align? : any}>`
  display: inline-block;
  position: relative;
  background-color: rgb(47, 47, 47);
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 40%) 2px 4px 4px;
  width: 45%;
  z-index: 100;
  min-height: 200px;
  text-align: left;

  @media (max-width: 62.5em) {
    width: 100%;
  }

  
  h5{
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 4px;
  }

  h4 {
    display: none;

    @media (max-width: 62.5em) {
    display: block;
    font-weight: 600;
    font-size: 14px;
    margin-top: 18px;
    line-height: 1;
    color: rgb(212, 212, 212);
  }
  }
  
  p {
    font-size: 16px;
    font-style: normal;
    font-weight: normal;
    line-height: 1;
  };
  
  &::before {
      content: "";
      position: absolute;
      top: 20px;
      right:  ${({ align }) => align ? '100%' : 'unset'};
      left: ${({ align }) => align ? 'unset' : '100%'};
      height: 0px;
      width: 0px;
      border-width: 10px;
      border-style: solid;
      border-color: ${({ align }) => align ? 'transparent rgb(47, 47, 47) transparent transparent' : 'transparent transparent transparent rgb(47, 47, 47)'};
      border-image: initial;

      @media (max-width: 62.5em) {
        right: 100%;
        left: unset;
        border-color: transparent rgb(47, 47, 47) transparent transparent;
      }

  }
`;

const Container = styled.div`
  text-align: center;
  padding: 90px 12vw;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url(${img});

  @media (max-width: 48em)
   {
      padding: 90px 20px 90px 10px;
  }
.title {
  color: rgb(255, 255, 255);
  text-align: center;

  h2{
    font-weight: 200;
    text-align: center;
    text-shadow: rgb(255 255 255) 0px 0px 2px;
    font-size: 40px;
  };
}

.border {
  width: 120px;
  height: 2px;
  display: inline-block;
  background-color: rgb(155, 222, 226);
  color: white;
 }

 .margin-two {
  margin: 14px 0px 10px;
  @media (max-width: 62.5em)
  {
     margin: 24px 0px 28px;
   }
 }

 .margin-one {
  margin: 30px 0px 48px;
  @media (max-width: 62.5em)
  {
     margin: 24px 0px 28px;
   }
 }
.exp-container {
  position: relative;
  padding: 30px 0px;
  margin: auto;
  max-width: 1100px;
  color: rgb(255, 255, 255);

  @media (max-width: 62.5em) {
    max-width: 600px;
  }
}

.exp-section {
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;

  @media (max-width: 37.5em)
  {
    flex-direction: row-reverse;
  };

  &::after {
    content: "";
    position: absolute;
    top: 0px;
    z-index: 99;
    height: 100%;
    width: 2px;
    background: rgb(155, 222, 226);
    left: calc(50% - 1px);

    @media (max-width: 62.5em) {
      left: 20px;
    }
  };
}
}


.align-right {
  flex-direction: row-reverse;
}



.list-container{
  font-size: 14px;
  letter-spacing: 0.02em;
  line-height: 1.4;

  ul {
    padding-left: 20px;

    li {
      margin-bottom:  6px;
    }
  }
}

.icon-container {
  margin-top: 10px;
  width: 10%;
  color: rgb(255, 255, 255);
  z-index: 100;

  @media (max-width: 62.5em) {
  width: auto;
  margin-right: 15px;
  }
};

.icon-wrapper {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: rgb(47, 47, 47);
  margin: auto;
  position: relative;
  box-shadow: rgb(0 0 0 / 40%) 2px 4px 4px;
  padding-top: 8px;
}

.exp-time{
  line-height: 40px;
  margin-top: 10px;
  text-shadow: rgb(0 0 0 / 40%) 2px 4px 4px;

  @media (max-width: 37.5em)
  {
    display: none;
  };
}
`;
const Experience = () => {
  return (
    <Container>
      <div className="title">
       <h2>Experience</h2>
       <div className="border margin-one"></div>
      </div>
      <div className="exp-container">
        <div className="exp-section">
          <StyledDesc>
          <h5>ROYAL BANK OF CANADA</h5>
          <p>Angular Developer</p>
          <div className="border margin-two"></div>
          <div className="list-container">
            <ul>
              <li>Engineered and developed major features of RBC’s customer/employee-facing web applications using Angular 8 with NgRX, Sass, Spring Boot 2 and Mongo DB</li>
              <li>Collaborated with a product owner, UI/UX designers and other developers to develop and maintain products pre/post MVP release</li>
              <li>Proposed and implemented scalable common components that can minimize code duplication</li>
            </ul>
          </div>
          <h4>JAN 2019 - PRESENT</h4>
          </StyledDesc>
          <div className="icon-container">
          <div className="icon-wrapper">
            <TiPencil  size={24}/>
          </div>
        </div>
        <h4  className="exp-time">JAN 2019 - PRESENT</h4>
        </div>

        <div className= "exp-section align-right">
          <StyledDesc align>
          <h5>TD BANK</h5>
          <p>Fullstack Developer</p>
          <div className="border margin-two"></div>
          <div className="list-container">
            <ul>
              <li>Involved in designing the user experience interface UI/UX strategy, UI requirements, converting
findings into UI designs using HTML, CSS, SASS, Typescript, Angular 5 and Bootstrap.
</li>
              <li>Experience using Angular Reactive Forms and form validations using angular default validators
and custom validators</li>
              <li>Experience in creating Angular Directives and Pipes to transform the DOM elements</li>
            </ul>
          </div>
          <h4>JAN 2018 - JAN 2019</h4>
          </StyledDesc>
          <div className="icon-container">
          <div className="icon-wrapper">
            <IoBagCheck  size={24}/>
          </div>
        </div>
        <h4 className="exp-time">JAN 2018 - JAN 2019</h4>
        </div>

        <div className= "exp-section">
          <StyledDesc>
          <h5>TELUS HEALTH</h5>
          <p>Fullstack Developer</p>
          <div className="border margin-two"></div>
          <div className="list-container">
            <ul>
              <li>Worked as a Full Stack Java Developer in developing and maintaining Electronic Medical Record</li>
              <li>Developed UI screens using HTML, CSS, JSP, JavaScript and Angular 4</li>
              <li>Implemented test cases and performed unit testing using Karma-test-runner and Jasmine</li>
            </ul>
          </div>
          <h4>AUG 2016- JAN 2018</h4>
          </StyledDesc>
          <div className="icon-container">
          <div className="icon-wrapper">
            <IoBagCheck  size={24}/>
          </div>
        </div>
        <h4 className="exp-time">AUG 2016- JAN 2018</h4>
        </div>
      </div>
    </Container>
  );
};

export default Experience;
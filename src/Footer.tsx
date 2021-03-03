import styled from "styled-components";
import linkedin from './assets/linkedin.svg';
import mail from './assets/email.svg';
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";


const Container = styled.div`
  background-color: rgb(31, 31, 31);
  text-align: center;
  padding: 48px 0px;

  div {
    text-align: center;
    margin-bottom: 32px;
  };

  a {
    margin: 0px 14px;
    display: inline-block;
    transition: all 0.3s ease-in-out 0s;
    color: white;

    &:hover {
      transform: scale(1.3)
    }
  }

  p {
    font-size: 14px;
    color: white;
  }
}
`;

const Footer = () => {
  return (
   <Container>
     <div>
       <a target="_blank" rel="noopener noreferrer" href="mailto:phani5797@gmail.com">
        <AiOutlineMail  size={32}/>
       </a>
       <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/phaneendra-dantuluri-881984191/">
         <AiOutlineLinkedin  size={32} />
       </a>
     </div>
     <p>&copy; Phaneendra2020</p>
   </Container>
  );
};


export default Footer;
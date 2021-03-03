import styled from "styled-components";
import img from './assets/chat.svg';
import {StyledAnchor} from './styles/global';
 
const Container = styled.div`
  text-align: center;
  padding: 90px 12vw;

  @media (max-width: 37.5em)
  {
    padding: 60px 24px;
  };

  h3{
    margin: 28px;
    font-style: normal;
    font-weight: 500;
    font-size: 36px
  };

  img {
    widht:80px;
    height:80px;
    @media (max-width: 37.5em)
    {
      display: none;
    };
  }

  p{
    max-width: 600px;
    margin: 0px auto 24px;
    font-size: 16px;
    font-style: normal;
    font-weight: normal;
    line-height: 1.4;
  }
`;
const Interact = () => {
  return (
    <Container>
      <img src={img}/>
      <h3>Wanna talk more?</h3>
      <p>Thank you for visiting my website! If you’d like to know more about me or looking for a coffee chat, feel free to hit me up with an email!</p>
      <StyledAnchor target="_blank" rel="noopener noreferrer" href="mailto:phani5797@gmail.com">Send Email</StyledAnchor>
    </Container>
  );
};

export default Interact;
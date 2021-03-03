import styled from "styled-components";
import { StyledAnchor } from "./styles/global";
import resume from './assets/resume.pdf';

const Container = styled.div`
  text-align: center;
  padding: 90px 12vw;
  color: white;
  background-color: rgb(31,31,31);

  @media (max-width: 37.5em)
  {
    padding: 60px 24px;
  };

  h3{
    font-weight: 400;
    margin-bottom: 30px;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
  }
`;
const ViewResume = () => {
  return (
    <Container>
      <h3>VIEW MY RESUME</h3>
      <StyledAnchor href={resume}  target="_blank" >Download</StyledAnchor>
    </Container>
  );
};


export default ViewResume;
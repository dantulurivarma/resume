import styled from "styled-components";

export const StyledH2 = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    margin-bottom: 18px;
    @media (max-width: 576px) {
      font-size: 38px;
     };
`;
export const StyledH4 = styled.h4`
  font-style: normal;
  font-weight: 600;
  line-height: 1.4;
  font-size: 16px;
`;

export const Border = styled.div<{hide?: any, color? : string}>`
    width: 120px;
    height: 2px;
    margin: 28px 0px;
    background-color: ${({ color }) => color ? color : 'black'};
    @media (max-width: 576px) {
      display: ${({ hide }) => hide ? 'none' : 'block'};
     };
`;

export const StyledParagraph = styled.p`
  font-size: 16px;
  line-height: 1.4;
  font-weight: 400;
  margin-bottom: 18px
`;

export const StyledAnchor = styled.a`
  display: inline-block;
  padding: 14px 40px;
  border: 1px solid rgb(47, 47, 47);
  background-color: rgb(255, 255, 255);
  color: rgb(12, 12, 12);
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;

 &:hover, :active, :focus{
  background-color: rgb(239, 239, 239);
  outline: none;
  box-shadow: rgb(239 239 239) 2px 2px 10px 2px;
  padding-left: 60px;
  padding-right: 60px;
}
`;
import styled from "styled-components";

const StyledHome = styled.div`
height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

 @media all and (max-width: 684px) {
     grid-template-columns: 1fr;
  }
`;

const StyledHeader = styled.h1`
  font-size: 1.8em;
  text-transform: uppercase;
`;

const StyledSubHeader = styled.h3`
  color: #4fd7ee;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const StyledBox = styled.div`
padding: 2rem;
border: 1px solid green;
display: flex;
flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledButton = styled.button`
border: 2px solid #4fd7ee;`;

const StyledParagraph = styled.p``;

export { StyledHome, StyledHeader, StyledSubHeader, StyledBox, StyledButton, StyledParagraph };

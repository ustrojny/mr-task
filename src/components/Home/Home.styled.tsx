import styled from "styled-components";

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

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

const StyledParagraph = styled.p``;

const StyledButton = styled.button`
  border: 2px solid #4fd7ee;
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${StyledImage} {
    height: 100%;
  }

  ${StyledHeader}, ${StyledParagraph}, ${StyledSubHeader} {
    padding: 1rem 1rem 0 1rem;
  }
  ${StyledButton} {
    margin-bottom: 1rem;
  }
`;

export {
  StyledHome,
  StyledHeader,
  StyledSubHeader,
  StyledBox,
  StyledButton,
  StyledParagraph,
  StyledImage,
};

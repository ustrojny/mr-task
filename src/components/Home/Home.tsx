import React from "react";
import {
  StyledHome,
  StyledBox,
  StyledHeader,
  StyledSubHeader,
  StyledButton,
  StyledParagraph,
  StyledImage,
} from "./Home.styled";

import photo from "../../images/photo.jpeg";

function Home() {
  return (
    <StyledHome>
      <StyledBox>
        <StyledHeader>Kilka słów o nas</StyledHeader>
        <StyledSubHeader>Czyli kim jesteśmy i dokąd zmierzamy</StyledSubHeader>
        <StyledParagraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </StyledParagraph>
        <StyledButton onClick={() => console.log("clicked")}>
          Zobacz więcej
        </StyledButton>
      </StyledBox>

      <StyledBox>
        <StyledImage src={photo} />
      </StyledBox>
      <StyledBox>
        <StyledImage src={photo} />
      </StyledBox>
      <StyledBox>
        <StyledHeader>Nasza oferta</StyledHeader>
        <StyledSubHeader>
          Dowiedz się co mozemy Tobie zaoferować
        </StyledSubHeader>
        <StyledParagraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </StyledParagraph>
        <StyledButton onClick={() => console.log("clicked")}>
          Zobacz więcej
        </StyledButton>
      </StyledBox>
    </StyledHome>
  );
}

export default Home;

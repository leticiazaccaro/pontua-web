import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  padding: 19px 21px 0 27px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3);
  column-gap: 10px;
  grid-row-gap: 10px;

  div:nth-child(9),
  div:nth-child(10) {
    grid-column: span 2;
  }
`;

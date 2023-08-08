import styled from "styled-components";
import colors from "./Colors";

export const Main = styled.main`
  background-color: ${colors.blue800};
  height: 100vh;
`;

export const Header = styled.header`
  padding: 49px 0 0 106px;
`;

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 68px;
`;

export const Image = styled.img`
  margin-right: 140px;
`;

export const Card = styled.div`
  width: 380px;
  height: 433px;
  top: 167px;
  left: 918px;
  border-radius: 28px;
  background-color: ${colors.white};
  padding: 49px 38px 43px 34px;
`;

export const Title = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 16px;
`;

export const Point = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 6px;
  background-color: ${colors.orange500};
  margin-bottom: 7px;
`;

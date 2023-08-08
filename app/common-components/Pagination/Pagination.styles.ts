import styled from "styled-components";
import colors from "../../styles/Colors";

type PaginationProps = {
  isActive?: boolean;
  display?: string;
};

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PageButton = styled.button<PaginationProps>`
  background-color: ${(isActive) => (isActive ? colors.white : colors.gray50)};
  color: ${(isActive) => (isActive ? colors.blue200 : colors.blue600)};
  font-weight: 500;
  font-size: 14px;
  border: 1px solid ${colors.gray300};
  padding: 9px 16px;
  cursor: pointer;
  display: ${({ display }) => (display ? display : "block")};

  &:hover {
    background-color: ${colors.gray50};
    color: ${colors.blue600};
  }

  &:first-child,
  &:last-child {
    padding: 8px 16px;
  }

  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    color: ${colors.blue600};
  }

  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    color: ${colors.blue600};
  }
`;

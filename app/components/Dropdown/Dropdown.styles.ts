import styled from "styled-components";
import colors from "../../styles/Colors";

export type DropdownProps = {
  open?: boolean;
  margin?: string;
};

export const DropdownWrapper = styled.div<DropdownProps>`
  position: relative;
  margin: ${({ margin }) => (margin ? margin : 0)};
`;

export const ImageOption = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  margin-right: 8px;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
`;

export const DropdownButton = styled.button`
  border: 1px solid ${colors.gray300};
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  height: 44px;
  background-color: ${colors.white};
  line-height: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownMenu = styled.ul<DropdownProps>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${colors.white};
  list-style: none;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.open ? "block" : "none")};
`;

export const DropdownMenuItem = styled.li`
  padding: 14px;
  cursor: pointer;
  height: 44px;

  &:hover {
    background-color: ${colors.grayBackground};
  }

  &:first-child {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;

import type { FC } from "react";
import { useState } from "react";
import * as Styled from "./Dropdown.styles";
import building from "../../assets/png/building.png";
import { TextTypes } from "../constants/TextType.enum";
import Text from "../Text/Text";
import colors from "~/styles/Colors";
import { DownArrow } from "../svg/downArrow";

type Props = {
  options: Option[];
}& Styled.DropdownProps;

type Option = {
  label: string;
  value: string;
};

const Dropdown: FC<Props> = ({ options, ...styleProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option>({
    label: "Selecione um herói",
    value: "",
  });

  const handleDropdownToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <Styled.DropdownWrapper {...styleProps}>
      <Styled.DropdownButton onClick={handleDropdownToggle}>
        <Styled.Option>
          <Styled.ImageOption src={building}></Styled.ImageOption>
          <Text
            type={TextTypes.SPAN}
            color={colors.blue900}
            size="1rem"
            weight={500}
            fontFamily="Inter"
          >
            {selectedOption && selectedOption.label}
          </Text>
        </Styled.Option>
        <DownArrow></DownArrow>
      </Styled.DropdownButton>
      <Styled.DropdownMenu open={isOpen}>
        {options.map((option: Option) => (
          <Styled.DropdownMenuItem
            key={option.value}
            onClick={() => handleOptionSelect(option)}
          >
            {option.label}
          </Styled.DropdownMenuItem>
        ))}
      </Styled.DropdownMenu>
    </Styled.DropdownWrapper>
  );
};

export default Dropdown;

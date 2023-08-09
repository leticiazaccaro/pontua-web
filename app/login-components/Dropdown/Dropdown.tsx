import type { FC } from "react";
import { useState } from "react";
import * as Styled from "./Dropdown.styles";
import building from "../../assets/png/building.png";
import { TextTypes } from "../../common-components/constants/TextType.enum";
import Text from "../../common-components/Text/Text";
import colors from "~/styles/Colors";
import { DownArrow } from "../../common-components/svg/downArrow";
import { User } from "../../common-components/svg/user";
import { UpArrow } from "../../common-components/svg/upArrow";

type Props = {
  options: Option[];
} & Styled.DropdownProps;

type Option = {
  label: string;
  value: string;
  thumbnail: any;
};

const Dropdown: FC<Props> = ({ options, ...styleProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option>({
    label: "Selecione um agente",
    value: "",
    thumbnail: <User color={colors.gray500} padding="5px 8px 0 0"></User>
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
          {!selectedOption.value ? (
            <User color={colors.gray500} padding="5px 8px 0 0"></User>
          ) : (
            <Styled.ImageOption src={building}></Styled.ImageOption>
          )}
          <Text
            type={TextTypes.SPAN}
            color={!selectedOption.value ? colors.gray500 : colors.blue900}
            size="1rem"
            weight={500}
            fontFamily="Inter"
          >
            {selectedOption && selectedOption.label}
          </Text>
        </Styled.Option>
        {isOpen ? <UpArrow></UpArrow> : <DownArrow></DownArrow>}
      </Styled.DropdownButton>
      <Styled.DropdownMenu open={isOpen}>
        {options?.map((option: Option) => (
          <Styled.DropdownMenuItem
            key={option.value}
            onClick={() => handleOptionSelect(option)}
          >
            <Styled.Option>
              <Styled.ImageOption src={option.thumbnail}></Styled.ImageOption>
              {option.label}
            </Styled.Option>
          </Styled.DropdownMenuItem>
        ))}
      </Styled.DropdownMenu>
    </Styled.DropdownWrapper>
  );
};

export default Dropdown;

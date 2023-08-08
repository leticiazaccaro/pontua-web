import type { FC } from "react";
import * as Styled from "./HeroCard.styles";
import Text from "../Text/Text";
import { TextTypes } from "../constants/TextType.enum";
import colors from "~/styles/Colors";

type Props = {
  name: string;
  description: string;
  picture: any;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const HeroCard: FC<Props> = ({
  name,
  description,
  picture,
  onClick,
  ...styleProps
}) => {
  return (
    <Styled.HeroCard {...styleProps} onClick={onClick}>
      <Styled.Image src={picture} alt={name} />
      <Styled.TextContainer>
        <Text
          type={TextTypes.TITLE}
          color={colors.black}
          size="1rem"
          weight={700}
        >
          {name}
        </Text>
        <Text
          type={TextTypes.PARAGRAPH}
          color={colors.black}
          size="0.75rem"
          weight={300}
        >
          {description}
        </Text>
      </Styled.TextContainer>
    </Styled.HeroCard>
  );
};

export default HeroCard;

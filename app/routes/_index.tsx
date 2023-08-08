import type { V2_MetaFunction } from "@remix-run/node";
import BaseLayout from "~/common-components/BaseLayout/BaseLayout";
import HeroCard from "~/common-components/HeroCard/HeroCard";
import building from "../assets/png/building.png";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Pontua web" }];
};

export default function Index() {
  return (
    <BaseLayout>
      <HeroCard
        name="Wolverine"
        description="Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable "
        picture={building}
      ></HeroCard>
      <HeroCard
        name="Wolverine"
        description="Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable "
        picture={building}
      ></HeroCard>
      <HeroCard
        name="Wolverine"
        description="Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable "
        picture={building}
      ></HeroCard>
      <HeroCard
        name="Wolverine"
        description="Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable "
        picture={building}
      ></HeroCard>
      <HeroCard
        name="Wolverine"
        description="Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable "
        picture={building}
      ></HeroCard>
      <HeroCard
        name="Wolverine"
        description="Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable "
        picture={building}
      ></HeroCard>
      <HeroCard
        name="Wolverine"
        description="Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable "
        picture={building}
      ></HeroCard>
      <HeroCard
        name="Wolverine"
        description="Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable "
        picture={building}
      ></HeroCard>
      <HeroCard
        name="Wolverine"
        description="Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable "
        picture={building}
      ></HeroCard>
      <HeroCard
        name="Wolverine"
        description="Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable "
        picture={building}
      ></HeroCard>
    </BaseLayout>
  );
}

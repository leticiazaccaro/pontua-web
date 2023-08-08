import type { V2_MetaFunction } from "@remix-run/node";
import BaseLayout from "~/common-components/BaseLayout/BaseLayout";
import HeroCard from "~/common-components/HeroCard/HeroCard";
import building from "../assets/png/building.png";
import { useState } from "react";
import Pagination from "~/common-components/Pagination/Pagination";
import * as Styled from "../styles/Index.styles";
import Divider from "~/common-components/Divider/Divider";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Pontua web" }];
};

export default function Index() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages: number = 10; // Número total de páginas

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Lógica para buscar dados da página pageNumber aqui
  };

  return (
    <BaseLayout>
      <Styled.HeroContainer>
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
      </Styled.HeroContainer>
      <Divider margin="32px 0 12px 0"></Divider>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </BaseLayout>
  );
}

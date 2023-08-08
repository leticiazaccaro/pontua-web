import type { V2_MetaFunction } from "@remix-run/node";
import BaseLayout from "~/common-components/BaseLayout/BaseLayout";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Pontua web" }];
};

export default function Index() {
  return <BaseLayout></BaseLayout>;
}

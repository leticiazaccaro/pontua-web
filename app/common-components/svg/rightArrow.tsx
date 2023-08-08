import type { FC } from "react";

type Props = {
  padding?: string;
};

const RightArrow: FC<Props> = ({ padding }) => {
  return (
    <div style={{ padding: padding }}>
      <svg
        width="15"
        height="14"
        viewBox="0 0 15 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.66675 7.00008H13.3334M13.3334 7.00008L7.50008 1.16675M13.3334 7.00008L7.50008 12.8334"
          stroke="#747D94"
          stroke-width="1.67"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export { RightArrow };

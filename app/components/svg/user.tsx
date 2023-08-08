import type { FC } from "react";

type Props = {
  padding?: string;
};

const User: FC<Props> = ({ padding }) => {
  return (
    <div style={{ padding: padding }}>
      <svg
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.6668 16.5V14.8333C14.6668 13.9493 14.3156 13.1014 13.6905 12.4763C13.0654 11.8512 12.2176 11.5 11.3335 11.5H4.66683C3.78277 11.5 2.93493 11.8512 2.30981 12.4763C1.68469 13.1014 1.3335 13.9493 1.3335 14.8333V16.5M11.3335 4.83333C11.3335 6.67428 9.84111 8.16667 8.00016 8.16667C6.15921 8.16667 4.66683 6.67428 4.66683 4.83333C4.66683 2.99238 6.15921 1.5 8.00016 1.5C9.84111 1.5 11.3335 2.99238 11.3335 4.83333Z"
          stroke="#667085"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export { User };

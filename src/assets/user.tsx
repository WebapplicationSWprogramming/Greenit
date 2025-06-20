import type { IconProps } from ".";

export const User = ({ fill }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.7274 20.447C19.2724 19.171 18.2674 18.044 16.8704 17.24C15.4734 16.436 13.7614 16 12.0004 16C10.2394 16 8.52744 16.436 7.13044 17.24C5.73344 18.044 4.72844 19.171 4.27344 20.447"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

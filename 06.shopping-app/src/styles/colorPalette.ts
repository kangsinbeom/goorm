import { css } from "@emotion/react";

export const colorPalette = css`
  :root {
    --purple: #9b4aa9;
    --black: #212121;
    --grey: #9e9e9ead;
    --blue: #038ff4;
    --red: #f44336db;
    --white: #fff;
    --green: #4caf50;
  }
`;

export const colors = {
  purple: "var(--purple)",
  black: "var(--black)",
  grey: "var(--grey)",
  blue: "var(--blue)",
  red: "var(--red)",
  white: "var(--white)",
  green: "var(--green)",
};

export type Colors = keyof typeof colors;

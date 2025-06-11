const fontGenerator = (weight: number, size: number) =>
  `
        font-weight: ${weight};
        font-size: ${size}px;
    `;

/**
 *설명: theme.tsx
 *목적: 테마 설정을 위한 파일로, 색상과 폰트 스타일을 정의합니다.
 *사용법: 이 파일을 import하여 styled-components에서 사용할 수 있는 테마를 제공합니다.
 *예시: import { theme } from './style/theme';
 ${({ theme }) => `
  color: ${theme.color.grayScale600};
    font: ${theme.font.bold16};
 *주의사항: 이 파일은 styled-components와 함께 사용되며, CSS 변수로 색상을 정의합니다.

 */
export const theme = {
  color: {
    grayScale600: "var(--grayScale600)",
    grayScale500: "var(--grayScale500)",
    grayScale400: "var(--grayScale400)",
    grayScale300: "var(--grayScale300)",
    grayScale200: "var(--grayScale200)",
    grayScale100: "var(--grayScale100)",
    greenScale600: "var(--greenScale600)",
    greenScale500: "var(--greenScale500)",
    greenScale400: "var(--greenScale400)",
    greenScale300: "var(--greenScale300)",
    greenScale200: "var(--greenScale200)",
    greenScale100: "var(--greenScale100)",
    black: "var(--black)",
    white: "var(--white)",
  },
  font: {
    bold28: fontGenerator(600, 28),
    bold24: fontGenerator(600, 24),
    bold16: fontGenerator(600, 16),
    bold14: fontGenerator(600, 14),
    bold12: fontGenerator(600, 12),
    semi24: fontGenerator(500, 24),
    semi20: fontGenerator(500, 20),
    semi16: fontGenerator(500, 16),
    medium24: fontGenerator(400, 24),
    medium20: fontGenerator(400, 20),
    medium16: fontGenerator(400, 16),
    medium14: fontGenerator(400, 14),
  },
} as const;

export type fontKeyOfType = keyof typeof theme.font;

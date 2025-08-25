import { PropsWithChildren } from 'react';

export enum TypoColor {
  white = 'white',
  black = 'black',
  blue = 'blue',
}

export enum FontWeight {
  light = 'light', // 300
  normal = 'normal', // 400
  medium = 'medium', // 500
  semibold = 'semibold', // 600
  bold = 'bold', // 700
  extrabold = 'extrabold', // 800
}

export enum TypoTagHeading {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

export enum TypoTagParagraph {
  p = 'p',
  div = 'div',
}

export enum TypoTagLabel {
  span = 'span',
  label = 'label',
}

export enum FontFamily {
  genist_sans = 'geist-sans',
  genist_mono = 'geist-mono',
}

export type TypoElement =
  | HTMLSpanElement
  | HTMLHeadingElement
  | HTMLParagraphElement
  | HTMLDivElement
  | HTMLLabelElement
  | HTMLAnchorElement;

export type TextPropsBase = PropsWithChildren & {
  className?: string;
  color?: TypoColor;
  fontWeight?: FontWeight;
  font?: FontFamily;
};

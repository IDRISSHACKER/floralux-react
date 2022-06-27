/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */

export interface articleProps {
  id: Number;
  title: string;
  slug: string;
  image: string;
  galery: Array<string>;
  price: Number;
  ctg: string;
  description: string;
  qtt: Number;
}

export interface ctgProps {
  id: Number;
  title: string;
  slug: string;
  image: string;
  articleQtt: Number;
}


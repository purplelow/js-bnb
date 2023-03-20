import type { NextApiRequest, NextApiResponse } from "next";

export interface Zp1DataType {
  img: string;
  title: string;
}
export interface Zp1DataTypes extends Array<Zp1DataType> {}

export const zp1Data = [
  {
    img: "https://links.papareact.com/2io",
    title: "Outdoor getaway",
  },
  {
    img: "https://links.papareact.com/q7j",
    title: "Unique stays",
  },
  {
    img: "https://links.papareact.com/s03",
    title: "Entire homes",
  },
  {
    img: "https://links.papareact.com/8ix",
    title: "Pet allowed",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Zp1DataTypes>
) {
  res.status(200).json(zp1Data);
}

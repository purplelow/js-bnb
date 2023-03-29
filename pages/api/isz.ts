import type { NextApiRequest, NextApiResponse } from "next";

export interface IszDataType {
  img: string;
  title: string;
  location: string;
  description: string;
  star: string;
  price: string;
  total: string;
}
export interface IszDataTypes extends Array<IszDataType> {}

export const iszData = [
  {
    img: "https:/links.papareact.com/xqj",
    location: "Private room in center of London",
    title: "Stay at this spacious Edwardian House",
    description:
      "1 guest Ā. 1 bedroom Ā. 1 bed Ā. 1.5 shared bathrooms Ā. Wifi Ā. Kitchen Ā. Free parking Ā. Washing Machine",
    star: "4.73",
    price: "Ā£30 / night",
    total: "Ā£117 total",
  },
  {
    img: "https:/links.papareact.com/hz2",
    location: "Private room in center of London",
    title: "Independent luxury studio apartment",
    description:
      "2 guest Ā. 3 bedroom Ā. 1 bed Ā. 1.5 shared bathrooms Ā. Wifi Ā. Kitchen",
    star: "4.3",
    price: "Ā£40 / night",
    total: "Ā£157 total",
  },
  {
    img: "https:/links.papareact.com/uz7",
    location: "Private room in center of London",
    title: "London Studio Apartments",
    description:
      "4 guest Ā. 4 bedroom Ā. 4 bed Ā. 2 bathrooms Ā. Free parking Ā. Washing Machine",
    star: "3.8",
    price: "Ā£35 / night",
    total: "Ā£207 total",
  },
  {
    img: "https:/links.papareact.com/6as",
    location: "Private room in center of London",
    title: "30 mins of Oxford Street, Excel London",
    description:
      "1 guest Ā. 1 bedroom Ā. 1 bed Ā. 1.5 shared bathrooms Ā. Wifi Ā. Kitchen Ā. Free parking Ā. Washing Machine",
    star: "4.73",
    price: "Ā£55 / night",
    total: "Ā£320 total",
  },
  {
    img: "https:/links.papareact.com/xhc",
    location: "Private room in center of London",
    title: "Spacious Peaceful Modern Bedroom",
    description:
      "1 guest Ā. 1 bedroom Ā. 1 bed Ā. 1.5 shared bathrooms Ā. Wifi Ā. Kitchen Ā. Free parking Ā. Washing Machine",
    star: "4.73",
    price: "Ā£18 / night",
    total: "Ā£177 total",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IszDataTypes>
) {
  res.status(200).json(iszData);
}

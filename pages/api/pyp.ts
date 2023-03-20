// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string
// }

export interface PypDataType {
  img: string;
  location: string;
  distance: string;
}
export interface PypDataTypes extends Array<PypDataType> {}

const pypData = [
  {
    img: "https://links.papareact.com/5j2",
    location: "London",
    distance: "45-minute drive",
  },
  {
    img: "https://links.papareact.com/1to",
    location: "Manchester",
    distance: "4.5-hour drive",
  },
  {
    img: "https://links.papareact.com/40m",
    location: "Liverpool",
    distance: "4.5-hour drive",
  },
  {
    img: "https://links.papareact.com/msp",
    location: "York",
    distance: "4-hour drive",
  },
  {
    img: "https://links.papareact.com/2k3",
    location: "Cardiff",
    distance: "45-minute drive",
  },
  {
    img: "https://links.papareact.com/ynx",
    location: "Birkenhead",
    distance: "4.5-hour drive",
  },
  {
    img: "https://links.papareact.com/kji",
    location: "Newquay",
    distance: "6-hour drive",
  },
  {
    img: "https://links.papareact.com/41m",
    location: "Hove",
    distance: "2-hour drive",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PypDataTypes>
) {
  res.status(200).json(pypData);
}

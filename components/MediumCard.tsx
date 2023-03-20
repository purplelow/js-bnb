import Image from "next/image";
import { Zp1DataType } from "../pages/api/zp1";

export default function MediumCard({ img, title }: Zp1DataType) {
  return (
    <div className="transform cursor-pointer transition duration-300 ease-out hover:scale-105">
      <div className="relative h-80 w-80">
        <Image src={img} fill alt="" className="rounded-xl" />
      </div>
      <h3 className="mt-3 text-2xl">{title}</h3>
    </div>
  );
}

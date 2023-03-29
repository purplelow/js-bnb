import Image from "next/image";
import { PypDataType } from "../pages/api/pyp";

export default function SmallCard({ img, location, distance }: PypDataType) {
  return (
    <div className="m-2 mt-5 flex transform cursor-pointer items-center space-x-4 rounded-xl transition duration-200 ease-out hover:scale-105 hover:bg-gray-100">
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image src={img} fill alt="" className="rounded-lg" sizes="100%" />
      </div>

      {/* Right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

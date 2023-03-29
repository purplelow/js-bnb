import Image from "next/image";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";

export default function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}: any) {
  return (
    <div className="flex cursor-pointer border-b py-7 px-2 transition duration-200 ease-out first:border-t hover:opacity-80 hover:shadow-lg">
      <div className="relative h-24 w-40 flex-shrink-0 md:h-52 md:w-80">
        <Image
          src={img}
          fill
          alt=""
          sizes=""
          className="rounded-2xl object-cover"
        />
      </div>

      <div className="flex flex-grow flex-col pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <AiOutlineHeart className="h-7 cursor-pointer text-2xl" />
        </div>

        <h4 className="text-xl">{title}</h4>

        <div className="w-10 border-b pt-2" />

        <div className="flex-grow pt-2 text-sm text-gray-500">
          {description}
        </div>

        <div className="flex items-end justify-between pt-5">
          <p className="flex items-center">
            <AiFillStar className="h-5 text-red-400" />
            {star}
          </p>

          <div>
            <p className="pb-2 text-lg font-semibold lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

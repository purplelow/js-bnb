import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import InfoCard from "../components/InfoCard";
import { iszData } from "./api/isz";
import Map from "../components/Map";

export default function Search({
  searchResults,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log("🚀 ~ file: search.tsx:10 ~ searchResults:", searchResults);
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests }: any = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>

          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location}
          </h1>

          <div className="mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div>
            {searchResults.map(
              (
                { img, location, title, description, star, price, total }: any,
                key: number
              ) => (
                <InfoCard
                  key={key}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // const searchResults = await fetch(
  //   // "https://thegoodnight.daegu.go.kr/ajax/api/thegoodnight.html?mode=json&item_count=10 "
  //   // "https://links.papareact.com/isz"
  // ).then((res) => res.json());
  const searchResults = iszData;

  return {
    props: {
      searchResults,
    },
  };
};

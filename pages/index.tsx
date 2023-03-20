import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

import { pypData, PypDataType } from "./api/pyp";
import { zp1Data, Zp1DataType } from "./api/zp1";

export default function Home({
  exploreData,
  cardsData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>JS Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
          {/* Pull some data from a server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(
              ({ img, distance, location }: PypDataType, key: number) => (
                <SmallCard
                  key={key}
                  img={img}
                  location={location}
                  distance={distance}
                />
              )
            )}
          </div>
        </section>

        <section>
          <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>

          <div className="-m-3 flex space-x-3 overflow-scroll p-3 scrollbar-hide">
            {cardsData?.map(({ img, title }: Zp1DataType, key: number) => (
              <MediumCard key={key} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by JSbnb."
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "7cc931da68mshedefc5995b2efe3p135474jsndfe4780fe3f5",
  //     "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
  //   },
  // };

  // const exploreData = await fetch(
  //   "https://booking-com.p.rapidapi.com/v1/metadata/exchange-rates?currency=AED&locale=en-gb",
  //   options
  // ).then((response) => response.json());
  // // .then((response) => console.log(response))
  // // .catch((err) => console.error(err));
  // const exploreData = await fetch("http://localhost:3001/api/pyp").then((res) =>
  //   res.json()
  // );

  // const cardsData = await fetch("http://localhost:3001/api/zp1").then((res) =>
  //   res.json()
  // );

  const exploreData = pypData;
  const cardsData = zp1Data;

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
};

import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ShowsCollections from "../components/ShowsCollections";
import Slider from "../components/Slider";

const Series = ({ popularShows, topRatedShows }) => {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Series</title>
      </Head>
      <Header />
      {!session ? (
        <Hero />
      ) : (
        <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
          <Slider />
          <ShowsCollections results={popularShows} title="Popular Shows" />
          <ShowsCollections results={topRatedShows} title="Top Rated Shows" />
        </main>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const [popular_ShowsRes, top_RatedShowsRes] = await Promise.all([
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1
  `),
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1
  `),
  ]);

  const [popularShows, topRatedShows] = await Promise.all([
    popular_ShowsRes.json(),
    top_RatedShowsRes.json(),
  ]);

  return {
    props: {
      session,
      popularShows: popularShows.results,
      topRatedShows: topRatedShows.results,
    }, // will be passed to the page component as props
  };
}

export default Series;

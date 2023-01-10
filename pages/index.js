import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Brand from "../components/Brand";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MoviesCollection from "../components/MoviesCollection";
import ShowsCollections from "../components/ShowsCollections";
import Slider from "../components/Slider";

const Index = ({
  popularMovies,
  topRatedMovies,
  popularShows,
  topRatedShows,
}) => {
  const { data: session } = useSession;
  return (
    <div>
      <Head>
        <Link href="/">
          <title>MoviesInfo+</title>
        </Link>
      </Head>
      <Header />
      {session ? (
        <Hero />
      ) : (
        <section className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
          <Slider />
          <Brand />
          <MoviesCollection results={popularMovies} title="Popular Movies" />
          <MoviesCollection results={topRatedMovies} title="Top Rated Movies" />
          <ShowsCollections results={popularShows} title="Popular Shows" />
          <ShowsCollections results={topRatedShows} title="Top Rated Shows" />
        </section>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const [
    popular_MoviesRes,
    popular_ShowsRes,
    top_RatedMoviesRes,
    top_RatedShowsRes,
  ] = await Promise.all([
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1
  `),
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1
  `),
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1
  `),
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1
  `),
  ]);

  const [popularMovies, topRatedMovies, popularShows, topRatedShows] =
    await Promise.all([
      popular_MoviesRes.json(),
      popular_ShowsRes.json(),
      top_RatedMoviesRes.json(),
      top_RatedShowsRes.json(),
    ]);

  return {
    props: {
      session,
      popularMovies: popularMovies.results,
      topRatedMovies: topRatedMovies.results,
      popularShows: popularShows.results,
      topRatedShows: topRatedShows.results,
    }, // will be passed to the page component as props
  };
}

export default Index;

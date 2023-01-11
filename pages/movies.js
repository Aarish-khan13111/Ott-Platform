import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Brand from "../components/Brand";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MoviesCollection from "../components/MoviesCollection";
import Slider from "../components/Slider";

const Movies = ({ popularMovies, topRatedMovies }) => {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Movies</title>
      </Head>
      <Header />
      {!session ? (
        <Hero />
      ) : (
        <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
          <Slider />
          <MoviesCollection results={popularMovies} title="Popular Movies" />
          <MoviesCollection results={topRatedMovies} title="Top Rated Movies" />
        </main>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const [popular_MoviesRes, top_RatedMoviesRes] = await Promise.all([
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1
  `),
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1
  `),
  ]);

  const [popularMovies, topRatedMovies] = await Promise.all([
    popular_MoviesRes.json(),
    top_RatedMoviesRes.json(),
  ]);

  return {
    props: {
      session,
      popularMovies: popularMovies.results,
      topRatedMovies: topRatedMovies.results,
    }, // will be passed to the page component as props
  };
}

export default Movies;

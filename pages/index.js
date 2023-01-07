import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Brand from "../components/Brand";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MoviesCollection from "../components/MoviesCollection";
import ShowsCollections from "../components/ShowsCollections";
import Slider from "../components/Slider";

const Index = ({ session }) => {
  return (
    <div>
      <Head>
        <title>Disney+</title>
      </Head>
      <Header />
      {session ? (
        <Hero />
      ) : (
        <main>
          <div className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
            <Slider />
            <Brand />
            <MoviesCollection />
            <ShowsCollections />
          </div>
        </main>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    }, // will be passed to the page component as props
  };
}

export default Index;

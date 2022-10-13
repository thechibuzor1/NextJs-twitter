import type { GetServerSideProps, NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { toast, Toaster } from "react-hot-toast";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";
import { Tweet } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";
import { useEffect } from "react";

interface Props {
  tweets: Tweet[];
}

const Home = ({ tweets }: Props) => {
  const { data: session } = useSession();

  useEffect(() => {
    !session
      ? toast.error("Not Signed in. Click the account icon to sign in.")
      : toast.success("Logged in");
  }, []);

  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter 2.0</title>
        {/* change favicon in public to twitter logo */}
        {/*       <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Toaster />

      <main
        className="
      grid grid-cols-9"
      >
        <Sidebar />
        <Feed tweets={tweets} />
        <Widget />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();

  return {
    props: {
      tweets,
    },
  };
};

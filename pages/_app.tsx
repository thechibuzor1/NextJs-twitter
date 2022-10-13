import "../styles/globals.css";
import { useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import Splash from "../components/Splash";

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  const [splash, setSplash] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2250);
  }, []);

  return (
    <>
      {splash ? (
        <Splash />
      ) : (
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      )}
    </>
  );
}

export default MyApp;

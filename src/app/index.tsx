import { Fragment } from "react";
import Layout from "@/src/app/layout";
import Theme from "@/src/app/theme";
import Metadata from "./components/Metadata";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  console.log();
  return (
    <Fragment>
      <Metadata />
      <Theme>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </Theme>
    </Fragment>
  );
};

export default App;

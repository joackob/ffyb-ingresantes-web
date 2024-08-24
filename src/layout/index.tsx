import { ReactNode } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import NavDesktop from "./nav-bar-escritorio";
import NavMobile from "./components/NavMobile";

const index = ({ children }: { children: ReactNode }) => {
  return (
    <Layout>
      <Header>
        <NavDesktop />
        <NavMobile />
      </Header>
      <Main>{children}</Main>
      <Footer />
    </Layout>
  );
};

export default index;

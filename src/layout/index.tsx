import { ReactNode } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import NavDesktop from "./components/NavDesktop";
import NavMobile from "./components/NavMobile";
import MensajePrincipal from "../home/components/MensajePrincipal";
import Galeria from "../home/components/Galeria";

const index = ({ children }: { children: ReactNode }) => {
  return (
    <Layout>
      <Header>
        <NavDesktop />
        <NavMobile /> 
      </Header>
      <Main>
        {children}
      </Main>

      <Footer />
    </Layout>
  );
};

export default index;

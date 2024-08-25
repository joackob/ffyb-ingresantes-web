import NavLogo from "../components/NavLogo";
import NavBarContainer from "./components/NavBarContainer";
import NavMenu from "./components/NavMenu";

const index = () => {
  return (
    <>
      <NavBarContainer>
        <NavLogo />
        <NavMenu />
      </NavBarContainer>
    </>
  );
};

export default index;

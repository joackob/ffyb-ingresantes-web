import NavLogo from "../components/NavLogo";
import NavBarContainer from "./components/NavBarContainer";
import NavBar from "./components/NavBar";

const index = () => {
  return (
    <NavBarContainer>
      <NavLogo />
      <NavBar />
    </NavBarContainer>
  );
};
export default index;

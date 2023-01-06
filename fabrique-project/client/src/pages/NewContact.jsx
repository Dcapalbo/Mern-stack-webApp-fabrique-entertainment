import AboutContactForm from "../components/UI/form/aboutContactForm";
import { cleanLocalStorage } from "../utils/functions";
import Header from "../components/header/header";
import Navigation from "../components/nav/nav";

const NewFilm = () => {
  cleanLocalStorage();

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <AboutContactForm />
    </>
  );
};

export default NewFilm;
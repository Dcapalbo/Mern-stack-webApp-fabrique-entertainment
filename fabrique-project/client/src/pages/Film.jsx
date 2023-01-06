import { cleanLocalStorage } from "../utils/functions";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Navigation from "../components/nav/nav";
import DetailFilm from "../components/UI/detailFilm/detailFilm";

const Film = () => {
  cleanLocalStorage();

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <DetailFilm />
      <Footer />
    </>
  );
};

export default Film;

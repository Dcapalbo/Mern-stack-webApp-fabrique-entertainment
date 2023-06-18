import DetailFilm from "../components/UI/detailFilm/detailFilm";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Navigation from "../components/nav/nav";

const Film = () => {
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
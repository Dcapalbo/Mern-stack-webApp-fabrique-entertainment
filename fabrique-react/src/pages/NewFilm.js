import Header from "../components/header/header";
import Navigation from "../components/nav/nav";
import FilmForm from "../components/UI/form/filmForm";

const NewFilm = () => {
    return (
        <>
            <Header>
                <Navigation/>
            </Header>
            <FilmForm />
        </>
    )
}

export default NewFilm;
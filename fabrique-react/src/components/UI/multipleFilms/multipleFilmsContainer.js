import classes from './multipleFilmsContainer.module.scss';
import PuffLoader from 'react-spinners/PuffLoader';
import ApiHook from '../../../hooks/api-hook';
import MultipleFilms from './multipleFilms';

const MultipleFilmsContainer = () => {

    const { fabriqueData, loading, error } = ApiHook(
        "https://uvaf6p0qv3.execute-api.us-east-2.amazonaws.com/dev", 
        "fabriqueFilmsInformations"
    );

    if ( loading ) {
        return (
            <PuffLoader style={{ 
                    display: 'inherit',
                    position: 'relative',
                    width: '100px',
                    height: '100px',
                    margin: 'auto'
                }} color={'#cc0000'} size={100} 
            />
        )
    } else if ( error ) {
        <h1>There is some problem, please try to refresh</h1>
    } else {
        return (
                <section className={classes.wrapper__films__container}>
                    {fabriqueData.map(film => (
                            <MultipleFilms
                                description={film.description}
                                director={film.director}
                                imageUrl={film.imageUrl}
                                lenght={film.lenght}
                                title={film.title}
                                type={film.type}
                                key={film.id}
                            /> 
                        ))
                    }
                </section>
        )
    }
}

export default MultipleFilmsContainer;
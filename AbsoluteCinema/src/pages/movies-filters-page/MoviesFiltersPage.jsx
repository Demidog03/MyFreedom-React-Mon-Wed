import { Container } from 'react-bootstrap'
import MoviesFilters from '../../components/movies-filters/MoviesFilters'
import classes from './MoviesFiltersPage.module.css'
import CustomNavbar from '../../components/custom-navbar/CustomNavbar'
import MoviesByFilters from '../../components/movies-by-filters/MoviesByFilters'
import MovieSearchInput from '../../components/movie-search-input/MovieSearchInput'

function MoviesFiltersPage() {
    return (
        <>
            <CustomNavbar/>
            <Container fluid="xl">
                <div className={classes.filtersContainer}>
                    <MoviesFilters />
                    <MovieSearchInput />
                </div>
                <MoviesByFilters />
            </Container>
        </>
    )
}

export default MoviesFiltersPage

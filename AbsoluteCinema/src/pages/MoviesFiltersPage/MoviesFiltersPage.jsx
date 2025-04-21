import { Container } from 'react-bootstrap'
import MoviesFilters from '../../components/MoviesFilters/MoviesFilters'
import classes from './MoviesFiltersPage.module.css'
import CustomNavbar from '../../components/CustomNavbar/CustomNavbar'
import MoviesByFilters from '../../components/MoviesByFilters/MoviesByFilters'

function MoviesFiltersPage() {
    return (
        <>
            <CustomNavbar/>
            <Container fluid="xl">
                <MoviesFilters/>
                <MoviesByFilters/>
            </Container>
        </>
    )
}

export default MoviesFiltersPage

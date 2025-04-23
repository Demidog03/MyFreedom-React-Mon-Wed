import { Col, Container, Pagination, Row, Spinner } from 'react-bootstrap'
import classes from './MoviesByFilters.module.css'
import MovieCard from '../movie-card/MovieCard'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'

function MoviesByFilters() {
    const [params, setParams] = useSearchParams()
    const [filteredMovies, setFilteredMovies] = useState([])
    const [totalPages, setTotalPages] = useState(10)
    const [loading, setLoading] = useState(false)
    const currentPage = +params.get('page') || 1

    let items = [];
    for (let i = 1; i <= totalPages; i++) {
        items.push(
            <Pagination.Item key={i} onClick={() => changePage(i)} active={i === currentPage}>
                {i}
            </Pagination.Item>,
        );
    }

    useEffect(() => {
        if(params) {
            const filterParams = {}
            params.forEach((value, key) => {
                filterParams[key] = value
            })

            console.log(filterParams)
            fetchMoviesByFilter(filterParams)
        }
    }, [params])

    async function fetchMoviesByFilter(filters) {
        try {
            setLoading(true)
            const link = filters?.query ? 'https://api.themoviedb.org/3/search/movie' : 'https://api.themoviedb.org/3/discover/movie'
            
            const response = await axios.get(link, {
                params: {
                    ...filters,
                },
                headers: {
                    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            })

            if (response?.status === 200 && response?.data?.results) {
                setFilteredMovies(response.data.results)
                if(response?.data?.total_pages) {
                    setTotalPages(response.data.total_pages > 10 ? 10 : response.data.total_pages)
                }
            }
        }
        catch(err) {
            console.error(err)
        }
        finally {
            setLoading(false)
        }
    }

    function changePage(i) {
        params.set('page', i)
        setParams(params)
    }

    return (
        <Container fluid="xl" className={classes.cardContainer}>
                <h1 className='mb-4'>Movies</h1>
                {loading
                    ? (
                        <div className={classes.spinnerContainer}>
                            <Spinner className={classes.spinner} animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    )
                    : (
                        <Row xs={1} sm={2} md={3} lg={3} xl={4} className="g-2">
                            {filteredMovies.map((movie, idx) => (
                                <Col key={idx}>
                                    <MovieCard
                                        id={movie.id}
                                        description={movie.overview}
                                        title={movie.original_title}
                                        image={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                                        language={movie.original_language}
                                        rating={movie.vote_average}
                                        releaseDate={movie.release_date}
                                    />
                                </Col>
                            ))}
                        </Row>
                    )
                }
                {totalPages > 1 && <Pagination className='mt-4'>{items}</Pagination>}
            </Container>
    )
}

export default MoviesByFilters

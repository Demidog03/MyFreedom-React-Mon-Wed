import { useParams } from 'react-router'
import CustomNavbar from '../../components/custom-navbar/CustomNavbar'
import MovieDetails from '../../components/movie-details/MovieDetails'
import classes from './MoviePage.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function MoviePage() {
    const [movie, setMovie] = useState()
    const params = useParams()
    console.log(params)

    useEffect(() => {
        if(params?.id) {
            fetchMovieById(params.id)
        }
    }, [params])

    async function fetchMovieById(id) {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                headers: {
                    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            })
            if (response?.status === 200 && response?.data) {
                console.log(response.data)
                setMovie(response.data)
            }
        }
        catch(err) {
            console.error(err)
            console.log("Error when fetching movie")
        }
    }

    return (
        <>
            <CustomNavbar/>
            {movie && 
                <MovieDetails
                    title={movie.title}
                    description={movie.overview}
                    image={movie.poster_path}
                    releaseDate={movie.release_date}
                    averageVote={movie.vote_average}
                    homepage={movie.homepage}
                    originalLanguage={movie.original_language}
                    status={movie.status}
                    tagline={movie.tagline}
                    genres={movie.genres}
                />
            }
        </>
    )
}

export default MoviePage

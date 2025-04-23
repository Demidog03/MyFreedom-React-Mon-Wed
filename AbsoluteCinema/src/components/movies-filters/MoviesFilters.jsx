import axios from 'axios'
import { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import classes from './MoviesFilters.module.css'
import { useSearchParams } from 'react-router'

function MoviesFilters() {
    const [genres, setGenres] = useState([])
    const [params, setParams] = useSearchParams()

    useEffect(() => {
        getGenres()
    }, [])

    async function getGenres() {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list`, {
                headers: {
                    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            })

            if(response?.status === 200 && (response?.data?.genres?.length > 0)) {
                setGenres(response.data.genres)
            }
        }
        catch(err) {
            console.error(err)
        }
    }

    function selectGenre(event) {
        if(event.target.value === 'noGenre') {
            params.delete('with_genres')
        }
        else {
            params.set('with_genres', event.target.value)
        }
        params.set('page', 1) // reset page
        params.delete('query') // убираем query
        setParams(params)
    }

    return (
        <Form.Select value={params.get('with_genres') || 'noGenre'} onChange={selectGenre} className={classes.genreFilterSelect} aria-label="Select movie genres">
            <option value="noGenre">Select genre</option>
            {genres.map(genre =>
                <option key={genre.id} value={genre.id}>{genre.name}</option>
            )}
        </Form.Select>
    )
}

export default MoviesFilters

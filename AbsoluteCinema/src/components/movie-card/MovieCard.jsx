import {Button, Card, Badge, Stack} from 'react-bootstrap';
import classes from "./MovieCard.module.css";
import placholderImage from '../../assets/images/placeholder-image.png'
import { StarFillIcon, StarIcon } from '../../shared/Icons';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

function MovieCard({ language, title, description, releaseDate, rating, image, id }) {
  const [cardImage, setCardImage] = useState(placholderImage)
  const navigate = useNavigate()
  const [params] = useSearchParams()

  useEffect(() => {
    testImage(image)
  }, [image])

  function testImage(someImage) {
    const img = new Image() // <img />
    img.src = someImage // <img src="какая та ссылка" />
    img.onload = () => { // когда фотка полностью загружается
      setCardImage(someImage) // нормальная ссылка фильма
    }
    img.onerror = () => { // когда фотка не загрузилась
      setCardImage(placholderImage) // placeholder фотка
    }
  }

  function goToMoviePage() {
    navigate(`/movie/${id}?backPage=${params.get('page')}`)
  }

  return (
    <Card>
      {/* imageLoading = true -> src={placholderImage} */}
      {/* imageLoading = false -> src={image} */}
      <Card.Img className={classes.cardPoster} variant="top" src={cardImage} loading='lazy'/>
      <Card.Body>
        <Card.Text>
            <Badge className={classes.language} bg="dark" text="light">
                {language}
            </Badge>
        </Card.Text>
        <div className='mb-2'>
            <Stack direction='horizontal' gap={1}>
                <Badge pill bg="info">
                    Action
                </Badge>
                <Badge pill bg="info">
                    Comedy
                </Badge>
                <Badge pill bg="info">
                    Drama
                </Badge>
            </Stack>
        </div>
        <Card.Title className={classes.title}>{title}</Card.Title>
        <Card.Text className={classes.description}>
          {description}
        </Card.Text>
        <Card.Text>
          <b>Release date:</b> {releaseDate}
        </Card.Text>
        <div className="mb-3">
          <Stack direction='horizontal' gap={1}>
            <StarFillIcon/> <b>{rating?.toFixed(1)}</b>/10
          </Stack>
        </div>
        <Button variant="primary" onClick={goToMoviePage}>See more</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;

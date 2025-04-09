import {Button, Card, Badge, Stack} from 'react-bootstrap';
import classes from "./MovieCard.module.css";
import placholderImage from '../../assets/images/placeholder-image.png'
import { StarFillIcon, StarIcon } from '../../shared/Icons';

function MovieCard() {

  const array = [1, 2, 4, 5, 6]
  return (
    <Card>
      <Card.Img className={classes.cardPoster} variant="top" src={placholderImage} />
      <Card.Body>
        <Card.Text>
            <Badge bg="dark" text="light">
                EN
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
        <Card.Title>Movie Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>
          <b>Release date:</b> 2025-03-31
        </Card.Text>
        <div className="mb-3">
          <Stack direction='horizontal' gap={1}>
            <StarFillIcon/> 6/10
          </Stack>
        </div>
        <Button variant="primary">See more</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;

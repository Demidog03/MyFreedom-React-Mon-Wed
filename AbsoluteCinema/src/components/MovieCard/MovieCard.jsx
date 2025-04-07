import {Button, Card, Badge, Stack} from 'react-bootstrap';
import classes from "./MovieCard.module.css";
import placholderImage from '../../assets/images/placeholder-image.png'
import { StarFillIcon, StarIcon } from '../../shared/Icons';

function MovieCard() {
  return (
    <Card style={{ width: '300px' }}>
      <Card.Img className={classes.cardPoster} variant="top" src={placholderImage} />
      <Card.Body>
        <Card.Text>
            <Badge bg="dark" text="light">
                EN
            </Badge>
        </Card.Text>
        <Card.Text>
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
        </Card.Text>
        <Card.Title>Movie Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>
          <b>Release date:</b> 2025-03-31
        </Card.Text>
        <Card.Text className={classes.rating}>
          <Stack direction='horizontal' alignItems="center" gap={1}>
            <StarFillIcon/> 6/10
          </Stack>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;

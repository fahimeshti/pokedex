import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import classes from './PokemonCard.module.css'
import { Link } from 'react-router-dom';


const PokemonCard = (props) => {
    const {name , id, url} = props.pokemon

    return (
        <Link to={"/pokemon/" + id }>
            <Card className={classes.card}>
            <Card.Img variant="top" src={`${url}?text=Image cap`} />
            <Card.Body>
                <Card.Title className={classes.text_center}>{name}</Card.Title>
            </Card.Body>
            </Card>
        </Link>
    );
};

export default PokemonCard;
import React from 'react';
import { Card } from "react-bootstrap";

const Player = (props) => {
    
return (

    <Card style={{color: 'black', width: '45rem'}}>
        <Card.Body className='container'>
            <img style={{width: '30rem'}} src={props.imageUrl} alt={props.name} />
                <Card.Title> </Card.Title>
                <Card.Text style={{paddingTop: "15%"}} className='text'>
                    <span>NAME:</span> {props.name}<br />
                    <span>TEAM:</span> {props.team}<br />
                    <span>NATIONALITY:</span> {props.nationality}<br />
                    <span>JERSEY NUMBER:</span> {props.jerseyNumber}<br />
                    <span>AGE:</span> {props.age}<br />
            </Card.Text>
        </Card.Body>
    </Card>

);
}

export default Player;
import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Cards({usersList}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{usersList.name}</Card.Title>
                <Card.Text>
                {usersList.profession}
                </Card.Text>
                <Link to={`/details/${usersList.id}`}><Button variant="primary">Details</Button></Link>
                
            </Card.Body>
            </Card>
        </div>
    )
}

export default Cards

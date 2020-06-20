import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button} from 'react-bootstrap';

export default ({tool}) => {
    return(        
        <li key = {tool.id}>
            <Card style={{ width: '22rem',  height: '22rem'}}>                                            
                <Card.Header>
                    { tool.title }
                </Card.Header>
                <Card.Body>                                         
                    <Card.Text>{ tool.description }</Card.Text>
                    <Card.Text>{ tool.url }</Card.Text>
                    <Button variant="primary"><Link to={`/tooldetail/${tool.id}`}>Details</Link></Button>
                </Card.Body>
            </Card>
        </li>    
    )
}



 

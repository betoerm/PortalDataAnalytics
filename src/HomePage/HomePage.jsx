import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, CardDeck} from 'react-bootstrap';

import {  toolActions } from '../_actions';
import  ToolItem  from "../_components/ToolItem";

import { Card } from 'react-bootstrap';

class HomePage extends React.Component {    

    componentDidMount() {
        this.props.getAll();        
    } 

    render() {
        const { user, tools } = this.props;                    
        return (
            <Container>
                <h1>Hi {user.firstName}!</h1>
                <p>
                <Link to="/login">Logout</Link>
                </p>
                
                <h3>Todas as ferramentas cadastradas</h3>
                {tools.loading && <em>Loading tools...</em>}
                {tools.error && <span className="text-danger">ERROR: {tools.error}</span>}              
                {tools.items &&  
                        <CardDeck>
                        { tools.items.map((tool, index) => (
                            <div>
                                <ToolItem key={tool.id} tool = { tool }/>
                            </div>
                        ))}
                        </CardDeck>
                    }                 
         
                <p>
                <Link to="/toolcreate">Tool Create</Link>
                </p>
            </Container>
        );
    }
}

function mapState(state) {
    const { tools, authentication} = state;
    const { user } = authentication;
    return { user, tools };
}

const actionCreators = {
    getAll: toolActions.getAll
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };
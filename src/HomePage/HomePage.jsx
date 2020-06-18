import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {  toolActions } from '../_actions';


class HomePage extends React.Component {    

    componentDidMount() {
        this.props.getAll();        
    } 

    render() {
        const { user, tools } = this.props;                    
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React!!</p>
                <h3>All registered users:</h3>
                {tools.loading && <em>Loading tools...</em>}
                {tools.error && <span className="text-danger">ERROR: {tools.error}</span>}
                {tools.items &&
                    <ul>
                        {tools.items.map((tool, index) =>
                            <li key={tool.id}>
                                {tool.title}                                
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
                <p>
                    <Link to="/toolcreate">Tool Create</Link>
                </p>
            </div>
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
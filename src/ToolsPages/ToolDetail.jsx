import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { toolService } from "../_services";
import { history } from "../_helpers";



function ToolDetail(item){

    const initialState = {
        id: null,
        name: "",
        designation: "",
        location: ""
    };

    const [tool, setTool ] = useState(initialState);

    useEffect(() => {
        toolService.getById(item.match.params.id).then(
            result => { setTool(result) }
        );
    });

    const onDelete = e => {
        e.preventDefault();
        toolService.delete(tool.id);
        history.push("/");
      };
    

    return (        
        <div>             
            <h1>Details</h1>
            <span>{ tool.title }</span>        
            <p>{ tool.description }</p>
            <p>{ tool.url }</p>   
            <Link to={`/toolupdate/${tool.id}`}>Editar</Link>          
            <Link to="/" className="btn btn-link">Voltar</Link>

            <Button onClick = {onDelete}>Excluir</Button>           
                    
        </div>
    )
}



export default connect(
    undefined
  )(ToolDetail);  




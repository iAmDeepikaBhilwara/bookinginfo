import React, {Component} from 'react';

export default class MovieDetails extends Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
        <div>
           <h5>{this.props.details.name}</h5>
        </div>
        )
    }

}
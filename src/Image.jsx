import React, {Component} from 'react';

export default class Image extends Component{
    constructor(props)
    {
        super();
    }
    render()
    {
        return(
           <img src={this.props.src}></img>
        )
    }

}
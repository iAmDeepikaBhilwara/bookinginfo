import React, {Component} from 'react';

export default class TextBox extends Component{
    constructor(props)
    {
        super();
    }
    render()
    {
        return(
            <input type="text" placeholder={this.props.placeholder}></input>
        )
    }

}
import React, {Component} from 'react';

export default class Desc extends Component{
    constructor(props)
    {
        super();
    }
    render()
    {
        return(
            <label>{this.props.myDesc}</label>
        )
    }

}
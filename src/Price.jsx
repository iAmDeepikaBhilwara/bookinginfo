import React, {Component} from 'react';

export default class Price extends Component{
    constructor(props)
    {
        super();
    }
    render()
    {
        return(
            <label>{this.props.myPrice} </label>
        )
    }

}
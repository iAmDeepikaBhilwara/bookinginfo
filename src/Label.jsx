import React, {Component} from 'react';

export default class Label extends Component{
    constructor(props)
    {
        super();
    }
    render()
    {
        return(
            <label>
                {this.props.name}
            </label>
        )
    }

}

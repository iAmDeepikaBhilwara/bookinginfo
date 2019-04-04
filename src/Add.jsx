import React, {Component} from 'react';

export default class Add extends Component{
    constructor(props)
    {
        super();
    }
    render()
    {
        return(
            <button click={this.props.add}>Add</button>
        )
    }

}
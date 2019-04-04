import React, {Component} from 'react';

export default class Search extends Component{
    constructor(props)
    {
        super();
    }
    render()
    {
        return(
        <div>
            <input type="text" placeholder="Search" onChange={(e)=>{this.props.change(e.target.value)}}></input>
            <button  className="btn btn-success"onClick={()=>{this.props.search("i am clicked")}}>Search</button>
        </div>
        )
    }

}
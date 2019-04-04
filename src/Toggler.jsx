import React, {Component} from 'react';
import MovieList from './Movies/MovieList';

export default class Toggler extends Component{
    constructor(props)
    {
        super();
        this.state={
         buttonText:'Hide',
         show:true
        }
        this.toggle=this.toggle.bind(this);
        console.log('i am constructor');
    }
    toggle()
    {
        let currentState=this.state;
        currentState.show=!currentState.show;
        currentState.buttonText=currentState.show?'Hide':'Show';
        this.setState(currentState);
    }
    componentDidMount(){
        console.log('i am mounted');
    }
    componentWillUpdate(){
        console.log('component updated');
        return true;
    }
    

    render()
    {
    let content='';
    if(this.state.show){
        content=<MovieList search={''}/>
    }
    
        return(
            <div>
           <button className="btn btn-primary" onClick={this.toggle}>{this.state.buttonText}</button>
           {content}
          </div>
        )
    }

}
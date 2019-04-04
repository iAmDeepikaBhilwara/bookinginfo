import React, { Component } from 'react';
import Label from './Label';
import TextBox from './TextBox';
import Image from './Image';
import Price from './Price';
import Desc from './Desc';
import Add from './Add';
import Remove from './Remove';
import Search from './Search';
import MovieDetails from './Movies/MovieDetails';
import MovieList from './Movies/MovieList';
import Toggler from './Toggler';
import Register from './register/Register';
 
// import logo from './logo.svg';
// import './App.css';

export default class App extends Component {

  constructor(props){
    super();
    this.state=
    {
      counter:0,
      searchQuery:'',
    
    };
    this.handleSearchClick=this.handleSearchClick.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  handleSearchClick(data)
  {
    console.log(data);
    let currentState=this.state;
    currentState.counter++;
    this.setState(currentState);
  }
  handleChange(data)
  {
    console.log(data);
    let currentState=this.state;
    currentState.searchQuery=data;
    this.setState(currentState);
  }
  render()
   {
    return (
      <div>
        {/* <Label name="deepika:"></Label>
        <TextBox placeholder="Enter here"/>
      
        <Label></Label>
        <Label></Label> */}
        
        {/* <Image src="https://thumbs.mic.com/NGE1MGNjNWY0ZSMvaXk2UHBxOU44Q1RkRVRVemRfdExDdVRaUFpBPS8xNXgwOjEwMzB4NTcxLzgwMHg0NTAvZmlsdGVyczpmb3JtYXQoanBlZyk6cXVhbGl0eSg4MCkvaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL3BvbGljeW1pYy1pbWFnZXMvaW4za2diOXZwdWtncXdudHlldWZwZDB3eTkyc290bjF1cXVrNG9nMm9ud3V2dTlpbGJkcTlnZXR1YXR5aXIwaC5qcGc.jpg"></Image>
        <Price myPrice="Price:500"></Price> <br />
        <Desc myDesc="Description:The iPhone is red again — here's what they do with the money you spend on Product Red devices"></Desc><br /><br />
        <Add add="AddButton"></Add>&nbsp;
       
        
        <Remove remove="Remove"></Remove> */}
        {/* <Search search={this.handleSearchClick}
        change={this.handleChange}/>
        <label className="badge">{this.state.counter}</label>
        <MovieList search={this.state.searchQuery}></MovieList>
        <Toggler></Toggler> */}
        
    {/* <h1 className="abcd">Welcome to the world of React</h1>
    <h1>Welcome to the world of React</h1> */}
    <Register></Register>
    </div>
    )
      
  }
}



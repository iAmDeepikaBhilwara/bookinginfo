import React, {Component} from 'react';
import Textbox from './Textbox';
import Selectbox from './Selectbox';
import axios from 'axios';

export default class Register extends Component{
    constructor(props)
    {
        super(props);
        let textControl={
            type:'text',
            className:'form-control',
            value:""
        };
        let select={
            className:'form-control',
            value:" ",
        }
      this.state={
          success:'User registered successfully',
          failure:'User registration failed',
          
          register:{
              FirstName:{...textControl,
            id:'txtFirstName',
            name:'FirstName',
            label:'FirstName',
            placeholder:'Enter First Name'},
              
              LastName:{...textControl,
                id:'txtLastName',
                name:'LastName',
                label:'LastName',
                placeholder:'Enter Last Name'},
              Age:{...textControl,
                id:'txtAge',
                name:'Age',
                label:'Age',
                placeholder:'Enter Age'},
                Country:{
                    ...select,
                    id:'idCountry',
                name:'Country',
                label:'Country',
                options:[{text:'India',value:'IN'},{text:"United State of India",value:'USA'}]

                },

          }
          
      };
      this.textChange=this.textChange.bind(this);
    }
    textChange(e){
       let currentState=this.state;
       currentState.register[e.target.name].value=e.target.value;
       this.setState(currentState);
       console.log(this.state.register);
    }
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(result=>{
            console.log(result);
            let countries = result.data.map(x=>{
                return {value:x.alpha2Code,text:x.name}
            });
            let currentState = this.state;
            currentState.register.Country.options= countries;
            console.log(this.ref);
            this.refs['btnRegister'].className='btn btn-primary';
            this.setState(currentState);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render()
    {
        return(
        <div className="form">
           <Textbox control={this.state.register.FirstName} textChange={this.textChange}></Textbox>
           <Textbox control={this.state.register.LastName} textChange={this.textChange}></Textbox>
           <Textbox control={this.state.register.Age} textChange={this.textChange}></Textbox>
           <Selectbox control={this.state.register.Country} textChange={this.textChange}></Selectbox>
           <button id="btnOne" ref="btnRegister" className="btn btn-success">Register</button>
        </div>
        )
    }

}
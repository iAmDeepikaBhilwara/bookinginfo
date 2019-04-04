import React, {Component} from 'react';

export default class Product extends Component{
    constructor(props)
    {
        super();
    }
    render()
    {
        return(
            <div>
            <Image src="https://thumbs.mic.com/NGE1MGNjNWY0ZSMvaXk2UHBxOU44Q1RkRVRVemRfdExDdVRaUFpBPS8xNXgwOjEwMzB4NTcxLzgwMHg0NTAvZmlsdGVyczpmb3JtYXQoanBlZyk6cXVhbGl0eSg4MCkvaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL3BvbGljeW1pYy1pbWFnZXMvaW4za2diOXZwdWtncXdudHlldWZwZDB3eTkyc290bjF1cXVrNG9nMm9ud3V2dTlpbGJkcTlnZXR1YXR5aXIwaC5qcGc.jpg"></Image>
            <Desc myDesc="Description:The iPhone is red again — here's what they do with the money you spend on Product Red devices"></Desc><br /><br />
        </div>
        )
    }

}
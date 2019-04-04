import React, {Component} from 'react';
import MovieDetails from './MovieDetails';

export default class MovieList extends Component{
    constructor(props)
    {
        super();
        this.state=
        {
            movies:[{"id":1,"name":"Bahu bali 2","year":2017,"image_url":"https://images-na.ssl-images-amazon.com/images/I/71q6iQTY-VL._SX466_.jpg","production_house":"ABC Movies","rating":5,"type":"epic","language":"Telugu","date":"2017-09-30T18:30:00.000Z"},{"id":2,"name":"Captain Marvel","year":2019,"image_url":"https://contentserver.com.au/assets/667514_captain_marvel_v8.jpg","production_house":"Australia X","rating":4,"type":"fiction","language":"English","date":"2019-01-31T18:30:00.000Z"},{"id":3,"name":"URI","year":2019,"image_url":"https://contentserver.com.au/assets/667514_captain_marvel_v8.jpg","production_house":"XYZ movies","rating":5,"type":"action","language":"Hindi","date":"2019-03-31T18:30:00.000Z"},{"id":6,"name":"Rio","year":2015,"image_url":"https://data.whicdn.com/images/55165876/original.jpg","production_house":"SPF Movies m","rating":5,"type":"animated","language":"English","date":"2015-09-29T18:30:00.000Z"}]
    }
}

componentWillUnmount(){
    console.log('i am unmounted');
}

    render()
    {
        let listOfMoviesDisplayed='';
        if(this.props.search=='')
        {
            listOfMoviesDisplayed=this.state.movies.map((movie,index)=>{

            return <MovieDetails key={index} details={movie}/>})

        }else{

            let filtered=this.state.movies.filter((movie,index)=>{
                return movie.name.includes(this.props.search)
            });

            listOfMoviesDisplayed=filtered.map((movie,index)=>{
                return <MovieDetails key={index} details={movie}/>
            })

        }
        
        // let listOfMoviesDisplayed=this.state.movies.map((movie,index)=>{
        //     return <MovieDetails key={index}details={movie}/>
    
        return(
        <div>
           {listOfMoviesDisplayed}
        </div>
        )
    }

}
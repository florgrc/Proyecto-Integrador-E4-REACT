import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import SmallCard from './SmallCard';


/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Total Porductos',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:' Total Usuarios', 
    color:'success', 
    cuantity: 5,
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Total Categorias',
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

class ContentRowMovies extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            usersList: []
        }
    }
    componentDidMount(){
        fetch("/api/users")
        .then(response => response.json())
        .then(users => {
            this.setState({usersList: users.result})
            console.log(users)
        })
    }
    render(){

        cartProps[1].cuantity = this.state.usersList.length

        return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )}
}

export default ContentRowMovies;
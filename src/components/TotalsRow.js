import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import SmallCard from './SmallCard';


/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let productsDb = {
    title: 'Total Productos',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let usersDb = {
    title:' Total Usuarios', 
    color:'success', 
    cuantity: 5,
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let varietiesDb = {
    title:'Total Variedades',
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [productsDb, usersDb, varietiesDb];

class TotalsRow extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            productsList: [],
            usersList: [],
            varietiesList: [] 
        }
    }

    componentDidMount(){
        fetch("/api/products")
        .then(response => response.json())
        .then(products => {
            this.setState({productsList: products.products})
            console.log(products)
        })
        fetch("/api/users")
        .then(response => response.json())
        .then(users => {
            this.setState({usersList: users.result})
            console.log(users)
        })
        fetch("/api/products")
        .then(response => response.json())
        .then(varieties => {
            this.setState({varietiesList: varieties.productCountByVariety})
            console.log(varieties)
        })
  
    }

    render(){
        cartProps[0].cuantity = this.state.productsList.length
        cartProps[1].cuantity = this.state.usersList.length
        cartProps[2].cuantity = this.state.varietiesList.length
      

        return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )}
    }

        export default TotalsRow;

import React from 'react';
import LastProductCreated from './LastProductCreated';
import CategoriesInDb from './CategoriesInDb';
import { Component } from 'react/cjs/react.production.min';

let lastCreated = {
    name:'Ultimo creado',
    description:'Descripcion',
    image:'49'
}

let varietiesDb = {
    name: "Variedad"
}

let varietie = varietiesDb
let lastProps = lastCreated;


class ContentRowCenter extends Component{
    constructor(props){
        super(props)
        this.state = {
            productsList: [],
            varietiesList: []
        }
    }

    componentDidMount(){
        fetch("/api/products")
        .then(response => response.json())
        .then(products => {
            this.setState({productsList: products.products})
            this.setState({varietiesList: products.productCountByVariety})
        })
    }

    render(){
        lastProps = this.state.productsList[this.state.productsList.length-1]
        varietie = this.state.varietiesList
    
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastProductCreated {...lastProps}/>
            
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <CategoriesInDb varieties = {varietie} />
            

        </div>
    )
}
}

export default ContentRowCenter;
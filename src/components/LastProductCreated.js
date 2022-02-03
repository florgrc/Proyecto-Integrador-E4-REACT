import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import PropTypes from 'prop-types';

function LastProductCreated(props){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto creado: {props.name}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={props.image} alt=" LatestProduct "/>
                    </div>
                    <p>{props.description}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href={props.detail}>Ver detalle del producto</a>
                </div>
            </div>
        </div>
    )}


    /* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

    LastProductCreated.defaultProps = {
        name: 'No Title',
        description: 'No description',
        image: 'No image'
    }
    
    /* PROPTYPES */
    
    LastProductCreated.propTypes = {
        atritutes: PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired
        })
    }


export default LastProductCreated;

import React from "react";
import PropTypes from 'prop-types';

function CategoriesInDb({varieties}) {

  console.log(varieties);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Variedades en Base de Datos
          </h5>
        </div>
       
        <div className="card-body">
          <div className="row">
          {varieties.map(variety => (
          <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{variety.variety} ({variety.count})</div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  )};

  /* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

  
/* PROPTYPES */


export default CategoriesInDb;

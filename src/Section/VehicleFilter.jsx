import React, { useState, useEffect } from 'react';
import './VehicleFilter.scss';

import '../Data/vehiclefilter';
import Iveco from '../Data/vehiclefilter';
import vehicles from '../Data/Vehicles';
import '../Style/flexboxgrid.css'

function VehicleFilter() {
  return (
    <div className='section row center-xs '>
      <div className='title-container col-xs-12'>
        <h1 className='title'>Hello</h1>
      </div>

      <div className='category-container col-xs-12'>
      <ul className='category-container__category'>
        {vehicles?.map((vehicle) => (
          <a className='category-container__category-link'>
            <li className='category-container__category-item'>
            {vehicle.name}
            </li>
          </a>
        ))}
      </ul>
      </div>


    </div>
  )
}

export default VehicleFilter
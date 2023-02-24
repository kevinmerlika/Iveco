import React, { useState, useEffect } from 'react';
import './Vehicles.scss';
import '../Data/vehiclefilter';
import Iveco from '../Data/vehiclefilter';
import vehicles from '../Data/Vehicles';
import { wait } from '@testing-library/user-event/dist/utils';

function Vehicles() {
  //Creating a variable for active Category ( useState(0) -> giving the initial state to the first category (All Vehicles))

  const [selected, setSelected] = useState(0);

  //Here we are changing the state of Selected which will be triggered by OnClick event on the Category Item. Selected will be equal to the Category ID ( All vehicles, Long Distance, Urban etc)
  const handleSelected = (vehicle) => {
    setSelected(vehicle);
  };

  //Here we are setting the States to false on default when we open the website (Initial State)
  const [toggleState, setToggleState] = useState({
    firstToggle: false,
    secondToggle: false,
    thirdToggle: false,
  });

  //Storing the ID of each item in VehicleFilter to selectedId which will be used for the Toggle when we click item
  const [selectedId, setSelectedId] = useState(null);

  const handleToggle = (toggleId, ivecoid) => {
    
  
    setToggleState((prevState) => ({
      ...prevState,
      [toggleId]: selectedId !== ivecoid || !prevState[toggleId],
      ...(toggleId === 'firstToggle' ? {} : { firstToggle: false }), // remove this line if you want to keep the toggle open
      ...(toggleId === 'secondToggle' ? {} : { secondToggle: false }), // remove this line if you want to keep the toggle open
      ...(toggleId === 'thirdToggle' ? {} : { thirdToggle: false }), // remove this line if you want to keep the toggle open
    }));
    
    
    
    setSelectedId(ivecoid);
    
  };


  //A function to close all the toggles (The div that shows up when we click on an item truck)
  const closeToggle = () => {
    setToggleState({
      firstToggle: false,
      secondToggle: false,
      thirdToggle: false,
    });
  };


  //Creating an event where i click outside of the container to close the Toggle
  useEffect(() => {
    const handleClick = (event) => {
      const isClickedInside = event.target.closest('.section__filtercontainer');
      if (!isClickedInside) {
        closeToggle();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [closeToggle]);



  //Divided the Iveco data (vehiclefilter.js) into 3 categories (Light, Medium, Heavy) by using switch and by giving boolean variables for each category ex.( Long Distance = 1)
  // This way i used boolean values so i could set up each item into different categories
  let filteredLight;

  switch (selected) {
    case 0:
      filteredLight = Iveco.filter(
        (iveco) => iveco.allvehicles === 1 && iveco.vehicleType === 'light'
      );
      break;
    case 1:
      filteredLight = Iveco.filter(
        (iveco) => iveco.longdistance === 1 && iveco.vehicleType === 'light'
      );
      break;
    case 2:
      filteredLight = Iveco.filter(
        (iveco) => iveco.regionaldelivery === 1 && iveco.vehicleType === 'light'
      );
      break;
    case 3:
      filteredLight = Iveco.filter(
        (iveco) => iveco.urbandelivery === 1 && iveco.vehicleType === 'light'
      );
      break;
    case 4:
      filteredLight = Iveco.filter(
        (iveco) => iveco.municipality === 1 && iveco.vehicleType === 'light'
      );
      break;
    case 5:
      filteredLight = Iveco.filter(
        (iveco) => iveco.construction === 1 && iveco.vehicleType === 'light'
      );
      break;
    case 6:
      filteredLight = Iveco.filter(
        (iveco) => iveco.offroad === 1 && iveco.vehicleType === 'light'
      );
      break;
    default:
      filteredLight = Iveco;
  }

  let filteredMedium;

  switch (selected) {
    case 0:
      filteredMedium = Iveco.filter(
        (iveco) => iveco.allvehicles === 1 && iveco.vehicleType === 'medium'
      );
      break;
    case 1:
      filteredMedium = Iveco.filter(
        (iveco) => iveco.longdistance === 1 && iveco.vehicleType === 'medium'
      );
      break;
    case 2:
      filteredMedium = Iveco.filter(
        (iveco) => iveco.regionaldelivery === 1 && iveco.vehicleType === 'medium'
      );
      break;
    case 3:
      filteredMedium = Iveco.filter(
        (iveco) => iveco.urbandelivery === 1 && iveco.vehicleType === 'medium'
      );
      break;
    case 4:
      filteredMedium = Iveco.filter(
        (iveco) => iveco.municipality === 1 && iveco.vehicleType === 'medium'
      );
      break;
    case 5:
      filteredMedium = Iveco.filter(
        (iveco) => iveco.construction === 1 && iveco.vehicleType === 'medium'
      );
      break;
    case 6:
      filteredMedium = Iveco.filter(
        (iveco) => iveco.offroad === 1 && iveco.vehicleType === 'medium'
      );
      break;
    default:
      filteredMedium = Iveco;
  }

  let filteredHeavy;

  switch (selected) {
    case 0:
      filteredHeavy = Iveco.filter(
        (iveco) => iveco.allvehicles === 1 && iveco.vehicleType === 'heavy'
      );
      break;
    case 1:
      filteredHeavy = Iveco.filter(
        (iveco) => iveco.longdistance === 1 && iveco.vehicleType === 'heavy'
      );
      break;
    case 2:
      filteredHeavy = Iveco.filter(
        (iveco) => iveco.regionaldelivery === 1 && iveco.vehicleType === 'heavy'
      );
      break;
    case 3:
      filteredHeavy = Iveco.filter(
        (iveco) => iveco.urbandelivery === 1 && iveco.vehicleType === 'heavy'
      );
      break;
    case 4:
      filteredHeavy = Iveco.filter(
        (iveco) => iveco.municipality === 1 && iveco.vehicleType === 'heavy'
      );
      break;
    case 5:
      filteredHeavy = Iveco.filter(
        (iveco) => iveco.construction === 1 && iveco.vehicleType === 'heavy'
      );
      break;
    case 6:
      filteredHeavy = Iveco.filter(
        (iveco) => iveco.offroad === 1 && iveco.vehicleType === 'heavy'
      );
      break;
    default:
      filteredHeavy = Iveco;
  }

  return (
    <section className="section start-xs">
      <div className="section__title col-xs-7">
        <h2>Veicoli e missioni</h2>
      </div>
      <div className="section section__vehicle col-xs-12">
        <ul className="section section__vehicle__ul col-xs-12">
          {vehicles?.map((vehicle) => (
            <a
              key={vehicle.id}
              onClick={() => handleSelected(vehicle.id)}
              className={
                selected === vehicle.id
                  ? 'section section__vehicle__a --active'
                  : 'section section__vehicle__a'
              }
            >
              <li className="section section__vehicle__a__li" onClick={closeToggle}>
                {vehicle.name}
              </li>
            </a>
          ))}
        </ul>
        <div className="section__filtercontainer col-xs-12">
          <div className="section__filtercontainer__weight col-xs-12">
            LIGHT 3,3-7,2 t
          </div>
          <ul className="section__filtercontainer__ul col-xs-12">
            {filteredLight.map((iveco, index) => (
              <a key={index}>
                <li
                  className="section__filtercontainer__a__li"
                  onClick={() => handleToggle('firstToggle', iveco.id)}
                >
                  <img className="section__filtercontainer__a__img" src={iveco.url} />
                </li>
                <div className="section__filtercontainer__a__model">{iveco.model}</div>
              </a>
            ))}
          </ul>

          <div
            className={
              toggleState.firstToggle
                ? 'section__filtercontainer__versatility col-xs-12'
                : 'section__filtercontainer__versatility--closed'
            }
          >
            <div className="section__filtercontainer__versatility__details col-xs-6">
              <div className="section__filtercontainer__versatility__description col-xs-6">
                <h2>Il piu versatile del suo settore</h2>
              </div>
              <div className="section__filtercontainer__versatility__promotion col-xs-3">
                N Promozioni Attive
              </div>

              <ul className="section__filtercontainer__versatility__sector col-xs-12">
                {filteredLight.map((iveco) => (
                  <li key={iveco.id}>
                    {iveco.id === selectedId && (
                      <ul className="section__filtercontainer__versatility__sector col-xs-12">
                        {iveco.promotions.map((promotion) => (
                          <li
                            className="section__filtercontainer__versatility__sector-items"
                            key={promotion}
                          >
                            {promotion}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="section__filtercontainer__versatility__buttons">
                <button className="section__filtercontainer__versatility__explore">
                  Esplora &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➜
                </button>
                <button className="section__filtercontainer__versatility__configure">
                  Configura
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➜
                </button>
                <button className="section__filtercontainer__versatility__dealer">
                  Trova concessionario&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➜
                </button>
              </div>
            </div>

            <img
              className="section__filtercontainer__versatility__frame col-xs-6"
              src="https://info.iveco.nl/hubfs/daily-electric.png"
            />
          </div>

          <div className="section__filtercontainer__weight col-xs-12">
            MEDIUM 3,3-7,2 t
          </div>
          <ul className="section__filtercontainer__ul col-xs-12">
            {filteredMedium.map((iveco, index) => (
              <a key={index}>
                <li
                  className="section__filtercontainer__a__li"
                  onClick={() => handleToggle('secondToggle', iveco.id)}
                >
                  <img className="section__filtercontainer__a__img" src={iveco.url} />
                </li>
                <div className="section__filtercontainer__a__model">{iveco.model}</div>
              </a>
            ))}
          </ul>
          <div
            className={
              toggleState.secondToggle
                ? 'section__filtercontainer__versatility col-xs-12'
                : 'section__filtercontainer__versatility--closed'
            }
          >
            <div className="section__filtercontainer__versatility__details col-xs-6">
              <div className="section__filtercontainer__versatility__description col-xs-6">
                <h2>Il piu versatile del suo settore</h2>
              </div>
              <div className="section__filtercontainer__versatility__promotion col-xs-3">
                N Promozioni Attive
              </div>
              <ul className="section__filtercontainer__versatility__sector col-xs-12">
                {filteredMedium.map((iveco) => (
                  <li key={iveco.id}>
                    {iveco.id === selectedId && (
                      <ul className="section__filtercontainer__versatility__sector col-xs-12">
                        {iveco.promotions.map((promotion) => (
                          <li
                            className="section__filtercontainer__versatility__sector-items"
                            key={promotion}
                          >
                            {promotion}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="section__filtercontainer__versatility__buttons">
                <button className="section__filtercontainer__versatility__explore">
                  Esplora &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➜
                </button>
                <button className="section__filtercontainer__versatility__configure">
                  Configura
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➜
                </button>
                <button className="section__filtercontainer__versatility__dealer">
                  Trova concessionario&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➜
                </button>
              </div>
            </div>

            <img
              className="section__filtercontainer__versatility__frame col-xs-6"
              src="https://www.iveco.com/netherlands/pers/persberichten/PublishingImages/header-persbericht-meulenberg-transport.jpg"
            />
          </div>

          <div className="section__filtercontainer__weight col-xs-12">
            HEAVY 3,3-7,2 t
          </div>
          <ul className="section__filtercontainer__ul col-xs-12">
            {filteredHeavy.map((iveco, index) => (
              <a key={index}>
                <li
                  className="section__filtercontainer__a__li"
                  onClick={() =>  handleToggle('thirdToggle', iveco.id)}
                >
                  <img className="section__filtercontainer__a__img" src={iveco.url} />
                </li>
                <div className="section__filtercontainer__a__model">{iveco.model}</div>
              </a>
            ))}
          </ul>
          <div
            className={
              toggleState.thirdToggle
                ? 'section__filtercontainer__versatility col-xs-12'
                : 'section__filtercontainer__versatility--closed'
            }
          >
            <div className="section__filtercontainer__versatility__details col-xs-6">
              <div className="section__filtercontainer__versatility__description col-xs-6">
                <h2>Il piu versatile del suo settore</h2>
              </div>
              <div className="section__filtercontainer__versatility__promotion col-xs-3">
                N Promozioni Attive
              </div>
              <ul className="section__filtercontainer__versatility__sector col-xs-12">
                {filteredHeavy.map((iveco) => (
                  <li key={iveco.id}>
                    {iveco.id === selectedId && (
                      <ul className="section__filtercontainer__versatility__sector col-xs-12">
                        {iveco.promotions.map((promotion) => (
                          <li
                            className="section__filtercontainer__versatility__sector-items"
                            key={iveco.id}
                          >
                            {promotion}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="section__filtercontainer__versatility__buttons">
                <button className="section__filtercontainer__versatility__explore">
                  Esplora &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➜
                </button>
                <button className="section__filtercontainer__versatility__configure">
                  Configura
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➜
                </button>
                <button className="section__filtercontainer__versatility__dealer">
                  Trova concessionario&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➜
                </button>
              </div>
            </div>

            <img
              className="section__filtercontainer__versatility__frame col-xs-6"
              src="https://www.iveco-schouten.nl/wp-content/uploads/2021/01/Featured-afbeelding-c-van-heezik-website-iveco-schouten.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vehicles;

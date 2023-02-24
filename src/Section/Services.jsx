import React from 'react'
import './Services.scss'
import Slick from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import servicesdata from '../Data/servicesdata';

function Services() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,

  };
  return (
    <><section className='services row center-xs'>
      <div className='services__container col-xs-11'>
        <div className='services__container__title col-xs-2'>
          <h1>Services</h1>

        </div>

        <div className='services__container__container-button middle-xs col-xs-10'>
          <button className='services__container__button'>Enter Iveco Service Area &nbsp; ➜</button>
        </div>
      </div>
      <div className='services__container col-xs-11'>
        <ul className='services__container__cards col-xs-12'>
        <Slick className='slider col-xs-12' {...settings}>
        {servicesdata.map((item) => (
          <li key={item.id} className='services__container__cards-item col-xs-10'>
            <img width="100%" src={item.url} className='services__container__cards-item__image' >
            </img>
            <div className='services__container__cards-item__title col-xs-12' style={{color: item.titlecolor}}>
              {item.title}
            </div>
            <div className='services__container__cards-item__description col-xs-12' style={{color: item.descriptioncolor}}>
              {item.description}
            </div>
            <button className='services__container__cards-item__button col-xs-12' style={{color: item.buttoncolor}}>
              Scorpi i servizi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➜
            </button>
          </li>
        ))}
        </Slick>
        </ul>
        
      </div>
     
    </section>
      
  
      </>
  )
}

export default Services
import React from 'react'
import './Footer.scss'
import navbar_items from '../Data/navbarData';
import '../Style/flexboxgrid.css';
import accordion from '../Data/accordion';

function Footer() {
  return (
    <footer className='footer row center-xs'>
        <section className='footer__container col-xs-11'>
        <div className='footer__container__logo'>
        <svg
              href="/"
              width="142px"
              height="30px"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M97.528 7.161c-4.042 0-5.53 1.714-5.53 7.44 0 5.725 1.488 7.439 5.53 7.439 0 0 3.39.008 5.008.008 1.618 0 2.148.56 2.148 1.837v3.463c0 1.277-.53 1.837-2.148 1.837s-5.222-.018-5.222-.018h-.455c-4.304.003-7.457.004-10.68-2.054-3.797-2.139-5.434-6.843-5.434-12.53 0-5.685 1.637-10.39 5.434-12.529C89.402-.004 92.555-.002 96.86 0h.455s3.604.028 5.222.028c1.618 0 2.148.56 2.148 1.836v3.464c0 1.277-.53 1.837-2.148 1.837s-5.008-.004-5.008-.004Zm-74.94 17.532c.385 1.488 1.457 2.59 2.328 3.153 1.004.648 2.006.923 3.628.923h6.643c2.818 0 4.953-1.743 5.722-4.718L46.31 2.54c.043-.17.086-.383.086-.638 0-.935-.672-1.488-1.42-1.488H40.06c-.275 0-1.101.092-1.397 1.085l-4.265 18.628c-.128.637-.451.779-.793.779a.697.697 0 0 1-.666-.598L28.41 1.829c-.125-.93-.725-1.414-1.442-1.414h-9.045c-1.118 0-1.51 1.01-1.448 1.621.012.127 6.114 22.657 6.114 22.657ZM1.423 28.77h8.515c.718 0 1.421-.597 1.421-1.442V1.853c0-.757-.61-1.437-1.45-1.437H1.424C.628.416 0 1.046 0 1.834v25.52c0 1.002.88 1.415 1.422 1.415ZM62.529 8.684l.006 2.656h8.842c.84 0 1.448.67 1.448 1.408v3.426c0 .937-.735 1.485-1.409 1.485l-8.881.003v2.767c0 .893.64 1.445 1.58 1.445h10.102c.8 0 1.427.648 1.427 1.426v3.896c.033 1.022-.708 1.573-1.442 1.573H56.794c-2.596 0-5.617-2.122-5.617-5.699V6.494c0-3.92 2.85-6.079 5.636-6.079h17.209c.77 0 1.452.612 1.452 1.433l-.007 3.93c0 .937-.803 1.42-1.416 1.42l-10.101.008c-.737 0-1.42.585-1.42 1.478Zm62.953 13.575c-4.034 0-5.52-1.887-5.52-7.659 0-5.771 1.486-7.658 5.52-7.658s5.424 1.887 5.424 7.659c0 5.771-1.39 7.658-5.424 7.658Zm10.895 4.852c3.79-2.155 5.424-6.787 5.424-12.519 0-5.731-1.634-10.363-5.424-12.519C133.16 0 130.085 0 125.794.003a780.116 780.116 0 0 1-.91 0c-4.295-.003-7.442-.004-10.659 2.07-3.79 2.156-5.424 6.788-5.424 12.52 0 5.731 1.634 10.363 5.424 12.518 3.217 2.075 6.364 2.073 10.659 2.07h.91c4.29.003 7.366.005 10.583-2.07Z"
                fill="#1554FF"
              />
            </svg>
          </div>
        <div className='col-xs-12'>
        <ul className='footer__container__navbar col-xs-12'>
        {navbar_items?.map((item, index) => (
            <a className='footer__container__navbar-items' key={index} href="/" style={{ textDecoration: 'none' }}>
              <li dangerouslySetInnerHTML={{ __html: item.title }}></li>
            </a>
          ))}
        </ul>
        </div>

 <div className='footer__container__wrapper row col-xs-11'>
        {accordion?.map((item) => (
  <div key={item.id} className='footer__container__column-link col-xs-3'>
    <div className='footer__container__column-title col-xs-12'>
      {item.title}
    </div>
    <div className='footer__container__accordion'>
      <ul className='footer__container__accordion-list col-xs-11'>
        {item.content.map((content, index) => (
          <a  key={index} className='footer__container__accordion-listitem'><li>{content}</li></a>
        ))}
      </ul>
    </div>
  </div>
))}
 <div className='footer__container__column-link col-xs-3'>
    <div className='footer__container__column-title col-xs-12'>
      Follow Us
    </div>
    <div className='footer__container__accordion'>
      <ul className='footer__container__accordion-list col-xs-11'>
          <a className='footer__container__accordion-listimages'><img src='https://preview15.ivecogroup.com/italy/-/media/ScIVG/shared/Social/Logo_Facebook.svg?iar=0&rev=-1'></img></a>
          <a className='footer__container__accordion-listimages'><img src='https://preview15.ivecogroup.com/italy/-/media/ScIVG/shared/Social/Logo_Instagram.svg?iar=0&rev=-1'></img></a>
          <a className='footer__container__accordion-listimages'><img src='https://preview15.ivecogroup.com/italy/-/media/ScIVG/shared/Social/Logo_Linkedin.svg?iar=0&rev=-1'></img></a>
          <a className='footer__container__accordion-listimages'><img src='https://preview15.ivecogroup.com/italy/-/media/ScIVG/shared/Social/Logo_Youtube.svg?iar=0&rev=-1'></img></a>
          <div className='footer__container__column-title col-xs-12'>
           Contattaci
          </div>
          <div className='footer__container__accordion ' style={{paddingRight: "0"}}>
          <ul className='footer__container__accordion-list col-xs-12' style={{gap:"10px", paddingRight: "0"}}>
          <a className='footer__container__accordion-listbuttons'><button className='footer__container__accordion-button' >Contattaci &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➜</button></a>
          <a className='footer__container__accordion-listbuttons'><button className='footer__container__accordion-button'>Trova Concessionaria &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <svg fill='white' width={"15px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg> </button></a>
            </ul>
          </div>
          </ul>
          
    </div>
  </div>

</div>

<div className='footer__subcontainer col-xs-12'>
  <ul className='footer__sublinks col-xs-12'>
    <a className='footer__sublinks-item'><li> Body Builders</li></a>
    <a className='footer__sublinks-item'><li >Dealer Locator</li></a>
  </ul>
</div>
<div className='footer__subcontainer col-xs-12'>
  <ul className='footer__sublinks col-xs-12'>
    <a className='footer__sublinks-item' style={{color:"white"}}><li> © IVECO S.p.A – an Iveco Group Company – IT09709770011 – DATI Societari</li></a>
    <a className='footer__sublinks-item-second'><li >Settings and more information</li></a>
    <a className='footer__sublinks-item'><li >Privacy Notice</li></a>
    <a className='footer__sublinks-item'><li >Sitemap</li></a>
  </ul>
</div>
        </section>
    </footer>
  )
}

export default Footer
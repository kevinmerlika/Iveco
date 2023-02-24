import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactPlayer from 'react-player/lazy';

const videos = [
  {
    id: 1,
    url: 'https://player.vimeo.com/video/800275123?h=dc04d82e43',
  },
  {
    id: 2,
    url: 'https://preview15.ivecogroup.com/italy/-/media/IVECOdotcom/Content/hero/eurocargo_short.mp4?rev=-1',
  },
  {
    id: 3,
    url: 'https://preview15.ivecogroup.com/italy/-/media/IVECOdotcom/Content/hero/s_way.mp4?rev=-1',
  },
  {
    id: 4,
    url: 'https://player.vimeo.com/video/800275123?h=dc04d82e43',
  },
];

const Hero = () => {
  return (
    <section className='hero__container'>
    <style>
      {`
      .carousel .control-next.control-arrow {
        right: 0;
        opacity: 0;
        margin-right: 0;
        padding-right: 25% !important;
        cursor: url('https://preview15.ivecogroup.com/dist/ivgcorporate/static/media/CustomPointerRight.384ca5ad.svg'), auto !important;
      }
      .carousel .control-prev.control-arrow {
        left: 0;
        opacity: 0;
        margin-left: 0;
        padding-right: 25% !important;
        cursor: url('https://preview15.ivecogroup.com/dist/ivgcorporate/static/media/CustomPointerLeft.8f7dce61.svg'), auto !important;
      }
      .carousel .slide iframe {
        /* display: inline-block; */
        /* width: calc(100% - 80px); */
         margin: 0px 0px 0px !important;
        /* border: 0; */
      }
      `}
    </style>
  
   <Carousel
    className="my-carousel"
    showThumbs={true}
    
  showStatus={true}
  interval={10000}
  autoPlay={true}
  infiniteLoop={true}
  
  width="100%"
  height="100%"
  >
      {videos.map((video) => (
        <div key={video.id}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            {/* <div style={{zIndex:'1', position: 'absolute', width:'30%', height:"100%", left: '0', cursor: `url(https://preview15.ivecogroup.com/dist/ivgcorporate/static/media/CustomPointerLeft.8f7dce61.svg), auto`}}></div> */}
             <div style={{zIndex:'1', position: 'absolute', width:'60%', height:"100%", left: '20%', cursor: `url(https://preview15.ivecogroup.com/dist/ivgcorporate/static/media/CustomPointerZoom.3f20d2cb.svg), auto`}}></div>
            {/* <div style={{zIndex:'1', position: 'absolute', width:'30%', height:"100%", left: '70%', cursor: `url(https://preview15.ivecogroup.com/dist/ivgcorporate/static/media/CustomPointerRight.384ca5ad.svg), auto`}}></div> */}
            <ReactPlayer
              style={{ position: 'absolute', top: 0, left: 0 }}
              url={video.url}
              width="100%"
              height="100%"
              controls={false}
              playing={true}
              loop={true}
              config={{
                vimeo: {
                  playerOptions: { controls: false },
                },
              }}
            />
          </div>
        </div>
      ))}
    </Carousel>
    </section>
  );
};

export default Hero;
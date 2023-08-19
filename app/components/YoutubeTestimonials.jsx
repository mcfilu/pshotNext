

'use client'
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
// import { useEffect } from 'react';
// import { boobs1, boobs2, boobs3 } from '../assets';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import { useEffect, useState } from 'react';

const YoutubeTestimonials = () => {
  const [sliderValue, setSliderValue] = useState(1);
  

  useEffect(() => {
    const changeSlider = () => {
      if (window.screen.width > 1000) {
        setSliderValue(3);
      } else {
        setSliderValue(1);
      }
    };

    // Call the function initially and add an event listener for window resize
    changeSlider();
    window.addEventListener('resize', changeSlider);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', changeSlider);
    };
  }, []);
      

    const settings = {
      className: "center ",
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: sliderValue,
      // slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "0px",
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
      // variableWidth: true,
    };

  return (
  
    <div className={`flex flex-col p-[2vh]  w-full `}>
      
        <h1 className={`text-gold1 text-[5vh] font-header text-center`}>Patients Testimonials</h1>
        
      <div className=" w-[95%] mx-auto my-auto ">
        
        <Slider {...settings}>
          <div className={`md:min-h-[50vh] p-6 px-[2vw] my-[5vh]`}>
            <div className={`flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-80  p-[2vh] shadow-[0px_0px_20px_1px_#ad9444]`}>
              <div className={`flex h-[40%] w-[100%]`}>
                <LiteYouTubeEmbed
                id="ivLasdoDESo"
                title="O-Shot youtube testimonial"
                />
                {/* <iframe className="w-[100%] h-[20vh] xl:h-[28vh]" src="https://www.youtube.com/embed/ivLasdoDESo"  title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
              </div>
            
              <div className={`flex flex-col items-center w-[100%] h-[48%] mt-[2vh]`}>
                <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-[2vh] md:text-[1.3vw]`}></i>
                <p className={`text-white text-center text-[1.9vh] font-main`}>This treatment definitely helps, it helped me so much. Thank you Dr. Wakil.</p>
                <h1 className={`text-gold1 text-[3vh] text-center mt-[2vh] font-header`}>ASHLEY</h1>
                <h3 className={`text-white text-[1.9vh] text-center font-main`}>68 Years Old, UK</h3>
              </div>
            </div>
          </div>



          <div className={`md:min-h-[50vh] p-6 px-[2vw] my-[5vh]`}>
            <div className={`flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-80  p-[2vh] shadow-[0px_0px_20px_1px_#ad9444]`}>
              <div className={`flex h-[40%] w-[100%]`}>
              <LiteYouTubeEmbed
                id="690efqtUCOk"
                title="O-Shot youtube testimonial"
                />
                {/* <iframe className="w-[100%] h-[20vh] xl:h-[28vh]" src="https://www.youtube.com/embed/690efqtUCOk" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
              </div>
            
              <div className={`flex flex-col items-center w-[100%] h-[48%] mt-[2vh]`}>
                <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-[2vh] md:text-[1.3vw]`}></i>
                <p className={`text-white text-center text-[1.9vh] font-main`}>I couldn't be happier with the results. Now I feel like a real women. Fantastic!</p>
                <h1 className={`text-gold1 text-[3vh] text-center mt-[2vh] font-header`}>MARYLIN</h1>
                <h3 className={`text-white text-[1.9vh] text-center font-main`}>43 Years Old, UK</h3>
              </div>
            </div>
          </div>

          <div className={`md:min-h-[50vh] p-6 px-[2vw] my-[5vh]`}>
            <div className={`flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-80  p-[2vh] shadow-[0px_0px_20px_1px_#ad9444]`}>
              <div className={`flex h-[40%] w-[100%]`}>
              <LiteYouTubeEmbed
                id="9CJmkxKmLDE"
                title="O-Shot youtube testimonial"
                />
                {/* <iframe className="w-[100%] h-[20vh] xl:h-[28vh]" src="https://www.youtube.com/embed/9CJmkxKmLDE" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
              </div>
            
              <div className={`flex flex-col items-center w-[100%] h-[48%] mt-[2vh]`}>
                <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-[2vh] md:text-[1.3vw]`}></i>
                <p className={`text-white text-center text-[1.9vh] font-main`}>I am very pleasently suprised with the results. </p>
                <h1 className={`text-gold1 text-[3vh] text-center mt-[2vh] font-header`}>FABIA</h1>
                <h3 className={`text-white text-[1.9vh] text-center font-main`}>64 Years Old, UK</h3>
              </div>
            </div>
          </div>

          <div className={`md:min-h-[50vh] p-6 px-[2vw] my-[5vh]`}>
            <div className={`flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-80  p-[2vh] shadow-[0px_0px_20px_1px_#ad9444]`}>
              <div className={`flex h-[40%] w-[100%]`}>
              <LiteYouTubeEmbed
                id="my6HYMq2x_U"
                title="O-Shot youtube testimonial"
                />
              {/* <iframe className="w-[100%] h-[20vh] xl:h-[28vh]" src="https://www.youtube.com/embed/my6HYMq2x_U" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
              </div>
            
              <div className={`flex flex-col items-center w-[100%] h-[48%] mt-[2vh]`}>
                <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-[2vh] md:text-[1.3vw]`}></i>
                <p className={`text-white text-center text-[1.9vh] font-main`}>O-Shot is realy the only thing that worked for me!</p>
                <h1 className={`text-gold1 text-[3vh] text-center mt-[2vh] font-header`}>SAMANTHA</h1>
                <h3 className={`text-white text-[1.9vh] text-center font-main`}>40 Years Old, UK</h3>
              </div>
            </div>
          </div>
          
          
          {/* <div className="h-64   mx-[1vh]">sfasdf</div>
          <div className="h-64   mx-[1vh]">safasd</div>
          <div className="h-64   mx-[1vh]">asjdfk</div>
          <div className="h-64   mx-[1vh]">asjdfk</div> */}
        </Slider>
      </div>
  </div>
  )
}

export default YoutubeTestimonials
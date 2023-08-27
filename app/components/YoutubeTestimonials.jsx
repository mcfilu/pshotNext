

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
      
        <h2 className={`text-gold1 text-[5vh] font-header text-center`}>Patients Testimonials</h2>
        
      <div className=" w-[95%] mx-auto my-auto overflow-hidden">
      <Slider {...settings}>
          <div className={`md:min-h-[50vh] p-6 px-[2vw] my-[5vh]`}>
            <div className={`flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-80  p-[2vh] shadow-[0px_0px_20px_1px_#ad9444]`}>
              <div className={`flex h-[40%] w-[100%]`}>
                {/* <iframe className="w-[100%] h-[20vh] xl:h-[28vh]" src="https://www.youtube.com/embed/zs9UUeMxCdA" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                <LiteYouTubeEmbed
                id="zs9UUeMxCdA"
                title="O-Shot youtube testimonial"
                />
              </div>
            
              <div className={`flex flex-col items-center w-[100%] h-[48%] mt-[2vh]`}>
                <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-[2vh] md:text-[1.3vw]`}></i>
                <p className={`text-white text-center text-[1.9vh] font-main`}>Dr. Wakil revolutionised my sexual life and relationship with my wife in just 8 weeks.</p>
                <h2 className={`text-gold1 text-[3vh] text-center mt-[2vh] font-header`}>HAROLD</h2>
                <h3 className={`text-white text-[1.9vh] text-center font-main`}>67 Years Old, UK</h3>
              </div>
            </div>
          </div>



          <div className={`md:min-h-[50vh] p-6 px-[2vw] my-[5vh]`}>
            <div className={`flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-80  p-[2vh] shadow-[0px_0px_20px_1px_#ad9444]`}>
              <div className={`flex h-[40%] w-[100%]`}>
                {/* <iframe className="w-[100%] h-[20vh] xl:h-[28vh]" src="https://www.youtube.com/embed/DQu0ktFcbbw" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                <LiteYouTubeEmbed
                id="DQu0ktFcbbw"
                title="O-Shot youtube testimonial"
                />
              </div>
            
              <div className={`flex flex-col items-center w-[100%] h-[48%] mt-[2vh]`}>
                <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-[2vh] md:text-[2vh] md:text-[1.3vw]`}></i>
                <p className={`text-white text-center text-[1.9vh] font-main`}>The O Concept™ is the best solution out there</p>
                <h2 className={`text-gold1 text-[3vh] text-center mt-[2vh] font-header`}>DAVE</h2>
                <h3 className={`text-white text-[1.9vh] text-center font-main`}>29 Years Old, UK</h3>
              </div>
            </div>
          </div>

          <div className={`md:min-h-[50vh] p-6 px-[2vw] my-[5vh]`}>
            <div className={`flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-80  p-[2vh] shadow-[0px_0px_20px_1px_#ad9444]`}>
              <div className={`flex h-[40%] w-[100%]`}>
                {/* <iframe className="w-[100%] h-[20vh] xl:h-[28vh]" src="https://www.youtube.com/embed/RJn1iAiFCpI" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                <LiteYouTubeEmbed
                id="RJn1iAiFCpI"
                title="O-Shot youtube testimonial"
                />
              </div>
            
              <div className={`flex flex-col items-center w-[100%] h-[48%] mt-[2vh]`}>
                <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-[2vh] md:text-[1.3vw]`}></i>
                <p className={`text-white text-center text-[1.9vh] font-main`}>Wow, what can I say? Fantastic! </p>
                <h2 className={`text-gold1 text-[3vh] text-center mt-[2vh] font-header`}>KARIM</h2>
                <h3 className={`text-white text-[1.9vh] text-center font-main`}>62 Years Old, UK</h3>
              </div>
            </div>
          </div>

          <div className={`md:min-h-[50vh] p-6 px-[2vw] my-[5vh]`}>
            <div className={`flex flex-col w-full h-full items-center justify-center bg-black bg-opacity-80  p-[2vh] shadow-[0px_0px_20px_1px_#ad9444]`}>
              <div className={`flex h-[40%] w-[100%]`}>
              {/* <iframe className="w-[100%] h-[20vh] xl:h-[28vh]" src="https://www.youtube.com/embed/3rR17uynpWk" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
              <LiteYouTubeEmbed
                id="3rR17uynpWk"
                title="O-Shot youtube testimonial"
                />
              </div>
            
              <div className={`flex flex-col items-center w-[100%] h-[48%] mt-[2vh]`}>
                <i className={`fa-solid fa-quote-right mr-[0.9vw] text-gold1 text-[2vh] md:text-[1.3vw]`}></i>
                <p className={`text-white text-center text-[1.9vh] font-main`}>My sexual life is so much better</p>
                <h2 className={`text-gold1 text-[3vh] text-center mt-[2vh] font-header`}>MIKE</h2>
                <h3 className={`text-white text-[1.9vh] text-center font-main`}>57 Years Old, UK</h3>
              </div>
            </div>
          </div>
          
          
          
        </Slider>
        
      </div>
  </div>
  )
}

export default YoutubeTestimonials
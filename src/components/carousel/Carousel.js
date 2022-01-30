import React from 'react'
import "./Carousel.css"
import index_img1 from '../../images/portfolio/index_img1.png'
import index_img2 from '../../images/portfolio/index_img2.png'
import index_img3 from '../../images/portfolio/index_img3.png'
import index_img4 from '../../images/portfolio/index_img4.png'
import index_img5 from '../../images/portfolio/index_img5.png'
import index_img7 from '../../images/portfolio/index_img7.png'
import Card from './Card'
import Aos from "aos"
import "aos/dist/aos.css"

const Carousel = () => {
    React.useEffect(()=>{
        Aos.init({duration:500})
          },[])
    return (
        <div class = "row padding">

        <div class="col-xs-12 col-sm-6 col-md-5 col-lg-4 col-xl-4" data-aos="fade-right" >
        <Card img={index_img1} header="AHUs" content="Air Handling Units"  />
        </div>


        <div class="col-xs-12 col-sm-6 col-md-5 col-lg-4 col-xl-4" data-aos="zoom-out">
        <Card img={index_img7} header="Purification" content="Water Purification plant"  />
        </div>

        <div class="col-xs-12 col-sm-6 col-md-5 col-lg-4 col-xl-4" data-aos="fade-left">
        <Card img={index_img4} header="R & D" content="R and D"  />
        </div>

        <div class="col-xs-12 col-sm-6 col-md-5 col-lg-4 col-xl-4" data-aos="fade-right">
        <Card img={index_img3} header="QA / QC" content="QA / QC"  />
        </div>


        <div class="col-xs-12 col-sm-6 col-md-5 col-lg-4 col-xl-4" data-aos="zoom-out">
        <Card img={index_img2} header="Clean Room" content="Clean Room"  />
        </div>



        <div class="col-xs-12 col-sm-6 col-md-5 col-lg-4 col-xl-4" data-aos="fade-left">
        <Card img={index_img5} header="Admin" content="Admin"  />
        </div>
       
        
        </div>
    );
}

export default Carousel;
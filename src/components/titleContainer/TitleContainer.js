import React from 'react'
import "./TitleContainer.css"
import Products from '../ourproducts/Products'
import RDCrams from '../RandDcrams/RDCrams'
import Carousel from '../carousel/Carousel'
import Aos from "aos"
import "aos/dist/aos.css"
import InProgress from '../upcomingapiproducts/InProgress'
const TitleContainer = () => {
    React.useEffect(()=>{
        Aos.init({duration:500})
          },[])
    return (
        <div class="container-fluid con">
            <div class="row padding">
            <div class="col-8">
            <p class="display-6">Welcome to</p>
            <h1 class="titleheading">Tooba Pharmaceuticals Private Limited</h1>
            </div>

            <div class="col-4 seconddiv">
        
            </div>
        </div>
        <blockquote class="quote"><i class="fas fa-quote-left"></i>  In The Business of Human Wellbeing <i class="fas fa-quote-right"></i></blockquote>
        <p class="para1" data-aos="fade-up">

        Tooba Pharmaceuticals Private Limited (TPPL) is a GMP Certified manufacturer of API Bulk Drugs and Intermediates, with state-of-the-art manufacturing facility.

TPPL retains its strong roots in R&D to explore and develop generics using newer technologies in an environment­friendly manner.

TPPL, headquartered in Aurangabad, Maharashtra is a major urban center and an industrial hub, home to several pharmaceutical industries. Well connected with major metropolitan areas within the state and beyond, there's a ready access to markets and raw materials.

The manufacturing plant is situated in the Paithan Industrial area, erected as per the GMP norms laid down by FDA.

        </p>
    <div class="strengthdiv">
       
                <h2 class="heading2" data-aos="fade-up" >
                STRENGTH
                </h2>
                <p class="para2" data-aos="fade-up">
            <b> TPPL is in the process of filing four DMFs in regulated market. Two molecules will be filed by December 2020 and remaining two molecules shall be filed by March 2021.
            </b>
            <br />
            <b>
            TPPL has developed patentable technologies. Recently we have filed patent for Glycopyrronium Bromide.
            </b>
            <br />
            TPPL has gathered around technocrats with cumulative research experience for almost 90 years and have acclaimed more than 200 patents to their credit. So it is fully poised to meet challenges in developing non- infringing routes for various molecules. As far as regulatory experience is concerned this technical team in past was responsible for filing dozens of DMFs for regulated markets meeting stringent quality requirements.

            Excellent QA/QC facilities with all required instruments.
            <br />
            <b data-aos="fade-left">
            TPPL believes in developing the product from own methods by using mostly Indian Raw Materials.
            </b>
            <br />
            <b data-aos="zoom-in">
            TPPL endorses the Government of India's vision and mission of developing the products with indigenous sources-'Be vocal about local'.
            </b>
                </p>
    </div>
<Products />
<InProgress />
<RDCrams />
<h2 class="heading2" data-aos="zoom-in" style={{marginTop:"15%"}}>OUR PORTFOLIO</h2>
<Carousel />
<div style={{height:300, width:300}} />
        </div>
    );
}

export default TitleContainer;
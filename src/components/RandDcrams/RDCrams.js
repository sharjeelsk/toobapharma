import React from 'react'
import "./RDCrams.css"
import RDImage from '../../images/flask.png'
import Aos from "aos"
import "aos/dist/aos.css"

const RDCrams = () => {
    React.useEffect(()=>{
        Aos.init({duration:500})
          },[])
    return (
        <div class="row padding">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h2 class="h2" data-aos="fade-right">R & D Crams</h2>
            <p data-aos="fade-right">
            TPPL can perform discovery and process chemistry through services that range from synthetic root identification and optimization to synthesis of niche building blocks, scaffolds and intermediate compounds for generating analogs.
            </p>
            <button data-aos="fade-right" class="btn btn-outline-success readmore"><span style={{marginRight:10}}>Read More</span><i class="fas fa-angle-double-right"></i></button>
            </div>

            <div data-aos="fade-left" class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img class="flaskimage" src={RDImage} alt="rdimage" />
            </div>

        </div>
    );
}

export default RDCrams;
import React from 'react'
import "./InProgress.css"
import mol1 from '../../images/bonds/bond (1).png'
import mol2 from '../../images/bonds/bond.png'
import mol3 from '../../images/bonds/hormones.png'
import mol4 from '../../images/molecule (4).png'
import Aos from "aos"
import "aos/dist/aos.css"
const Products = () => {
        React.useEffect(()=>{
            Aos.init({duration:500})
              },[])
    return (
        <div class="root" data-aos="flip-up">
            <h3 data-aos="fade-down">IN PROGRESS API PRODUCTS</h3>
            <div class="row text-center padding parent" >
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div class="ui middle aligned animated list" >
                        <a style={{margin:"5% 0"}} class="item" href="https://drugs.com/trazodone" target="_blank" rel="noreferrer">
                        <img class="ui avatar image" alt="Trazadone" src={mol1} ></img>
                        <div class="content">
                         <div class="header" data-aos="fade-right">Cinacalcet Hydrochloride </div>
                        </div>
                        </a>
                        <a style={{margin:"5% 0"}} class="item" href="https://en.wikipedia.org/wiki/Mexiletine" target="_blank" rel="noreferrer">
                            <img class="ui avatar image" alt="Mexiletine" src={mol2}></img>
                            <div class="content">
                                <div class="header" data-aos="fade-right">Etoricoxib</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div class="ui middle aligned animated list">
                <a style={{margin:"5% 0"}} class="item" href="https://en.wikipedia.org/wiki/Tamsulosin" target="_blank" rel="noreferrer">
                        <img class="ui avatar image" alt="Tamsulosin" src={mol3}></img>
                        <div class="content">
                         <div class="header" data-aos="fade-left">Nitrofurantoin</div>
                        </div>
                        </a>
                        <a style={{margin:"5% 0"}} class="item" href="https://en.wikipedia.org/wiki/Glycopyrrolate" target="_blank" rel="noreferrer">
                            <img class="ui avatar image" alt="Glycopyrrolate" src={mol4}></img>
                            <div class="content">
                                <div class="header" data-aos="fade-left">Modafinil</div>
                            </div>
                        </a>
                    </div>
                </div>

               
            </div>

        </div>
    );
}

export default Products;
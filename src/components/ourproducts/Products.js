import React from 'react'
import "./Products.css"
import pills from '../../images/bonds/molecular (1).png'
import mexiletine from '../../images/bonds/molecule (6).png'
import glycopyrrolate from '../../images/bonds/molecular.png'
import aripiprazole from '../../images/bonds/molecule (7).png'
import tolterodine from '../../images/bonds/physics (1).png'
import cyclizine from '../../images/bonds/molecule (5).png'
import trazadone from '../../images/formula.png'
import Aos from "aos"
import "aos/dist/aos.css"
const Products = () => {
        React.useEffect(()=>{
            Aos.init({duration:500})
              },[])
    return (
        <div class="root" data-aos="flip-up">
            <h3 data-aos="fade-down">AVAILABLE API PRODUCTS</h3>
            <div class="row text-center padding parent" >
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div class="ui middle aligned animated list" >
                        <a style={{margin:"5% 0"}} class="item" href="https://drugs.com/trazodone" target="_blank" rel="noreferrer">
                        <img class="ui avatar image" alt="Trazadone" src={trazadone} ></img>
                        <div class="content">
                         <div class="header" data-aos="fade-right">Trazadone</div>
                        </div>
                        </a>
                        <a style={{margin:"5% 0"}} class="item" href="https://en.wikipedia.org/wiki/Mexiletine" target="_blank" rel="noreferrer">
                            <img class="ui avatar image" alt="Mexiletine" src={mexiletine}></img>
                            <div class="content">
                                <div class="header" data-aos="fade-right">Mexiletine</div>
                            </div>
                        </a>
                        <a style={{margin:"5% 0"}} class="item" href="https://en.wikipedia.org/wiki/Cyclizine" target="_blank" rel="noreferrer">
                            <img class="ui avatar image" alt="Cyclizine" src={cyclizine}></img>
                            <div class="content">
                                <div class="header" data-aos="fade-right">Cyclizine</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div class="ui middle aligned animated list">
                <a style={{margin:"5% 2% 5% 0"}} class="item" href="https://en.wikipedia.org/wiki/Tamsulosin" target="_blank" rel="noreferrer">
                        <img class="ui avatar image" alt="Tamsulosin" src={pills}></img>
                        <div class="content">
                         <div class="header" data-aos="fade-left">Tamsulosin</div>
                        </div>
                        </a>
                        <a style={{margin:"5% 0 5% 6%"}} class="item" href="https://en.wikipedia.org/wiki/Glycopyrrolate" target="_blank" rel="noreferrer" >
                            <img class="ui avatar image" alt="Glycopyrrolate" src={glycopyrrolate}></img>
                            <div class="content">
                                <div class="header" data-aos="fade-left">Glycopyrrolate</div>
                            </div>
                        </a>
                        <a style={{margin:"5% 0"}} class="item" href="https://en.wikipedia.org/wiki/Aripiprazole" target="_blank" rel="noreferrer">
                            <img class="ui avatar image" alt="Aripiprazole" src={aripiprazole}></img>
                            <div class="content">
                                <div class="header" data-aos="fade-left">Aripiprazole</div>
                            </div>
                        </a>
                    </div>
                </div>

               
            </div>
            <div class="row text-center padding parent2">
            <div class="col-12" style={{textAlign:"center"}}>
                    <div class="ui middle aligned animated list">
                    <a class="item" href="https://en.wikipedia.org/wiki/Tolterodine" target="_blank" rel="noreferrer">
                        <img class="ui avatar image" alt="Tolterodine" src={tolterodine}></img>
                        <div class="content">
                         <div class="header" data-aos="fade-up">Tolterodine</div>
                        </div>
                        </a>
                        
                    </div>
                </div>
                </div>

        </div>
    );
}

export default Products;
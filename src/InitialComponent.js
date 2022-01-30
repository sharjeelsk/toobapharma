import React from 'react'
import Header from './components/header/Header'
import TitleContainer from './components/titleContainer/TitleContainer'
import Footer from './components/footer/Footer'
import "./Initial.css"
import Flask from './images/flask (1).png'
import Molecule from './images/chemistry (2).png'
import Molecule1 from './images/biological.png'
import Molecule2 from './images/molecule (3).png'
import Fist from './images/fist.png'
import Pills from './images/chemistry.png'
import Toobapharmacropped from './images/toobapharmacropped.png'
const InitialComponent = () => {
    return (
        <section>
      <Header id={1} />
        <img src={Flask} alt="flask" class="flask"/>
        <img src={Flask} alt="flask" class="flask2"/>
        <img src={Molecule} alt="lab" class="lab"/>
        <img src={Molecule1} alt="lab" class="mol"/>
        <img src={Molecule2} alt="lab" class="mol2"/>
        <img src={Fist} alt="fist" class="fist"/>
        <img src={Pills} alt="pills" class="pills"/>
        <img src={Fist} alt="fist" class="fist1"/>
        <img src={Pills} alt="pills" class="pills1"/>
        <img src={Toobapharmacropped} alt="toobapharma" class="tooba" />
    <div class="container-fluid">
      <TitleContainer />
    </div>
    <Footer />
    </section>
    );
}

export default InitialComponent;
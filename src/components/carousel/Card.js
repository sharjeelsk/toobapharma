import React from 'react'
import "./Carousel.css"
const Card = ({img,header,content}) => {
    return (
    //     < div class="ui card">
    //     <div class="image">
    //       <img src={img}/>
    //     </div>
    //     <div class="content">
    //       <a class="header">{header}</a>
    //       <div class="meta">
    //         <span class="date">{content}</span>
    //       </div>
    //     </div>
    //   </div>

            <div class="mycard" >
            <img src={img} alt="img" class="myimages" />
            <h4 class="heading">{header}</h4>
            <p class="para">{content}</p>
            </div>
    
    );
}

export default Card;
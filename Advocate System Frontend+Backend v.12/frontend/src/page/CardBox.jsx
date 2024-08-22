import React from 'react'
import "../page/HomePgContent.css";
function CardBox({img,title,para}) {
  return (
    
      <>
        <div className="CardContainer">
            <div className="cardout">
              <div className="cardinfoo">
               <img src={img} alt="" className='img1' />
                <h4>{title}</h4>
                <p>{para}</p>
              </div>
             
            </div>
        </div>
      </>
  
  )
}

export default CardBox

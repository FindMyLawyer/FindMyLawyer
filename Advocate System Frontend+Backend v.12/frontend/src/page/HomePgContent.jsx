import React from "react";
import "../page/HomePgContent.css";
import Ladki from "../images/Girl.png"
import CardBox from "./CardBox";
import Banner from '../images/civil.png'
import Banner2 from '../images/divorce.png'
import Banner3 from '../images/property.png'
import Banner4 from '../images/criminal.png'
import Banner5 from '../images/banking.png'
import Banner6 from '../images/chequebounce.png'
import Banner7 from '../images/consumer.png'
import Banner8 from '../images/trademark.png'
import Banner9 from '../images/consumer.png'




const HomePgContent = () => {
  return (
    <>
  
       <div className="landingcontainer">
        
          <div className="landpara">
            <h1 className="h11">A law firm with a passion for success.</h1>

            <h4 className="h44">Most Reputed Lawyers & Attorneys for you</h4>

            <p className="pp">Law and justice are very important parts of any society. Be it developed or developing, every country has a need for justice, fairness and rule of law. A large part of that institution is Lawyers who help provide justice to the citizens.</p>

            <h4  className="h44">We will for your justice and rights</h4>

            <p className="pp">Justice means leaving people alone, to others it means being morally correct. Even more people think justice is derived from the agreement of most people, and others think justice is fair distributions of resources</p>

            <button className="Button Btn ">Get started Now!
            </button>
          </div>
          <div className="landimg">
            <img className="girl" src={Ladki} alt="" />
          </div>
       </div>

       <div className="Title">
         <div className="titleInfo">
          <h1> Seach for best lawyers in your
          Proximity.</h1>
         </div>
         <div className="Allcard">
         

          <CardBox img={Banner} title={' Civil Law'} para={'Most common field of law that deals with disputes among individuals.'}/>
       
          <CardBox img={Banner2} title={' Divorce Law'} para={'Dissolution of a legally recognized marriage that varies from country to country.'}/>
          <CardBox img={Banner3} title={' Property Law'} para={'Deals with Moveable-immoveable property ownership/possession & sale..'}/>
          <CardBox img={Banner4} title={' Criminal Law'} para={'State enforced rules and regulation controlling the conduct of its citizens.'}/>
          
          <CardBox img={Banner5} title={' Banking Law'} para={'Administer over the banking business, with the aim to regulate transactions.'}/>
          <CardBox img={Banner6} title={' Cheque Bounce Law'} para={'Dishonour of cheques is quite common, it is covered under The Negotiable Instruments Act.'}/>
          <CardBox img={Banner7} title={' Trademark And Copyright Law'} para={'Serve the purpose to protect the rights of usage of an original idea, work, product, or brand.'}/>
          <CardBox img={Banner8} title={' Consumer Court Law'} para={'Guidelines and rules are made for the purpose of safeguarding the rights of the consumer.'}/>
          <CardBox img={Banner9} title={' Copyright Law'} para={'Serve the purpose to protect the rights of usage of an original idea, work, product, or brand.'}/>

         </div>
       </div>
     

    </>
  );
};

export default HomePgContent;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImgNomura from '../../../../images/nomura.jpg';

export default function BNomura() {
  const navigate = useNavigate();
  
  const nomuraDetails = () => {
    navigate("/nomura")
  }
  return (
    <div className="row mt-top employer-brief">
      <div className="col xl3 l4 m6 s12">
        <p className="teal year_exp white-text">
          <strong>Sep 2017 - Till Date (5.6 yrs)</strong>
        </p>
        <br/>
        <img className='activator' src={ImgNomura} alt="Nomura Services Pvt. Ltd." width="200" height="100"/>
      </div>
      <div className="col xl9 l8 m6 s12">
        <blockquote className="no-pad">
          <h6 className="no-pad mt-bottom">
            <strong>Executive Director</strong>
          </h6>
          <div>
            <p align="justify">
              Own digitalization strategy for leveraging emerging technologies. Responsible for identifying opportunities to leverage emerging technologies through internal & external relationships, and to evaluate to acquire, develop, productize & adopt new age AI/ML, cognitive and conversational platforms into customer journeys & business processes to improve customer experience, enable business and improve operational efficiency.
            </p>
          </div>
          <div align="right" class="employer-detail">
            <i class="far fa-caret-square-right fa-2x fa-fw" onClick={ nomuraDetails }></i>
          </div>
        </blockquote>
      </div>
    </div>
  );
}

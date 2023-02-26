import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImgEncore from '../../../../images/encore.jpg';


export default function BEncore() {
  const navigate = useNavigate();
  
  const encoreDetails = () => {
    navigate("/encore")
  }
  return (
    <div className="row mt-top">
    <div className="col xl3 l4 m6 s12"> 
      <p className="teal year_exp white-text">
          <strong>Jan 2016 - Jul 2017 (1.7 yrs)</strong>
      </p>
      <br/>
      <img className='activator' src={ImgEncore} alt="Nomura Services Pvt. Ltd." width="205" height="110"/>
    </div>
    <div className="col xl9 l8 m6 s12">
      <blockquote className="no-pad">
        <h6 className="no-pad mt-bottom">
          <strong>Director IT</strong>
        </h6>
        <p align="justify">Global IT Executive accountable for on premises & AWS cloud based product engineering, technical architecture & operations of Encore Capital Group's debt restructuring & collections platforms. Responsible for product development & managing complex projects with significant bottom line impact viz. product infrastructure as code, new product initiatives, enhancements, integrations and enabling better customer service.</p>
        <div align="right" class="employer-detail">
          <i class="far fa-caret-square-right fa-2x fa-fw" onClick={ encoreDetails }></i>
        </div>
      </blockquote>
    </div>
  </div>
  )
}

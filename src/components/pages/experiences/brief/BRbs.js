import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImgRBS from '../../../../images/rbs.jpg';

export default function BRbs() {
  const navigate = useNavigate();
  
  const rbsDetails = () => {
    navigate("/rbs")
  }
  return (
    <div className="row mt-top">
    <div className="col xl3 l4 m6 s12"> 
      <p className="teal year_exp white-text">
          <strong>Sep 2007 - Jan 2016 (8.5 yrs)</strong>
      </p>             
      <br/><br/><br/>
      <img className='activator' src={ImgRBS} alt="Royal Bank of Scotland" width="205" height="110"/>            </div>
    <div className="col xl9 l8 m6 s12">
      <blockquote className="no-pad">
        <h6 className="no-pad mt-bottom">
          <strong>Vice President (Fixed Income Technology)</strong>
        </h6>
        <p align="justify">Fast-tracked through roles demanding technical & management capabilities and promoted from enterprise engineering role to include management role and further to oversee global delivery of Interest Rate Derivatives platform and program management for several Dodd-Frank regulatory & market initiatives. Designed distributed, complex, and globally deployed technology systems for banking & finance, trade lifecycle & pricing.</p>
        <p align="justify">As enterprise engineer & architect, crafted and executed a comprehensive SoA strategy & re-architected monolithic Interest Rate Derivatives trading & pricing platform into several standalone independently-releasable business services e.g. Clearing, Transaction Reporting, Brokerage, Credit Check, Market Data Independence. Created reference architectures & exemplars adopted by future enhancements resulting in quick time to market.</p>
        <div align="right" >
          <i class="far fa-caret-square-right fa-2x fa-fw" onClick={ rbsDetails }></i>
        </div>
      </blockquote>
    </div>
  </div>
  );
}

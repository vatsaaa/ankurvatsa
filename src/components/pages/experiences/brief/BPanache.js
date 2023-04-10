import React from 'react';
import ImgPanache from '../../../../images/iSmart.jpg';

export default function BPanache() {
  return (
    <div className="row mt-top">
    <div className="col xl3 l4 m6 s12"> 
    <div align='center'>
      <p className="teal year_exp white-text">
          <strong>Mar'06 - Sep'07 (1.7 yrs)</strong>
      </p>             
      <br/>
      <img className='activator' src={ImgPanache} alt="iSmart Panache" width="205" height="110"/>
    </div>
    </div>
    <div className="col xl9 l8 m6 s12">
      <blockquote className="no-pad">
        <h6 className="no-pad mt-bottom">
          <strong>Technical Lead</strong>
        </h6>
        <p align="justify">Ankur was accountable for strategic and tactical planning for product development, technology evaluation, and operations. He designed and developed core frameworks for writing multi-threaded RPC Servers and ensuring product high-availability and was responsible for managing technology standardization, obsolesence and change management including tracking, evaluating and deploying new technologies and processes to improve overall productivity of the organization by removing redundancies & inefficiencies.</p>
      </blockquote>
    </div>
  </div>
  );
}

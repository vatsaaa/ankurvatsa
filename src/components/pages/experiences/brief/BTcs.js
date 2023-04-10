import React from 'react';
import ImgTcs from '../../../../images/tcs.jpg';

export default function BTcs() {
  return (
  <div className="row mt-top">
    <div className="col xl3 l4 m6 s12">
      <div align='center'>
        <p className="teal year_exp white-text">
          <strong>Feb'01 - Mar'04 (3.2 yrs)</strong>
        </p>             
        <br/><br/>
        <img className='activator' src={ImgTcs} alt="Tata Consultancy Services" width="205" height="110"/>
      </div>
    </div>
    <div className="col xl9 l8 m6 s12">
      <blockquote className="no-pad">
        <h6 className="no-pad mt-bottom">
          <strong>Systems Engineer</strong>
        </h6>
        <p align="justify">Ankur was picked from campus as an individual contributor to work in BFSI domain on Network Custodial and Clearing Services product. He worked on Corporate Actions and developed several OLTP services & batches for SWIFT based communication engine, safe custody account entitlement calculations with tax eligibility & reconciliation. In the capacity of technology change manager he developed & evaluated tools to increase efficiency in day-to-day work & increase reliability of results and piloted such tools into various projects, measured RoI & certified usage of such tools as best practice. He supported sales-teams in responding to queries, analyzing gaps in product functionalities, replying to to RFI/Ps for system workflow information, performance statistics & coverage of requirements and more.</p>
      </blockquote>
    </div>
  </div>
  );
}

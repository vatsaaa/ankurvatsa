import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgNomura from '../../../images/nomura.jpg';
import ImgEncore from '../../../images/encore.jpg';
import ImgRBS from '../../../images/rbs.jpg';
import ImgPanache from '../../../images/iSmart.jpg';
import ImgGloballogic from '../../../images/globallogic.png';
import ImgTcs from '../../../images/tcs.jpg';

import Nomura from './Nomura';

export default function Experiences() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>EXPERIENCE</strong>
          </h6>
          <div className="row mt-top">
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
                <div align="right">
                  <Link to="/nomura">
                    <i class="far fa-caret-square-right fa-2x" aria-hidden="true"></i>
                  </Link>
                </div>
              </blockquote>
            </div>
          </div>
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
                <div align="right"><Link to="/encore"><i class="far fa-caret-square-right fa-2x" aria-hidden="true"></i></Link></div>
              </blockquote>
            </div>
          </div>
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
                <div align="right"><Link to="/rbs"><i class="far fa-caret-square-right fa-2x" aria-hidden="true"></i></Link></div>
              </blockquote>
            </div>
          </div>
          <hr/>
          {/* Ankur */}
          <div align="right"><i class="fas fa-sort-down fa-2x" aria-hidden="true"></i></div>
          <div className="row mt-top">
            <div className="col xl3 l4 m6 s12"> 
              <p className="teal year_exp white-text">
                  <strong>Mar 2006 - Sep 2007 (1.7 yrs)</strong>
              </p>             
              <br/>
              <img className='activator' src={ImgPanache} alt="iSmart Panache" width="205" height="110"/>            </div>
            <div className="col xl9 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>Technical Lead</strong>
                </h6>
                <p align="justify">Accountable for strategic and tactical planning for product development, technology evaluation, and operations. Designed and developed core frameworks for writing multi-threaded RPC Servers and ensuring product high-availability. Responsible for managing technology standardization, obsolesence and change management including tracking, evaluating and deploying new technologies and processes to improve overall productivity of the organization by removing redundancies & inefficiencies.</p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl3 l4 m6 s12"> 
              <p className="teal year_exp white-text">
                  <strong>Mar 2004 - Mar 2006 (2.1 yrs)</strong>
              </p>             
              <br/>
              <img className='activator' src={ImgGloballogic} alt="Globallogic" width="205" height="110"/>            </div>
            <div className="col xl9 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>Lead Technology</strong>
                </h6>
                <p align="justify">Led a team of 9 engineers on design and development of a simplified version of GSM SMLC that enables location service messaging between BSC and LCS Position Control Function for estimating mobile station locations, E5-E12 gateway to abstract SS7 functioning thus providing a single interface layer to the Position Determining Entity. Network Optimization (Netopts) application that collects network signaling data over GSM A-bis interface and processes the data collected using Location Server to generate network optimization call data records (CDR). Position Control Function talks to the network elements through the gateway which physically interfaces with the Mobile Switching Centers (E12 interface) and Mobile Positioning Center (E5 interface). </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl3 l4 m6 s12"> 
              <p className="teal year_exp white-text">
                  <strong>Feb 2001 - Mar 2004 (3.2 yrs)</strong>
              </p>             
              <br/><br/>
              <img className='activator' src={ImgTcs} alt="Tata Consultancy Services" width="205" height="110"/>            </div>
            <div className="col xl9 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>Lead Technology</strong>
                </h6>
                <p align="justify">Led a team of 9 engineers on design and development of a simplified version of GSM SMLC that enables location service messaging between BSC and LCS Position Control Function for estimating mobile station locations, E5-E12 gateway to abstract SS7 functioning thus providing a single interface layer to the Position Determining Entity. Network Optimization (Netopts) application that collects network signaling data over GSM A-bis interface and processes the data collected using Location Server to generate network optimization call data records (CDR). Position Control Function talks to the network elements through the gateway which physically interfaces with the Mobile Switching Centers (E12 interface) and Mobile Positioning Center (E5 interface). </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

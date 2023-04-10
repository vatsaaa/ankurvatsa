import React from 'react';
import ImgGloballogic from '../../../../images/globallogic.png'

export default function BGloballogic() {
  return (
    <div className="row mt-top">
    <div className="col xl3 l4 m6 s12"> 
    <div align='center'>
      <p className="teal year_exp white-text">
          <strong>Mar'04 - Mar'06 (2.1 yrs)</strong>
      </p>             
      <br/>
      <img className='activator' src={ImgGloballogic} alt="Globallogic" width="205" height="110"/>
    </div>
    </div>
    <div className="col xl9 l8 m6 s12">
      <blockquote className="no-pad">
        <h6 className="no-pad mt-bottom">
          <strong>Lead Technology</strong>
        </h6>
        <p align="justify">Ankur led a team of 9 engineers on design and development of a simplified version of GSM SMLC that enables location service messaging between BSC and LCS Position Control Function for estimating mobile station locations, E5-E12 gateway to abstract SS7 functioning thus providing a single interface layer to the Position Determining Entity. He developed the Network Optimization (Netopts) application that collects network signaling data over GSM A-bis interface and processes the data collected using Location Server to generate network optimization call data records (CDR). Position Control Function talks to the network elements through the gateway which physically interfaces with the Mobile Switching Centers (E12 interface) and Mobile Positioning Center (E5 interface). </p>
      </blockquote>
    </div>
  </div>
  );
}

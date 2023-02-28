import React from 'react';
import ImgNomura from '../../../../images/nomura.jpg';

export default function BNomuraCard() {
  return (
    <div>
        <div align='center'>
          <p className="teal year_exp white-text" >
            <strong>Sep 2017 - Till Date (5.6 yrs)</strong>
          </p>
          <img className='activator' src={ImgNomura} alt="Nomura Services Pvt. Ltd." width="200" height="100"/>
        </div>
    </div>
  );
}

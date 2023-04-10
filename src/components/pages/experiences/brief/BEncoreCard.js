import React from 'react';
import ImgEncore from '../../../../images/encore.jpg';

export default function BEncoreCard() {
  return (
    <div>
      <div align='center'>
        <p className="teal year_exp white-text" >
            <strong>Jan'16 - Jul'17 (1.7 yrs)</strong>
        </p>
        <br />
        <img className='activator' src={ImgEncore} alt="Encore Capital Group" width="200" height="100"/>
      </div>
    </div>
  );
}

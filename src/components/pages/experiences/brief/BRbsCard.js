import React from 'react';
import ImgRBS from '../../../../images/rbs.jpg';

export default function BRbsCard() {
  return (
    <div>
        <p className="teal year_exp white-text">
            <strong>Sep 2007 - Jan 2016 (8.5 yrs)</strong>
        </p>
        <img className='activator' src={ImgRBS} alt="Royal Bank of Scotland" width="205" height="110"/>
    </div>
  );
}

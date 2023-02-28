import React from 'react';
import { useNavigate } from 'react-router-dom';
import BEncoreCard from './BEncoreCard';
import BEncoreText from './BEncoreText';

export default function BEncore() {
  const navigate = useNavigate();
  
  const encoreDetails = () => {
    navigate("/encore")
  }
  return (
    <div className="row mt-top employer-brief">
      <div className="col xl3 l4 m6 s12"> 
        <BEncoreCard />
      </div>
      <div className="col xl9 l8 m6 s12">
        <blockquote className="no-pad">
          <BEncoreText />
          <div align="right" class="employer-detail">
            <i class="far fa-caret-square-right fa-2x fa-fw" onClick={ encoreDetails }></i>
          </div>
        </blockquote>
      </div>
    </div>
  )
}

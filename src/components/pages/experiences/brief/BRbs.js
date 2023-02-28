import React from 'react';
import { useNavigate } from 'react-router-dom';
import BRbsCard from './BRbsCard';
import BRbsText from './BRbsText';

export default function BRbs() {
  const navigate = useNavigate();
  
  const rbsDetails = () => {
    navigate("/rbs")
  }
  return (
    <div className="row mt-top">
    <div className="col xl3 l4 m6 s12">
      <BRbsCard />
    </div>
    <div className="col xl9 l8 m6 s12">
      <blockquote className="no-pad">
        <BRbsText />
        <div align="right" class="employer-detail">
          <i class="far fa-caret-square-right fa-2x fa-fw" onClick={ rbsDetails }></i>
        </div>
      </blockquote>
    </div>
  </div>
  );
}

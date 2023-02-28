import React from 'react';
import { useNavigate } from 'react-router-dom';
import BNomuraCard from './BNomuraCard';
import BNomuraText from './BNomuraText';

export default function BNomura() {
  const navigate = useNavigate();
  
  const nomuraDetails = () => {
    navigate("/nomura")
  }
  return (
    <div className="row mt-top employer-brief">
      <div className="col xl3 l4 m6 s12">
        <BNomuraCard />
      </div>
      <div className="col xl9 l8 m6 s12">
        <blockquote className="no-pad">
          <BNomuraText />
          <div align="right" class="employer-detail">
            <i class="far fa-caret-square-right fa-2x fa-fw" onClick={ nomuraDetails }></i>
          </div>
        </blockquote>
      </div>
    </div>
  );
}

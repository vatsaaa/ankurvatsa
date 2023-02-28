import React from 'react';
import BRbsText from '../brief/BRbsText';
import BRbsCard from '../brief/BRbsCard';

export default function DRbs() {
  return (
    <div className="row">
      <div className="col s12 m3">
        <div>
          <div className="card">
            <BRbsCard />
            <BRbsText />
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Additional brief
                <i className="material-icons right">close</i>
              </span>
              <p className='flex-container'>
                <div className="row">
                  <p align="justify">Lore ipsum 1</p>
                  <p align="justify">Lore ipsum 2</p>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 m9">
        <div className="card">
          <div className="card-content" align="justify">
            <li>Fast-tracked through roles demanding technical & management capabilities and promoted from enterprise engineering role to include management role and further to oversee global delivery of Interest Rate Derivatives platform and program management for several Dodd-Frank regulatory & market initiatives, including hands on delivery as required. Designed distributed, complex, and globally deployed technology systems for banking & finance, trade lifecycle & pricing.</li>
            <li>As Enterprise Engineer & Architect, crafted and executed a comprehensive SoA strategy & re-architected monolithic Interest Rate Derivatives trading & pricing platform into several standalone & independently releasable business systems & services for Clearing, Transaction Reporting, Brokerage, Credit Check, Market Data Independence. Created reference architectures & exemplars adopted by future enhancements resulting in quick time to market.</li>
            <li>Program managed several key Dodd-Frank regulatory & market leading initiatives viz. Clearing & Affirmations, Collateralized Pricing and SEFs. Engaged leaders across business disciplines to ascertain & prioritize features and develop system, networking, communications, and support solutions.</li>
            <li>Zero defect Migration of global “Derivatives Trading Platform” from Sybase 12.5-SunOS 5.8 to Sybase (ASE) 15.5-Linux in 10 months against scheduled 16 months. Responsible for project planning, tracking, reporting fortnightly achievements & RAID to sponsors and stakeholders, resource projection and management e.g., h/w, environments, engineers, vendor management.</li>
            <li>Owned product roadmap and strategy, features prioritization, release management for Interest Rate Derivatives Trading, Pricing & Risk Analytics platform. Provided technical leadership on large scale complex projects for the platform viz. Fetching live market data from Reuters Market Data Services, Adding Market Risk measures viz. PayOff Matrix, PnL & Risk Attribution, Basis Risk, ISDA Early Terminations matrix, Importing & managing FX Volatilities.</li>
            <li>Lead support team of 15 engineers, own 24×7 incident & situation management, capacity planning, issue prioritization with business & technology leadership, weekly reporting, mentored team to understand issues for best solution. Implemented Code Quality with peer programming & review practice, quality frameworks using SonarQube.</li>
          </div>
        </div>
      </div>
    </div>
  );
}

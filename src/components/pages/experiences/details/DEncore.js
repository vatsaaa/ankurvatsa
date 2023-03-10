import React from 'react';
import BEncoreCard from '../brief/BEncoreCard';
import BEncoreText from '../brief/BEncoreText';
import Navbar from '../../../navbar/Navbar';

export default function DEncore() {
  return (
    <section>
      <Navbar />
      <div className="row">
        <div className="col s12 m3">
          <div>
            <div className="card">
              <BEncoreCard />
              <BEncoreText />
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
              <li align="justify">Owned ‘Technology Consolidation’ and ‘Core Services Automation’ strategies, resulting in savings of $700k in a year and enhanced user experience. Cost based analysis and consolidation of a heterogeneous technical delivery stack, sponsored & led integration of delivery management stack on to unified continuous delivery pipeline with "TFS/VSTS Online", thus enabled Continuous Integration and Continuous Delivery, traceability from requirements till code & defects. Conceptualized and architected automated tests execution engine to leverage VSTS Online (TFS) with CodedUI hosted in MTM repository.</li>
              <li align="justify">Established DevOps (ALM, AIS and Operate) to transform IT support and organizational interaction practices, fostering a strong and collaborative work environment while developing robust processes and reporting for improved issue initiation and visibility. Established technology menu, delivery & quality standards and technical debt register to ensure technology standards & best practices are maintained and applied consistently across the organization. Hands-on execution ownership of multi-phased DevOps program for "Proactive Monitoring of Applications", to implement & integrate centralized logging & analysis service viz. Graylog, Kafka & Fluentd.</li>
              <li align="justify">Owned "Build for Cloud" strategy and saved $850,000 p.a., architected and operationalized RESTful Microservices based products and ensured timely & high-quality delivery of cornerstone business applications viz. Bluefin – Payment Interface & Gateway, Self service payments channel, Everest – Media management & storage solution and Cogent – IL Express on AWS Cloud.</li>
              <li align="justify">Strategic planning, development, maintenance and production support of high performance and high availability of distributed software across all LoBs viz. CRM – Internal Operations, Legal Operations, Media Capture & Storage, Common Payment Portal, Payment Interface & Tax Lien. Responsible for developing high-level work plans, schedules, estimates, resource plans, budgets and securing approvals for IT project funding as per roadmaps and ensuring work is delivered strictly as per approved roadmaps with few but well discussed and documented exceptions. Lead IT’s comprehensive digital transformation with major contributions in aligning the IT strategy, assets, and investments with organizational objectives e.g. prioritizing shortest weighted projects, complemented with Agile delivery methods, established DevOps Culture and pushing forward SOA strategy & Micro-services Architecture.</li>
              <li align="justify">Established IT as strategic capability and business partner by maintaining value based business relationships. Optimized technology delivery and operations methodology. Adopted Agile, enterprise DevOps and Cloud Engineering with a flat IT organization.
                - Aligned IT with business disciplines, established customer-oriented operations team accountable to SLAs & metrics, and adopted robust ITIL services and
                operation metrics e.g., application tiering, published uptime, MTT Resolve, Shift Left Score.
                - Increased release predictability and reduced software delivery cycle from 9-10 weeks to 4 weeks, leveraged optimized DevOps and Agile with global distributed
                teams. Ensured strong release management & feature driven planning using tools driven metrics collection for value-based feature prioritization with business.</li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

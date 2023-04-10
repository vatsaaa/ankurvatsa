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
              <li align="justify">Ankur was accountable for strategic planning, development, maintenance and production support of high performance and high availability of distributed software across all LoBs viz. CRM – Internal Operations, Legal Operations, Media Capture & Storage, Common Payment Portal, Payment Interface & Tax Lien. He owned roadmaps and work plans (schedules, estimates, resource plans, budgets) for IT division and ensured work delivery according to roadmaps with few well documented exceptions.</li>
              <li align="justify">He owned <em>Technology Consolidation</em> and <em>Core Services Automation</em> strategies, which saved $700k in a year and enhanced user experience. Taking a commercial perspective, he identified the opportunity to consolidate a heterogeneous technical delivery stack, integrate software delivery stack & build continuous delivery pipeline with "TFS/VSTS Online" (now Azure DevOps). He also conceptualized and architected automated tests execution engine to leverage VSTS Online (TFS) with CodedUI hosted in MTM repository. This strategy enabled continuous integration & delivery and traceability from requirements till code & defects.</li>
              <li align="justify">Ankur owned the <em>Build for Cloud</em> strategy which saved ~$850,000 p.a. He leveraged RESTful Microservices to architect cornerstone business applications & products on AWS Cloud viz. Bluefin–Payment I/F & G/W, Self service payments portal, Everest–Media & storage management and Cogent–IL Express. He transformed IT division with significant contribution to aligning IT strategy, assets, and investments to organizational objectives e.g. prioritizing projects higher in value chain, complemented with Agile delivery methods, established DevOps Culture and pushed forward SOA & Micro-services Architecture. Demonstrating strong organization design skills, he structured DevOps organization - ALM, AIS and Operate - to ensure strong release management & feature driven planning using tools driven metrics collection for value-based feature prioritization with business.</li>
              <li align="justify">He established technology menu, delivery & quality standards & technical obsolescense register to ensure technology standards & best practices are applied consistently across the organization. He fostered strong & collaborative work environment supported by robust processes and reporting. He demonstrated hands-on execution of multi-phased DevOps program for "Proactive Applications Monitoring", implemented & integrated centralized logging & analytics with Graylog, Kafka & Fluentd.</li>
              <li align="justify">Ankur established IT as strategic capability and business partner by maintaining value based business relationships. He optimized technology delivery and operations methodologies - adopted Agile, enterprise DevOps and Cloud Engineering with a flat IT organization. He aligned IT with business disciplines, established customer-oriented operations team accountable to SLAs & metrics, and adopted robust ITIL services and operation metrics e.g., application tiering, published uptime, MTT Resolve, Shift Left Score - resulting in release predictability and reduced software delivery cycle from 10-12 weeks to 4 weeks.</li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

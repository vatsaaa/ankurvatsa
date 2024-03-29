import React from 'react';
import BNomuraText from '../brief/BNomuraText';
import BNomuraCard from '../brief/BNomuraCard';
import Navbar from '../../../navbar/Navbar';

export default function DNomura() {
  return (
    <section>
      <Navbar />
      <div className="row">
        <div className="col s12 m3">
          <div>
            <div className="card">
              <BNomuraCard/>
              <BNomuraText />
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
              <li>As a transformational leader Ankur has delivered several cloud transformation projects, has setup the <em>Innovation Center</em> and introduced number of new digital business propellers on Nomura’s Startup Incubator e.g. Natural Language portfolio, automated PnL & risk sensitivities explain, settlement instructions setup from unstructured data, automated review of legal contract.</li>
              <li>He sets technology standards and provides technology architecture governance & engineering leadership for 1000+ software engineers & lead architects. He ensures strategic direction on <em>Invest</em> products, conducts architecture reviews, and creates projects to pioneer emerging technologies e.g. AWS Cloud, DLTs/Blockchain, Data Science, RPA, SRE & DevOps at Scale and more.</li>
              <li>Created RoI based feasibility frameworks for RPA & IPA projects, delivered 210 RPA/IPA bots in 16 weeks, and proposed alternative tools & processes for federated RPA & IPA delivery. Firm wide research, initial discoveries & implementation of emerging technology products are all governed, delivered and democratized through the center.</li>
              <li>Saved $500k by automating Market Data Commercials - designed and built machine learning oriented work queue management system on Outlook, Invoicing, Demand & Vendor Management, license consolidation, Semantic Sentiment Analysis to determine news of interest from credit profile of given sector & entity, employee longevity predictions.</li>
              <li>Delivered end to end Machine Learning & NLP products - automated Talent Acquisition Recommendations, automated task-queue management on Outlook emails, Conversational UI Frameworks for delivering Chatbots at scale and more.</li>
              <li>Demonstrated capabilities in setting and executing data virtualization & analytics agenda. Architecting enterprise wide, complex events-processing based Data Fabric and Data Marketplace - Snowflake, Kafka, AWS and more. Write exemplar code and boilerplate archetypes that enable fast paced delivery of business capabilities & services.</li>
              <li>Proposed NFT assessment, recommendation, and trade execution engine as a new-business platform. Architecting and monetizing state of art highly scalable and highly available complex events processing platforms. Hands-on ownership of the platform - features analysis, backlog prioritization, release planning, coding, release, deployment, and operation in production.</li>
              <li>Lead global team of 35+ highly skilled professionals for XVA Technology, delivering technology solutions for XVA Desk - CVA, FVA, MVA, KVA and more.</li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



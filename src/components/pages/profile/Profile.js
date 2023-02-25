import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/person1.jpg';

const ButtonMailto = ({ mailto, label }) => {
  return (
      <Link to='#'
        onClick={(e) => {
          window.location.href = mailto;
            e.preventDefault();
          }}
      >
        <i className='fas fa-paper-plane fa-2x grey-text text-darken-4 social_style'></i>{label}
      </Link>
  );
};

export default function Profile() {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img className='activator' src={ImgProfile} alt="Ankur Vatsa" />
          <Link className='btn-floating halfway-fab waves-effect waves-light red'>
            <i className='material-icons activator'>more_vert</i>
          </Link>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
          Technology Executive
          </span>
          <p align="justify">Experienced in setting up and leading large, cross-cultural, technically sound and passionate teams of architects, engineers, quality analysts & business analysts in fast-changing and globally matrixed business environments.</p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Connect or Follow
            <i className="material-icons right">close</i>
          </span>
          <p className='flex-container'>
            <div className="row">
              <div className="col" align="center">
                <Link to='https://github.com/vatsaaa/'>
                  <i className='fab fa-github fa-2x grey-text text-darken-4 social_style'></i>
                </Link>
              </div>
              <div className="col" align="center">
                <Link to='https://gitlab.com/vatsaaa'>
                  <i className='fab fa-gitlab fa-2x grey-text text-darken-4 social_style'></i>
                </Link>
              </div>
              <div className="col">
                <Link to='https://www.linkedin.com/in/ankurvatsa/'>
                  <i className='fab fa-linkedin-in fa-2x grey-text text-darken-4 social_style'></i>
                </Link>
              </div>
              <div className="col">
                <Link to='https://twitter.com/ankurvatsa'>
                  <i className='fas fa-map-marker fa-2x grey-text text-darken-4 social_style'></i>
                </Link>
              </div>
              <div className="col">
                <ButtonMailto mailto='mailto:ankur.vatsa@gmail.com'/>
              </div>
            </div>
            <div className="row"><hr/></div>
            <div className="row">
              <p align="justify">Goal & detail-oriented, hands on professional with 20 years in developing large, complex and globally distributed systems for investment banking and telecom domains with C/C++, Pyhton, Java, Sybase, SQL Server, Node.js, NoSQL, Neo4j, AWS Cloud, High Performance Computing.</p>
              <p align="justify">Efficiently navigates conflicting priorities, strong ability to follow-through on commitments, excellent business relations & stakeholder management, fosters teamwork and delivers productivity through process improvements built on culture of continuous improvement.</p>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

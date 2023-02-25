import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
          Senior Technology leader with passion for Technology & Business Strategy|AWS Solutions Architect - Professional
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>CONTACT</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> 123 Lorem
              </p>
              <p>
                <strong>Email:</strong> ankur.vatsa@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +91 989 916 2012
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Main Language:</strong> English
              </p>
              <p>
                <strong>Second Language:</strong> Spanish
              </p>
              <p>
                <strong>Main Language:</strong> French
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
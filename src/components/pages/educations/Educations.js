import React from 'react';

export default function Educations() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>EDUCATION & CERTIFICATIONS</strong>
          </h6>
          <table class='striped w-auto'>
            <thead class="thead-dark">
              <tr>
                <th>Certificate</th>
                <th>Date</th>
                <th>Institution</th>
                {/* <th></th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bachelor of Technology</td>
                <td>Apr 1996 - Mar 2000</td>
                <td>Faculty of Engineering & Technology, New Delhi, Jamia Millia Islamia</td>
              </tr>
              <tr>
                <td>Cyber Law - Post Graduate Diploma</td>
                <td>Apr 2007 - Mar 2008</td>
                <td>Indian Law Institute, New Delhi</td>
              </tr>
              <tr>
                <td>Certificate in Intellectual Property Rights</td>
                <td>Jul 2007 - Oct 2007</td>
                <td>Indian Law Institute, New Delhi</td>
              </tr>
              <tr>
                <td>AWS Certified Solutions Architect - Professional, Credential #HET465SJDJFE1H38</td>
                <td>Feb 2021 - Feb 2024</td>
                <td>Amazon Web Services</td>
              </tr>
              <tr>
                <td>ITIL Foundation, Simplilearn, Credential #213248</td>
                <td>Feb 2021 - Feb 2024</td>
                <td>Simplilearn</td>
              </tr>              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

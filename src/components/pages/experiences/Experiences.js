import React from 'react';

import BNomura from './brief/BNomura';
import BEncore from './brief/BEncore';
import BRbs from './brief/BRbs';
import BPanache from './brief/BPanache';
import BGloballogic from './brief/BGloballogic';
import BTcs from './brief/BTcs';

export default function Experiences() {
  const [show, setShow] = React.useState(false);

  return (
    <section>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>EXPERIENCE</strong>
          </h6>
          <BNomura />
          <BEncore />
          <BRbs />
          {
            show ? 
            <div className="show-hide">
              <BPanache />
              <BGloballogic />
              <BTcs />
            </div> : null
          }          
          <div align="right" onClick={()=>setShow(!show)}>
            <i class="fas fa-ellipsis-h fa-2x"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

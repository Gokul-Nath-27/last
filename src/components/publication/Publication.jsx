import React from 'react'
import './publication.css'
const Publication = () => {
  return (
    <div className='publication'>
      <div className="pub-container">
        <div className="right">
          <h1 data-aos="fade-left">Publications</h1>
          <p data-aos="fade-in">All accepted papers will be published in Taylor and Francis Conference Preceedings. Selected papers after peer review would be published in reputed journal.</p>
          <p data-aos="zoom-in">Mail To: <span><strong>icarsi@saveetha.ac.in</strong></span></p>
        </div>
        <div className="left">
          <h1 data-aos="fade-left">Registration Fee</h1>
          <div className="early">
            <p data-aos="zoom-in" className='each' style={{ textAlign: 'initial' }}>Early Bird Registration Fee:{"(Student - UG, PG, RS & Academics)"}</p>
            <p data-aos="zoom-in" className='price'>9,000 INR</p>
          </div>
          <div className="early">
            <p data-aos="zoom-in" className='each'>Late Registration Registration Fee:</p>
            <p data-aos="zoom-in" className='price'>10,000 INR</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Publication
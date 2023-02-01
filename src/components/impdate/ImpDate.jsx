import React from 'react'

const Impdate = () => {
  return (
    <div className="wrapper important-dates text-center">
      <div className="imp-left"><img src="images/important-left.jpg" alt="" /></div>
      <div className="imp-right"><img src="images/important-right.jpg" alt="" /></div>
      <div className="container">
        <div className="heading">
          <h2>Important <span>Dates</span></h2>
        </div>
        <div className="imp-dates">
          <div className="row">
            <h3 className="date">02<sup>nd</sup> Feburary 2023</h3>
            <div className="bullet-design"><div className="bullet-design-hover" /></div>
            <h3 className="submission-of" style={{ width: '562px' }}>Paper Submission</h3>
          </div>
          <div className="row">
            <h3 className="date"> 01<sup>st</sup> March 2023 <br /> </h3>
            <div className="bullet-design"><div className="bullet-design-hover" /></div>
            <h3 className="submission-of" style={{ width: '562px' }}>Last Date For Paper Submission</h3>
          </div>
          <div className="row">
            <h3 className="date">10<sup>th</sup> March 2023 <br /> </h3>
            <div className="bullet-design"><div className="bullet-design-hover" /></div>
            <h3 className="submission-of" style={{ width: '562px' }}>Acceptance Notification</h3>
          </div>
          <div className="row">
            <h3 className="date">15<sup>th</sup> March 2023<br /></h3>
            <div className="bullet-design"><div className="bullet-design-hover" /></div>
            <h3 className="submission-of" style={{ width: '562px' }}>Camera Ready Paper Submission & Early Bird Registration</h3>
          </div>
          <div className="row">
            <h3 className="date">20<sup>th</sup> March 2023<br /></h3>
            <div className="bullet-design"><div className="bullet-design-hover" /></div>
            <h3 className="submission-of" style={{ width: '562px' }}> Registrations Deadline  </h3>
          </div>
          {/* <div className="row">
            <h3 className="date">15<sup>th</sup> March 2023<br /></h3>
            <div className="bullet-design"><div className="bullet-design-hover" /></div>
            <h3 className="submission-of" style={{ width: '562px' }}> Early Bird Registration </h3>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Impdate
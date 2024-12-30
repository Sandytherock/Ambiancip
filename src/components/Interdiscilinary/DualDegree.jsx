import React from 'react'
import "./DualDegree.css"

const DualDegree = () => {
  return (
    <>
      {/* <div class="degree"> */}
        <div class="degreeContent">

          <h2 class="plain">Dual Degree</h2>
          <p>Students thrive while pursuing more than one Penn degree, finding leadership opportunities and connections as they develop their unique academic journeys. A student pursuing a <a href="#">dual degree</a> will receive two bachelor’s degrees simultaneously, from two separate schools of the University. A student does not have to choose to participate prior to matriculation.</p>
          <p>&nbsp;</p>

          <h2 class="plain">Coordinated Dual-Degree, Accelerated, and Specialized Programs</h2>
          <p>Penn also offers distinctive, coordinated dual-degree programs, as well as accelerated and specialized programs.</p>

          <h4><a href="#">Huntsman Program in International Studies and Business </a></h4>
          <p>Students earn a BA from the College of Arts and Sciences and a BS in Economics from the Wharton School.</p>

          <h4><a href="#">The Roy and Diana Vagelos Program in Life Sciences and Management </a></h4>
          <p>Students earn a BA from the College of Arts and Sciences and a BS in Economics from the Wharton School.</p>

          <h4><a href="#">The Jerome Fisher Program in Management and Technology</a></h4>
          <p>Students earn a BS in Economics from the Wharton School and a BS in Engineering or a BAS from the School of Engineering and Applied Science.</p>

          <h4><a href="#">Nursing and Health Care Management</a></h4>
          <p>Students earn a BS in Nursing from the School of Nursing and a BS in Economics from the Wharton School.</p>

          <h4><a href="#">The Roy and Diana Vagelos Integrated Program in Energy Research</a></h4>
          <p>Students earn a BA from the College of Arts and Sciences and a BS in Engineering from the School of Engineering and Applied Science.</p>

          <h4><a href="#">Seven Year Bio-Dental Program</a></h4>
          <p>Students earn a BA and a DDM from Penn Dental Medicine.</p>

          <h4><a href="#">Digital Media Design Program</a></h4>
          <p>Students earn a BS in Engineering from the School of Engineering and Applied Science.</p>

          <h4><a href="#">The Rajendra and Neera Singh Program in Networked &amp; Social Systems Engineering</a></h4>
          <p>Students earn a BS in Engineering from the School of Engineering and Applied Science.</p>

        </div>
      {/* </div> */}



      <section class="content-aside    ">
        {/* <div class="contain section-padding content-aside__flex"> */}
    
          <div class="content-aside-Text">
            <div class="degreeContent">
              <h2 className='plain'>University Minors</h2>
              <p>In addition to minors completed within one school, <a href="#">several interdisciplinary minors</a> combine coursework from Penn’s four undergraduate schools. From urban education to nutrition to American public policy, the options vary.</p>
            </div>
          </div>

          <div class="content-aside-Fig">
            <div class="fact fact--card">
              <figure class="fact__figure">
                <p class="fact__title">90</p>
                  <figcaption class="fact__caption">  Total Undergraduate Majors Being Pursued</figcaption>
              </figure>
            </div>
          </div>

        {/* </div> */}
      </section>
    </>
  )
}

export default DualDegree
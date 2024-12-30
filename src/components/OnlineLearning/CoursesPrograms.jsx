import React from 'react'
import "./CoursesPrograms.css"

const CoursesPrograms = () => {
  return (
    <>
      <section class="story">
        {/* <div class="contain content-spotlight__flex"> */}
          <div class="storyContentColumn">
            <div class="storyContent">
              {/* <span class="storySubheading">Featured Story</span> */}
              <h2 class="storyTitle">Penn Online Courses and Programs</h2>
              <div class="storyText">
                <p>In 2012, Penn launched its first Massive Open Online Courses and created an office dedicated to online learning. Initially called the Open Learning Initiative, later the Online Learning Initiative, and now a part of the <a href="#">Center for Excellence in Teaching, Learning and Innovation</a> (CETLI), the preliminary focus was producing MOOCs with Penn faculty and advising Penn leadership on online initiatives. Today, the mission is much broader, and serves as a nexus for information about digital learning across Penn. CETLI partners with all of Penn’s 12 schools to advance the development and delivery of online learning, creating flexible options for learners across the globe.</p>

                <p>Penn’s Online Learning Platform allows students to search for a variety of online educational opportunities including certificates, continuing education, micro-credentials, and degrees.</p>
                <a href="#" class="btn-courses btn--outline btn--outline-white">Search Penn's Online Offerings</a>
              </div>
            </div>
          </div>
          <div class="storyContentColumn">
            <img loading="lazy" src="/assets/images/OnlineLearningCourses.jpeg" width="1600" height="1067" alt="passport application with undergrads" class="card__image" />
          </div>
        {/* </div> */}
      </section>
    </>
  )
}

export default CoursesPrograms
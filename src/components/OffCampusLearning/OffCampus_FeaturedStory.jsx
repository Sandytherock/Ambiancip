import React from 'react'
import "./OffCampus_FeaturedStory.css"

const OffCampus_FeaturedStory = () => {
  return (
    <>
      <section class="OffCampus_story bg-color bg- ">
        {/* <div class="contain content-spotlight__flex"> */}
          <div class="OffCampus_storyContentColumn">
            <div class="OffCampus_storyContent">
              <span class="OffCampus_storySubheading">Featured Story</span>
              <h2 class="OffCampus_storyTitle">Two-and-a-half decades of research in Malawi</h2>
              <div class="OffCampus_storyText">
                <p>As the country’s life expectancy has risen, the Malawi Longitudinal Study of Families and Health has shifted its current and future research to aging.</p>
                <a href="#" class="OffCampus_btn btn btn--outline btn--outline-white">Read now</a>
              </div>
            </div>
          </div>
          <div class="OffCampus_storyContentColumn">
            <img loading="lazy" src="/assets/images/SI_passport.jpg" width="1600" height="1067" alt="passport application with undergrads" class="OffCampus_card__image" />
          </div>
        {/* </div> */}
      </section>
    </>
  )
}

export default OffCampus_FeaturedStory
import React from 'react'
import "./GI_FeaturedStory.css"

const GI_FeaturedStory = () => {
  return (
    <>
      <section class="GI_story">
        {/* <div class="contain content-spotlight__flex"> */}
          <div class="GI_storyContentColumn">
            <div class="GI_storyContent">
              <span class="GI_storySubheading">Featured Story</span>
              <h2 class="GI_storyTitle">Passport drive opens up the world to undergrads</h2>
              <div class="GI_storyText">
                <p>Penn Abroad provided fully funded passports to undergraduates who have never held a passport before, with priority given to students who receive financial aid.</p>
                <a href="#" class="GI_btn btn btn--outline btn--outline-white">Read now</a>
              </div>
            </div>
          </div>
          <div class="GI_storyContentColumn">
            <img loading="lazy" src="/assets/images/SI_passport.jpg" width="1600" height="1067" alt="passport application with undergrads" class="GI_card__image" />
          </div>
        {/* </div> */}
      </section>
    </>
  )
}

export default GI_FeaturedStory
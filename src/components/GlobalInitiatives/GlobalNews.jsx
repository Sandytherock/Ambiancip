import React from 'react'
import "./GlobalNews.css"

const GlobalNews = () => {
  return (
    <>
      <section class="grid   bg-color bg-gray">
        <div class="contain">
          <header class="section-header section-header--centered ">
            <h2 class="section-header__title">Penn Global News</h2>
          </header>
          <div class="grid__content grid__content--4 news-featured__grid">
            <article class="grid-card grid-card--plain">
              <a href="#" class="grid-card__image-link">
                <picture>
                  <source srcset="https://penntoday.upenn.edu/sites/default/files/styles/teaser/public/2024-12/syria-teaser.jpg?h=56d0ca2e&amp;itok=q-UBmrbH" media="(min-width:1023px)" />
                  <source srcset="https://penntoday.upenn.edu/sites/default/files/styles/teaser/public/2024-12/syria-teaser.jpg?h=56d0ca2e&amp;itok=q-UBmrbH" media="(min-width:640px)" /> 
                  <img src="https://penntoday.upenn.edu/sites/default/files/styles/teaser/public/2024-12/syria-teaser.jpg?h=56d0ca2e&amp;itok=q-UBmrbH" alt="A crowd of Syrians gather in an open space. To the right, they are waving a revolutionary flag." class="grid-card__image" />
                </picture>
              </a>
              <div class="grid-card__content">
                <h3 class="grid-card__title">
                  <a href="#" class="grid-card__link">What comes next for Syria</a>
                </h3>
                <p class="grid-card__date">December 12, 2024</p>
              </div>
            </article>
            <article class="grid-card grid-card--plain">
              <a href="#" class="grid-card__image-link">
                <picture>
                  <source srcset="https://penntoday.upenn.edu/sites/default/files/styles/teaser/public/2024-12/pdri-dev-policy-teaser.jpg?h=56d0ca2e&amp;itok=jpb4pY-K" media="(min-width:1023px)" />
                  <source srcset="https://penntoday.upenn.edu/sites/default/files/styles/teaser/public/2024-12/pdri-dev-policy-teaser.jpg?h=56d0ca2e&amp;itok=jpb4pY-K" media="(min-width:640px)" />
                  <img src="https://penntoday.upenn.edu/sites/default/files/styles/teaser/public/2024-12/pdri-dev-policy-teaser.jpg?h=56d0ca2e&amp;itok=jpb4pY-K" alt="Cocoa farming in Ghana." class="grid-card__image" />
                </picture>
              </a>
              <div class="grid-card__content">
                <h3 class="grid-card__title">
                  <a href="#" class="grid-card__link">The quest to find actionable data for policymakers in developing countries   
                  </a>
                </h3>
                <p class="grid-card__date">December 10, 2024</p>
              </div>
            </article>
            <article class="grid-card grid-card--plain">
              <a href="#" class="grid-card__image-link">
                <picture>
                  <source srcset="https://penntoday.upenn.edu/sites/default/files/styles/teaser/public/2024-10/middle-east-main.jpg?h=56d0ca2e&amp;itok=yAZLHBez" media="(min-width:1023px)" />
                  <source srcset="https://penntoday.upenn.edu/sites/default/files/styles/teaser/public/2024-10/middle-east-main.jpg?h=56d0ca2e&amp;itok=yAZLHBez" media="(min-width:640px)" />
                  <img src="https://penntoday.upenn.edu/sites/default/files/styles/teaser/public/2024-10/middle-east-main.jpg?h=56d0ca2e&amp;itok=yAZLHBez" alt="Dahlia Scheindlin, Shay Hazkani, and Amal Jamal" class="grid-card__image" />
                </picture>
              </a>
              <div class="grid-card__content">
                <h3 class="grid-card__title">
                  <a href="#" class="grid-card__link">University announces Penn Global Middle East Distinguished Visiting Scholar Initiative</a>
                </h3>
                <p class="grid-card__date">October 28, 2024</p>
              </div>
            </article>
            <article class="grid-card grid-card--plain">
              <a href="#" class="grid-card__image-link">
                <picture>
                  <source srcset="https://penntoday.upenn.edu/sites/default/files/styles/teaser/public/2024-10/P-101817-Master-V1-025.jpg?h=56d0ca2e&amp;itok=kXIJ5FR5" media="(min-width:1023px)" />
                  <source srcset="https://penntoday.upenn.edu/sites/default/files/styles/teaser/public/2024-10/P-101817-Master-V1-025.jpg?h=56d0ca2e&amp;itok=kXIJ5FR5" media="(min-width:640px)" />
                  <img src="https://penntoday.upenn.edu/sites/default/files/styles/teaser/public/2024-10/P-101817-Master-V1-025.jpg?h=56d0ca2e&amp;itok=kXIJ5FR5" alt="Three panelists on stage and the seated crowd at Penn’s Silfen Forum." class="grid-card__image" />
                </picture>
              </a>
              <div class="grid-card__content">
                <h3 class="grid-card__title">
                  <a href="#" class="grid-card__link">Penn’s Silfen Forum addresses ‘waging peace’</a>
                </h3>
                <p class="grid-card__date">October 25, 2024</p>
              </div>
            </article>
          </div>
          <footer class="section-footer section-footer--centered">
              <a href="#" class="btn-g btn--outline ">More Penn Global News</a>
          </footer>
        </div>
      </section>
    </>
  )
}

export default GlobalNews
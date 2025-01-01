import React from 'react'
import './Athletics.css'

import { Link } from 'react-router-dom'
import Breadcrumb from "../ResearchandInnovation/breadcrum/breadcrum";
import two from '../../assets/two.png'
import three from '../../assets/three.png'
import four from '../../assets/four.jpg'
import five from '../../assets/five.jpg'
import six from '../../assets/six.jpg'
import seven from '../../assets/seven.jpg'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Athletics = () => {
  const breadcrumbItems = [
    { label: 'HOME', href: '/' },
    { label: 'Athletics & Recreation', href: '/athletics' },
  ]
  return (
    <>
      <Header />
      <div className="athletics">
        <div className="first-container">
          <Breadcrumb items={breadcrumbItems} />
          <h1> <span style={{ borderBottom: '5px solid brown' }}>A</span>thletics & Recreation</h1>
          <div className="content">
            <h3>A proud member of the Ivy League, Penn offers many unique and exciting
              opportunities for students, faculty, and staff to cheer on the mighty Quakers,
              participate in competitive team sports, and stay physically fit at state-of-the-art,
              world-class training centers.
            </h3>
          </div>
          <img src="https://www.upenn.edu/sites/default/files/styles/default/public/2020-12/penn-relays-above.jpg?itok=6fVSUp-U" alt="" />
        </div>

        <div className="second-container">
          <div className="container-1">
            <div className="penn-sports">
              <Link to="#"> <h1>Sport Clubs</h1></Link>

              <p>Penn Athletics provides intercollegiate and recreational opportunities that enrich the Penn student experience,
                and makes athletic facilities and activities available to the entire campus community.
              </p>
            </div>
            <div className="campus">
              <Link to="#"><h1>Campus Recreation Athletics</h1></Link>

              <p>Campus Recreation offers recreational activities and facilities to the entire Penn community.
                Activities include yoga and fitness classes, sport clubs, intramurals, aquatic programming,
                rock climbing, and much more.
              </p>
            </div>
            <div className="intramural">
              <Link to="#"><h1>Intramural Sports League</h1></Link>

              <p>The Intramural Sports program provides organized sport activities
                that promote participation and socialization between groups and individuals,
                enhance physical fitness, and foster a spirit of fair play and sportsmanship for members.
              </p>
            </div>
          </div>
          <div className="image-2">
            <img src={two} alt="" />
          </div>
        </div>


        <div className="second-container">
          <div className="container-1">
            <div className="penn-sports">
              <Link to="#"> <h1>Sport Clubs</h1></Link>

              <p>
                A sampling of these includes basketball, soccer, ice hockey, sailing, and ultimate frisbee.
              </p>
            </div>
            <div className="campus">
              <Link to="#"><h1>Wellness & Fitness Programs</h1></Link>

              <p>
                Campus Recreation offers fitness and wellness programs to meet the health and fitness
                goals of each member of the Penn community. Programs and services include group exercise,
                personal training, Reformer Pilates, and weightlifting classes.
              </p>
            </div>
            <div className="intramural">
              <Link to="#"><h1>Penn Relays</h1></Link>

              <p>
                First held on April 21, 1895, the Penn Relay Carnival is the longest running track & field meet in the country,
                routinely drawing more than 100,000 spectators and more than 15,000 entries each year.
                The event is held over three days concluding on the final Saturday of April. Come see what makes the Penn Relay
                Carnival an annual bucket list event.
              </p>
            </div>
          </div>
          <div className="image-2">
            <img src={three} alt="" />
          </div>
        </div>

        <div className="third-container">
          <div className="sports">
            <h1>Sports News</h1>
          </div>
          <div className="container-3">
            <div className="card-1">
              <img src={four} alt="" />
              <p>What’s That?: The Heisman<br />
                Trophy
                December 17, 2024
              </p>
            </div>
            <div className="card-2">
              <img src={five} alt="" />
              <p>Sprint football players pick up <br />
                postseason praise
                December 4, 2024
              </p>
            </div>
            <div className="card-3">
              <img src={six} alt="" />
              <p>Penn celebrates official ribbon- <br />
                cutting for new Ott Center
                November 19, 2024
              </p>
            </div>
            <div className="card-4">
              <img src={seven} alt="" />
              <p>Men’s soccer clinches third-<br />
                straight Ivy League regular <br />
                season title
                November 11, 2024
              </p>
            </div>
          </div>

          <div className="button-sport">
            <button>More Sports News</button>
          </div>
        </div>


        <div className="fourth-container">
          <div className="first">
            <h1><span>Fa</span>cility Locations</h1>
          </div>

          <div className="second">
            <Link to="#"><h2>David Pottruck Health & Fitness Center</h2></Link>
            <p>Located on 37th and Walnut streets, this 120,000-square-foot facility has four floors of weight and cardio equipment,
              an Olympic-size pool, co-ed sauna, basketball courts, the climbing wall, golf simulator, Quaker Fuel dining area,
              fitness and Pilates studios, locker and shower facilities, and the Membership Services office.
            </p>
          </div>
          <div className="second">
            <Link to="#"><h2>Robert A. Fox Fitness Center</h2></Link>
            <p>Located at Gate 2 within the Weiss Pavilion at Franklin Field on 33rd Street
              (between Spruce and Walnut streets), the Fox Fitness Center adds an additional 8,000
              square feet of indoor recreational space. This facility features Life Fitness cardiovascular
              equipment and various strength equipment
            </p>
          </div>
          <div className="second">
            <Link to="#"><h2>Franklin Field Track</h2></Link>
            <p>Recreational walking and jogging is allowed on Franklin Field Monday through Friday
              from 10 a.m. to 2 p.m. To access the track, patrons must enter through the main entrance
              of Fox Fitness and provide a valid PennCard or affiliate card. Signage is available in the
              concourse to direct patrons to the track.
            </p>

          </div>
          <div className="second">
            <Link to="#"><h2>Penn Park</h2></Link>
            <p>Penn Park is 24 acres of athletic fields and open space located to the east of Penn’s
              campus. It includes two synthetic turf athletic fields, the Dunning-Cohen Champions Field
              with a seasonal air structure and the James “Ace” Adams Field, a multi-purpose stadium, and the
              12-court Hamlin Tennis Center. South Field is an informal, natural grass playing field.
            </p>

          </div>
          <div className="second">
            <Link to="#"><h2>River Fields</h2></Link>
            <p>Athletic fields consisting of the Rhodes Soccer Stadium and Field,
              the Ellen Vagelos C’90 Field Hockey Field, and the Mondschein Throwing Complex.

            </p>

          </div>
          <div className="second">
            <Link to="#"><h2>Penn Squash Center</h2></Link>
            <p>The renovation to Penn’s squash courts improved the area’s
              circulation and connectivity and enhanced the spectator experience by
              relocating columns, renovating mezzanine seating, and updating lighting
              and design features.
            </p>

          </div>
          <div className="second last">
            <Link to="#"><h2>Penn Ice Rink</h2></Link>
            <p>The Penn Ice Rink at the Class of 1923 Arena has been serving the University
              and local communities for more than 45 years. The Rink is home to collegiate
              hockey teams, as well as numerous youth, scholastic, and senior hockey teams
              throughout the Philadelphia region.
            </p>

          </div>

        </div>

        <div className="fifth-container">
          <div className="head">
            <h1>Explore Life at Penn</h1>
          </div>

          <div className="buttons-a">
            <button className="b-1">ARTS & CULTURE</button>
            <button className="b-1">COMMUNITY INVOLVEMENT</button>
            <button className="b-1">DIVERSITY</button>
            <button className="b-1">GROUPS AND ORGANIZATION</button>
            <button className="b-1">HEALTH AND WELLNESS</button>
            <button className="b-1">HOUSING AND DINING</button>
            <button className="b-1">PENN & PHILADELPHIA</button>
            <button className="b-1">SAFETY & SECURITY</button>
            <button className="b-1">SPIRITUALITY & RELIGION</button>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Athletics;

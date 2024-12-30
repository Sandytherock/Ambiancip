import React from 'react'
import './Facts.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
function Facts() {
  return (
    <>
      <Header />
      <div className='about-container'>
        <div className='breadcrumb'>
          <div className='breadcrumb-item'>HOME</div>
          <div className='breadcrumb-item'>/</div>
          <div className='breadcrumb-item'>ABOUT</div>
          <div className='breadcrumb-item'>/</div>
          <div className='breadcrumb-item'>FACTS</div>
        </div>

        <div className='university'>
          <h1>Facts</h1>
        </div>
        <p className='p'>The University of Pennsylvania by the numbers: enrollment, tuition, employment, faculty size, annual budget, and more.</p>



        <div className='student'>
          <h2>Students (Fall 2023)</h2>
        </div>
        <div class="container-facts">
          <div class="card">
            <div class="number">23,948</div>
            <div class="label">Full-time</div>
          </div>

          <div class="card">
            <div class="number">4,763</div>
            <div class="label">Part-time</div>
          </div>

          <div class="card">
            <div class="number">28,711</div>
            <div class="label">Total Students</div>
          </div>

          <div class="card">
            <div class="number">10,610</div>
            <div class="label">Full-time Undergraduate</div>
          </div>

          <div class="card">
            <div class="number">13,338</div>
            <div class="label">Full-time Graduate/Professional</div>
          </div>
        </div>


        <div className='virtual-tour-sectionul'>
          <div className="text-containerul">
            <h2 className='underul'>Undergraduate Admissions (Fall 2023)</h2>
            <p>Penn received 59,465 applications for admission to the Class of 2027. Of those applicants, 3,489, or 6 percent, were offered admission. Ninety-four percent of the students admitted for Fall 2023 came from the top 10 percent of their high school graduating class. The middle 50% of scores, as well as the median scores, on each of the two SAT components, are as follows:</p>
            <ul className='ulul' style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li className='liul'>SAT Evidence-based Reading + Writing component: 740 to 770, with a median of 760</li>
              <li className='liul'>SAT Math component: 770 to 800, with a median of 790</li>
            </ul>
            <button className='Admissionsul'>ADMISSIONS</button>
          </div>
          <div className='big-boxul'>
            <h1 className='numul'>2,416</h1>
            <p className='stuul'>Students matriculated into this year's freshman class.</p>
          </div>
        </div>


        <div className='undergraduateGradu'>
          <h2 className='gra'>Undergraduate Graduation Rate</h2>
          <div class="container-facts">
            <div class="card">
              <div class="number">97%</div>
              <div class="label">6-year graduation rate for Penn undergraduates.</div>
            </div>

            <div class="card">
              <div class="number">96%</div>
              <div class="label">6-year graduation rate for Penn undergraduates who are underrepresented minorities.</div>
            </div>

            <div class="card">
              <div class="number">95%</div>
              <div class="label">6-year graduation rate for recipients of Pell grants.</div>
            </div>

            <div class="card">
              <div class="number"></div>
              <div class="label"></div>
            </div>
          </div>
        </div>

        <div className='virtual-tour-sectionnew'>
          <div className="text-containernew">
            <h2>To Penn’s Class of 2024: ‘The world needs you’</h2>
            <p>The University celebrated graduating students during the 268th Commencement.</p>
            <a href="#" className='buttonvirtualnew'>LEARN MORE</a>
          </div>
          <img src="https://www.upenn.edu/sites/default/files/styles/card_3x2/public/2024-05/commencement-2024.jpeg?h=75ed424a&itok=hR_KGztz" alt="Penn Virtual Tour" />
        </div>



        <div className='virtual-tour-sectionsecond'>
          <div className="text-containersecond">
            <h2 className='undersecond'>Internationalism (Fall 2023)</h2>
            <p>A total of 13,309 international students applied for admission to Penn’s undergraduate schools for Fall 2023 and 419 (3.1 percent) received admissions offers. Thirteen percent of the first-year class is international students. Penn had 6,887 international students enrolled at all levels in Fall 2023.</p>
            <button className='Admissionssecond'>INTERNATIONAL APPLICANTS</button>
            <img src="https://www.upenn.edu/sites/default/files/styles/default/public/2020-12/world-map.png?itok=M0WEvWiV" alt="" />
          </div>
          <div className='big-boxsecond'>

            <p className='he'>Of the international students enrolled in the Class of 2027</p>
            <p className='hw'>16%</p>
            <p className='h'>from Africa and the Middle East.</p>
            <p className='hw'>35%</p>
            <p className='h'>from Asia.</p>
            <p className='hw'>4%</p>
            <p className='h'>from Australia and the Pacific.</p>
            <p className='hw'>11%</p>
            <p className='h'>from Central and South America and the Caribbean.</p>
            <p className='hw'>23%</p>
            <p className='h'>from Europe.</p>

          </div>
        </div>


        <div className='undergraduateGradunew'>
          <h2 className='granew'>Study Abroad</h2>
          <div class="containernew">
            <div class="cardnew">
              <div class="numbernew">1st</div>
              <div class="labelnew">among the Ivy League schools in number of students studying abroad.</div>
            </div>

            <div class="cardnew">
              <div class="numbernew">10th</div>
              <div class="labelnew">nationwide among doctoral/research institutions in number of students studying abroad (Institute of International Education, 2020).</div>
            </div>

            <div class="cardnew">
              <div class="numbernew">1,434</div>
              <div class="labelnew">Penn US Citizen and Permanent Resident students participated in study abroad programs for academic credit in 2019-2020.</div>
            </div>
            <div class="cardnew">
              <div class="numbernew">49</div>
              <div class="labelnew">Countries in which Penn undergraduate and graduate/professional students earned academic credit in academic year 2019-2020.</div>
            </div>
          </div>
          <button className='Admissionssecondnew'>International Programs</button>
        </div>




        <div className='virtual-tour-sectionthird'>
          <div className="text-containerthird">
            <h2 className='underthird'>Diversity (Fall 2023)</h2>

            <div class="containernewthird">
              <div class="cardnewthird">
                <div class="numbernewthird">62%</div>
                <div class="labelnewthird">of those accepted for admission to the Class of 2027 identify as Black, Hispanic, Asian, or Native American.</div>
              </div>

              <div class="cardnewthird">
                <div class="numbernewthird">56%</div>
                <div class="labelnewthird">of all currently enrolled students are women.</div>
              </div>
            </div>

            <button className='Admissionsthird'>Diversity at Penn</button>
          </div>
          <div>
            <img src="https://www.upenn.edu/sites/default/files/styles/default/public/2020-11/wysiwyg-3.jpg?itok=a2-Z7f_3" alt="Penn Virtual Tour" />
          </div>
        </div>


        <div className='virtual-tour-sectionnewdouble'>
          <div className="text-containernewdouble">
            <h4>PENN TODAY</h4>
            <h2>The Singh Center for Nanotechnology</h2>
            <p>Since its founding, the Center’s multidisciplinary approach has been a strength, where researchers from Penn Engineering, Arts & Sciences, and more come together in one space.</p>
            <a href="#" className='buttonvirtualnewdouble'>LEARN MORE</a>
          </div>
          <img src="https://www.upenn.edu/sites/default/files/styles/card_3x2/public/2023-11/singh-nano-clean-room-022x.jpg?h=cf885bce&itok=oPxxOT_A" />
        </div>


        <div className='virtual-tour-sectionnewdoublenew'>
          <div className="text-containernewdoublenew">
            <h2>Penn celebrates operation and benefits of largest solar power project in Pennsylvania</h2>
            <p>Solar production has begun at the Great Cove I and II facilities in central Pennsylvania, the equivalent of powering 70% of the electricity demand from Penn’s academic campus and health system in the Philadelphia area.</p>
            <a href="#" className='buttonvirtualnewdoublenew'>LEARN MORE</a>
          </div>
          <img src="https://www.upenn.edu/sites/default/files/styles/card_3x2/public/2024-03/solar-panel-farm-aerial_0.jpg?h=7a007c65&itok=L_Tmo9yI" />
        </div>


        <div className='virtual-tour-sectionsecondthird'>
          <div className="text-containersecondthird">
            <h2 className='undersecondthird'>Athletics and Recreation</h2>
            <p>A charter member of the Ivy League, Penn offers intercollegiate competition for men in 17 sports, including baseball, basketball, cross country, fencing, football, sprint football, golf, lacrosse, heavyweight rowing, lightweight rowing, soccer, squash, swimming, diving, tennis, indoor track, outdoor track, and wrestling. It offers intercollegiate competition for women in 16 sports, including basketball, cross country, field hockey, fencing, golf, gymnastics, lacrosse, rowing, soccer, softball, squash, swimming, and diving, tennis, indoor track, outdoor track, and volleyball. During the 2022-23 academic year, there were 2,400 team members participating in 17 leagues and tournaments. 1,217 students were members of 36 active club sports.</p>

            <div className='big-boxsecondfour'>
              <p className='hw'>2400</p>
              <p className='he'>team members participating in 17 intramural leagues and special events.</p>

            </div>
          </div>
          <div className="big-boxsecondthird">
            <img src="https://www.upenn.edu/sites/default/files/styles/card_3x2/public/2024-05/penn-relays-baton-086x.jpg?h=75ed424a&itok=eP1cKZBu" alt="" />
            <p className="Q">Quakers make history at 128th running of Penn Relays</p>
            <p className="P">Penn athletes had several noteworthy performances on the track and in the field at the Relays at Franklin Field.</p>
            <button className="Admissionssecondthird">VISIT PENN TODAY</button>
          </div>
        </div>


        <div className='students'>
          <h2>Campus Size (Fall 2023)</h2>
        </div>
        <div class="about-section">
          <div class="sustainability">
            <img src="https://www.upenn.edu/sites/default/files/styles/grid_card_portrait/public/2020-12/college-hall-summer-student.jpg?h=c44228f8&itok=f6XDUA8I" alt="" />
            <p>West Philadelphia campus: 299 acres, 220 buildings (excluding hospital).</p>
          </div>

          <div class="history">
            <img src="https://www.upenn.edu/sites/default/files/styles/grid_card_portrait/public/2020-12/new-bolton-center.jpg?h=5f8aac59&itok=WN2WpZ0y" alt="" />
            <p>New Bolton Center: 694 acres, 123 buildings.</p>
          </div>

          <div class="visit">
            <img src="https://www.upenn.edu/sites/default/files/styles/grid_card_portrait/public/2020-12/morris-aboretum-spring.jpg?h=bfcbd126&itok=ihvlwAuT" alt="" />
            <p>Morris Arboretum: 92 acres, 32 buildings.</p>
          </div>
        </div>

        <div className='undergraduateGradunewfirst'>
          <h2 className='granewfirst'>Tuition, Annual Budget, and Payroll</h2>
          <div class="containernewfirst">
            <div class="cardnewfirst">
              <div class="numbernewfirst">$66,104</div>
              <div class="labelnewfirst">Undergraduate tuition and fees for the academic year 2023-24            </div>
            </div>

            <div class="cardnewfirst">
              <div class="numbernewfirst">$18,496</div>
              <div class="labelnewfirst">Room and board fees for the academic year 2023-24            </div>
            </div>

            <div class="cardnewfirst">
              <div class="numbernewfirst">$14.4B</div>
              <div class="labelnewfirst">Total university budget (GAAP reporting basis) (fiscal year 2024)            </div>
            </div>
            <div class="cardnewfirst">
              <div class="numbernewfirst">$8.17B</div>
              <div class="labelnewfirst">Budgeted payroll (including benefits) (fiscal year 2024)            </div>
            </div>
          </div>
        </div>



        <div className='virtual-tour-sectionsecondthirdfour'>
          <div className="text-containersecondthirdfour">
            <h2 className='undersecondthirdfour'>Community Service</h2>
            <p>Nearly 14,000 University students, faculty, and staff participate in more than 300 Penn volunteer and community service programs and more than 70 academically based community service courses that are taught each year. The courses enroll approximately 1,800 undergraduate and graduate Penn students each year. Community service at Penn is primarily coordinated by Civic House (student volunteerism and advocacy), Fox Leadership, the Barbara and Edward Netter Center for Community Partnerships (coordinates academically based community service), and Penn VIPS (Volunteers in Public Service—faculty and staff volunteers), which is a part of the Netter Center for Community Partnerships.</p>

            <div className='big-boxsecondfourfour'>
              <p className='hw'>14,000</p>
              <p className='he'>University students, faculty, and staff participate in more than 300 Penn volunteer and community service programs and more than 70 academically based community service courses that are taught each year.</p>

            </div>
          </div>
          <div className="big-boxsecondthirdfour">
            <img src="https://www.upenn.edu/sites/default/files/styles/card_3x2/public/2021-01/penn-med-cares.jpg?h=b66937a8&itok=_Zh18Jc6" alt="" />
            <p className="Q">Increasing community impact through Penn Medicine CAREs grant program</p>
            <p className="P">Outside of hospitals and clinics, Penn Medicine physicians, nurses, staff, and students are serving their neighborhoods through volunteerism.</p>
            <button className="Admissionssecondthirdfour">Learn More</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Facts

import React, { useState } from 'react';
import './Faq.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: 'Where is Penn located?',
            answer: 'Penn’s 299-acre urban campus is located in the West Philadelphia neighborhood known as University City, just across the Schuylkill River from Center City Philadelphia. Penn also maintains the 23-acre Pennovation Works campus in Grays Ferry, and sites in San Francisco, Washington, D.C., and Beijing. The Morris Arboretum is located in Chestnut Hill and Penn Vet’s New Bolton Center is in Kennett Square.'
        },
        {
            question: 'Is Penn a state university?',
            answer: 'No. The University of Pennsylvania is a private Ivy League institution with no connection to Pennsylvania State University.'
        },
        {
            question: 'How much does it cost to attend Penn?',
            answer: 'Tuition and fees for the 2023-24 academic year are $66,104, room and board fees total $18,496. Visit the Student Registration & Financial Services website for more information on paying for a Penn education.'
        },
        {
            question: 'How do I apply to Penn?',
            answer: 'Penn’s Undergraduate Admissions website provides complete information on the admissions process and how to prepare to apply to Penn.Graduate and professional program admissions are handled individually by each of Penn’s 12 graduate and professional schools. Visit the site of the school you wish to attend for information.'
        },
        {
            question: 'What are the average class rank and test scores for students admitted to Penn?',
            answer: 'Penn received 59,465 applications for admission to the Class of 2027. Of those applicants, 3,489 or 6 percent, were offered admission. Ninety-four percent of the students admitted for Fall 2023 came from the top 10 percent of their high school graduating class. The middle 50% of scores, as well as the median scores, on each of the two SAT components, are as follows: SAT Evidence-based Reading + Writing component: 740 to 770, with a median of 760SAT Math component: 770 to 800, with a median of 7902,416 students matriculated into this years freshman class.'
        },
        {
            question: ' What kind of financial aid do you offer?',
            answer: 'Penn’s grant-based undergraduate financial aid program meets 100% of demonstrated financial need with grants and work-study funding, making it possible for students to graduate with a world-class undergraduate degree debt-free. At the graduate level, each of the graduate and professional schools offers program-specific financial aid and counseling on federal and private loans. Whatever your circumstances, Penn has programs designed to make attending affordable.'
        },
        {
            question: ' Where can I find facts and figures?',
            answer: 'Our Facts & Figures page has statistics on student enrollment, faculty size, faculty honors, athletics, employment, endowment and more.'
        },
        {
            question: '  Where can I find a map of the campus?',
            answer: 'Theres an interactive map available online.'
        },
        {
            question: ' Where can I learn more Penns history?',
            answer: 'Visit the University Archives website.'
        },
        {
            question: '  What are your colors and mascot?',
            answer: 'Our colors are red and blue; our sports teams are nicknamed the Quakers, and a Quaker mascot performs at football games.'
        },
        {
            question: '  What does your motto mean?',
            answer: 'Our motto, Leges sine moribus vanae, translates to “Laws without morals are useless.”'
        },
        // Add other FAQs here if needed
    ];

    const toggleAnswer = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <>
            <Header />
            <div className='faq-main'>
                <div className='breadcrumb'>
                    <div className='breadcrumb-item'>HOME</div>
                    <div className='breadcrumb-item'>/</div>
                    <div className='breadcrumb-item'>ABOUT</div>
                    <div className='breadcrumb-item'>/</div>
                    <div className='breadcrumb-item'>FREQUENTLY ASKED QUESTIONS</div>
                </div>

                <div className='sp'>
                    <h1>
                        <span>Frequently Asked Questions</span>
                    </h1>
                    <p className='p'>A useful reference outlining the rules and regulations that govern the University.</p>
                </div>

                <div className='faq-container'>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAnswer(index)}
                        >
                            <h3 className='faq-question'>
                                <FontAwesomeIcon
                                    icon={activeIndex === index ? faAngleUp : faAngleDown}
                                    className={`faq-icon ${activeIndex === index ? 'active-icon' : ''}`}
                                />
                                {faq.question}
                            </h3>
                            {activeIndex === index && <p className='faq-answer'>{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Faq;

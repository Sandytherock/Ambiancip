import React from 'react'
import './Policies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Policies() {
    return (
        <>
        <Header/>
            <div className='first'>
                <div className='breadcrumb'>
                    <div className='breadcrumb-item'>HOME</div>
                    <div className='breadcrumb-item'>/</div>
                    <div className='breadcrumb-item'>ABOUT</div>
                    <div className='breadcrumb-item'>/</div>
                    <div className='breadcrumb-item'>POLICIES</div>
                </div>

                <div className='contain'>
                    <h1><span>Policies</span></h1>
                </div>

                <p className='pf'>A useful reference outlining the rules and regulations that govern the University.</p>
                <p className='ps'>This page links to important Penn policies and compendia of policies in some areas that affect Penn faculty, staff, students, and the community. For information about policies specific to <span className='pe'> Penn Medicine</span> or one of Penn’s 12 Schools, consult the website of the individual health system or school.</p>


                <div className='university'>
                    <h2 >University Policies</h2>
                </div>
                <div>
                    <h3 className='principle'>Principles of Responsible Conduct</h3>
                    <p className='prin'>Penn’s underlying expectations for the conduct of all University and Health System activity.</p>
                    <h3 className='principle'>Adherence to University Policy</h3>
                    <p className='prin'>Penn’s expectations for employee compliance to laws, policies, and procedures.</p>
                    <h3 className='principle'>Non-Retaliation Policy</h3>
                    <p className='prin'>Information about reporting suspected policy non-compliance and about policies prohibiting retaliation against report claimants.</p>
                    <h3 className='principle'>Conflict of Interest</h3>
                    <p className='prin'>Extramural and institutional policies on what constitutes an employees’ improper benefit from their position of trust at Penn (for research-specific policies, see below).</p>
                    <h3 className='principle'>Use of Penn Name</h3>
                    <p className='prin'>Policies related to the sanctioned use of the University name in official, licensed, and private capacities.</p>
                    <h3 className='principle'>EEO and Affirmative Action</h3>
                    <p className='prin'>Penn’s Nondiscrimination Statement and the University’s policy on Equal Opportunity and Affirmative Action.</p>
                    <h3 className='principle'>Sexual Misconduct (PDF)</h3>
                    <p className='prin'>Code of conduct, available resources, and procedures for resolving complaints of sexual harassment within the unit or at the University level.</p>
                </div>

                <div className='university'>
                    <h2 >Student and Academic Life</h2>
                </div>
                <div>
                    <h3 className='principle'>The Pennbook</h3>
                    <p className='prin'>A collection of policies related to student life at Penn, including the Code of Academic Integrity and the Code of Student Conduct.</p>
                    <h3 className='principle'>Faculty Handbook</h3>
                    <p className='prin'>A set of policies governing faculty life at Penn, including links to policies on frequently searched topics.</p>
                    <h3 className='principle'>Policies on Graduate Education</h3>
                    <p className='prin'>University-wide policies for Ph.D. and research master’s programs.</p>
                </div>


                <div className='university'>
                    <h2 >Research and Sponsored Programs</h2>
                </div>
                <div>
                    <h3 className='principle'>Human Subjects Research</h3>
                    <p className='prin'>The Penn Institutional Review Board’s Standard Operating Policies manual includes details about informed consent and HIPAA authorization, responsibilities of investigators, and more.</p>
                    <h3 className='principle'>Animal Subjects Research</h3>
                    <p className='prin'>Resources include guidelines, policies, and standard operating procedures dictated by Penn’s <span className='pe'> Animal Care and Use Committee </span> and <span className='pe'> University Laboratory Animal Resources</span>.</p>
                    <h3 className='principle'>Conflict of Interest</h3>
                    <p className='prin'>Find information regarding the University’s Research-Related Financial Conflicts of Interest (FCOI) Program.</p>
                    <h3 className='principle'>Sponsored Research Policies</h3>
                    <p className='prin'>Online resources include the Sponsored Projects Handbook; policies related to research, financial operations and sponsors; federal OMB Circulars; and more.</p>
                    <h3 className='principle'>Postdoctoral Fellow Policies</h3>
                    <p className='prin'>Resources include Penn’s Policy for Postdoctoral Fellows and Penn’s Policy for the Appointment of Foreign Nationals Under the Postdoctoral Trainee Program.</p>
                    <h3 className='principle'>Environmental Health & Radiation Safety</h3>
                    <p className='prin'>Covers policies related to <span className='pe'> biological safety</span>,<span className='pe'> chemical waste management</span>, <span className='pe'>laboratory safety</span>, <span className='pe'>laser safety</span>, <span className='pe'>radiation safety</span>, and <span className='pe'> workplace safety</span>.</p>
                    <h3 className='principle'>Research Misconduct</h3>
                    <p className='prin'>Comprehensive policies for <span className='pe'>faculty</span> and for <span className='pe'> non-faculty</span> members of Penn’s research community.</p>
                    <h3 className='principle'>Patents (PDF)</h3>
                    <p className='prin'>Penn’s Patent and Tangible Research Property Policy governs the intellectual property created by faculty, employees, students, and guest scholars of the University.</p>
                </div>

                <div className='university'>
                    <h2 >International</h2>
                </div>
                <div>
                    <h3 className='principle'>Penn Abroad</h3>
                    <p className='prin'>Resources include academic and financial policies and expectations for student participants and their study abroad experience.</p>
                    <h3 className='principle'>International Students and Scholars</h3>
                    <p className='prin'>Find instructions and forms on the full range of requirements for international students and scholars.</p>
                    <h3 className='principle'>Register Your Trip</h3>
                    <p className='prin'>It is mandatory for all Penn students and all Penn faculty and staff traveling with Penn students on Penn-affiliated trips to register their international travel.</p>
                </div>

                <div className='university'>
                    <h2 >Administrative</h2>
                </div>
                <div>
                    <h3 className='principle'>Human Resources Policy Manual</h3>
                    <p className='prin'>The source for all policies related to employment at Penn, including benefits, compensation, performance, recruitment, sick leave, termination, time off, and more.</p>
                    <h3 className='principle'>Financial Policy Manual</h3>
                    <p className='prin'>A reference guide for administrators with financial responsibilities at Penn. The manual delineates responsibility, authority, and accountability in matters such as payroll, gifts, travel, and more.</p>
                    <h3 className='principle'>Computing</h3>
                    <p className='prin'>Computing policies and guidelines for each user of the University’s computing resources. Covers topics from mobile devices to networking and security.</p>
                    <h3 className='principle'>Privacy</h3>
                    <p className='prin'>Policies and materials to guide faculty, staff, and students who work with personal information. Includes policies on FERPA, SSNs, CCTV, and links to Penn’s Confidential Help and Reporting line.</p>
                    <h3 className='principle'>Facilities Management</h3>
                    <p className='prin'>Information on design guidelines and standards for all facilities-related work; safety procedures and protocols; and policies associated with outdoor space, signage, and leasing.</p>
                    <h3 className='principle'>Workday</h3>
                    <p className='prin'>Learn about the policies that govern the use of the University’s human resources and payroll platform.</p>
                </div>

                <div className='university'>
                    <h2 >Safety and Security</h2>
                </div>
                <div>
                    <p className='prin'>Penn policies on <span className='pe'>weapons and other dangerous articles</span>, <span className='pe'>fire safety</span>, <span className='pe'>bicycles</span>, and the use of <span className='pe'> CCTV cameras </span>for safety and security purposes.</p>
                    <p className='prin'>If you have any questions or concerns regarding Penn policies, please contact Penn’s Confidential Reporting and Helpline at 215-P-COMPLY (215-726-6759) or <span className='pe'>visit the 215-P-COMPLY website</span>.</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Policies

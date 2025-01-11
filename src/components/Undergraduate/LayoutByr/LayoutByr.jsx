import React from 'react';
import HeaderByr from '../HeaderByr/HeaderByr';
import SchoolListByr from '../SchoolListByr/SchoolListByr';
import './LayoutByr.css';
import Breadcrumb from '../../ResearchandInnovation/breadcrum/breadcrum';
import styles from '../UndergraduateMainbyr.module.css'
function LayoutByr() {
    const breadcrumbItems = [
        { label: 'HOME', href: '/' },
        { label: 'ACADEMICS', href: '' },
        { label: 'UNDERGRADUATE', href: '/UndergraduateMainbyr' },
      ]

  return (
    <div className="layout-byr">
        <div className={styles.containernews}>
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <HeaderByr />
      <div className="content-byr">
        <SchoolListByr />
        <div className="large-photo-byr">
          <img src="/images/classroom.jpg" alt="Students in a classroom" />
        </div>
      </div>
    </div>
  );
}

export default LayoutByr;


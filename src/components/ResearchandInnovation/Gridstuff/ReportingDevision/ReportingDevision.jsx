import React from 'react';
import { Title } from '../Title/Title';
import { Grid } from '../Grid/Grid';
import { GridItem } from '../GridItem/GridItem';
import './ReportingDevision.css';

export default function ReportingDivisions() {
  const divisions = [
    {
      name: 'Penn Center for Innovation',
      href: '#'
    },
    {
      name: 'Institutional Review Board',
      href: '#'
    },
    {
      name: 'Research Integrity Office',
      href: '#'
    },
    {
      name: 'Environmental Health and Radiation Safety',
      href: '#'
    },
    {
      name: 'Office of Animal Welfare',
      href: '#'
    },
    {
      name: 'University Laboratory Animal Resources',
      href: '#'
    },
    {
      name: 'Office of Research Services',
      href: '#'
    },
    {
      name: 'OVPR Committees',
      href: '#'
    }
  ];

  return (
    <div className="reporting-divisions">
      <Title>Reporting Divisions</Title>
      <Grid>
        {divisions.map((division, index) => (
          <GridItem key={index} href={division.href}>
            {division.name}
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}


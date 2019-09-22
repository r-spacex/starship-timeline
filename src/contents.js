import React from 'react';
import format from 'date-fns/format';
import Image from 'components/Image';
import Link from 'components/Link';
import Video from 'components/Video';

const DATE_FORMAT = 'dd MMM yyyy';
const formatDate = dateString => format(new Date(dateString), DATE_FORMAT);

export default [
  {
    title: `Humans on Mars`,
    date: `2024`,
    content: `SpaceX's goal is to land two cargo and two crewed Starships on Mars in 2024.`,
    future: true
  },
  {
    title: `#dearMoon`,
    date: `2023`,
    content: (
      <>
        Yasuka Maezawa, a Japanese billionaire, has already bought the first Starship crewed flight{' '}
        <Link href="https://dearmoon.earth/" target="_blank" rel="noopener noreferer">
          to go around the Moon with artists
        </Link>
        .
      </>
    ),
    future: true
  },
  {
    title: `Cargo landing on Mars`,
    date: `2022`,
    content: `Two cargo Starships will be launched towards Mars to prove that Earth landing technologies also work on Mars.`,
    future: true
  },
  {
    title: `First customer launch`,
    date: `2021`,
    content: `SpaceX is already in talks with three potential customers for a commercial satellite launch in 2021.`,
    future: true
  },
  {
    title: `First orbital launch`,
    date: `2020`,
    content: `SpaceX will test Starship in Earth's upper atmosphere, to validate a heat shielding technology and to prove that second stages
      can also be safely landed and reused.`,
    future: true
  },
  {
    title: `Starhopper 150m hop`,
    date: formatDate('2019-08-27'),
    content: (
      <>
        The Starhopper prototype made a 150 meters hop, allowing SpaceX to validate the engine control and landing
        algorithms.
        <Video youtubeId="bYb3bfA6_sQ" />
      </>
    )
  },
  {
    title: `Starhsip orbital prototypes construction starts`,
    date: formatDate('2019-05-14'),
    content: `SpaceX is currently building two high fidelity Starship prototypes: one in Florida, one in Texas. The first team
      to reach orbit and come back on land is the winner.`
  },
  {
    title: `Starhopper construction starts`,
    date: formatDate('2018-12-20'),
    content: (
      <>
        SpaceX contracted a water tower company to rapidly assemble a working Starship prototype to test its Raptor
        engine in real flight conditions.
        <Image filename="starhopper.jpg" />
      </>
    )
  },
  {
    title: `TODO`,
    date: `2012`,
    content: `Fill with more content :)`
  }
];

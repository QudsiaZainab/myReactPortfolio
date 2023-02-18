import React from 'react';
import './style.css';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from 'react-icons/gr';

export const SidebarData = [
  {
    title: 'Home',
    path: '#Home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '#About',
    icon: <BsIcons.BsFillExclamationOctagonFill/>,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '#Projects',
    icon: <GrIcons.GrProjects />,
    cName: 'nav-text'
  },
  {
    title: 'Contact Me',
    path: '#contactMe',
    icon: <IoIcons.IoIosContact />,
    cName: 'nav-text'
  }
];

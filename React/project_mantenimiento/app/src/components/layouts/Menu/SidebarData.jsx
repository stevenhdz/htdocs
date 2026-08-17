import React from 'react';
import { FaHouse, FaToolbox } from 'react-icons/fa6';


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaHouse />,
        cName: 'nav-text'
    },
    {
        title: 'Config',
        path: '/configure',
        icon: <FaToolbox />,
        cName: 'nav-text'
    },
];
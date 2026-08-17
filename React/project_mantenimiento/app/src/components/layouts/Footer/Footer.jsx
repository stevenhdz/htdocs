import React from 'react';
import './Footer.css'
import { TitleComponent } from '../../Title/TitleComponent';

function Footer() {
    return (
        <footer>
            <TitleComponent title={'Derechos de autor © 2023 Mi Aplicación React'} size={'h3'} style={{ color: 'white' }} />
        </footer>
    );
}

export default Footer;
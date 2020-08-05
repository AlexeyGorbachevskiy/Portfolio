import React from 'react';
import style from './Footer.module.css';

function Footer() {
    return (
        <div className={style.footer_section}>
            <div className={style.container}>
                <h2>Alexey Gorbachevskiy</h2>
                <div className={style.networks_wrapper}>
                    <a href='#'>Facebook</a>
                    <a href='#'>Twitter</a>
                    <a href='#'>Linkedin</a>
                    <a href='#'>VK</a>
                </div>
                <p>© 2020. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
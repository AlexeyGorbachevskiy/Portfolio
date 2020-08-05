import React from 'react';
import style from './Main.module.css';

function Main() {
    return (
        <section className={style.main_section}>
            <div className={style.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Alexey Gorbachevskiy</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </section>
    );
}

export default Main;
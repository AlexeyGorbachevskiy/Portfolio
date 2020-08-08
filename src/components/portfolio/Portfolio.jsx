import React from 'react';
import style from './Portfolio.module.css';
import PageTitle from "../pageTitle/PageTitle";


function Portfolio() {
    return (
        <div className={style.portfolio_container}>
            <div className={style.content_container}>
                <PageTitle title={'Portfolio'} icon={'lnr lnr-briefcase'}/>
            </div>
        </div>
    );
}

export default Portfolio;
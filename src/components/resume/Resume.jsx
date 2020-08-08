import React from 'react';
import style from './Resume.module.css';
import PageTitle from "../pageTitle/PageTitle";


function Resume() {
    return (
        <div className={style.resume_container}>
            <div className={style.content_container}>
                <PageTitle title={'My Resume'} icon={'lnr lnr-license'}/>
            </div>
        </div>
    );
}

export default Resume;
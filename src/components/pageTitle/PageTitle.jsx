import React from 'react';
import style from './PageTitle.module.css';

function PageTitle() {
    return (
        <div className={style.page_title_container}>
            <span className={style.icon}>
                <i class='lnr lnr-user'/>
            </span>
            <h2>About Me.</h2>
        </div>
    )
}


export default PageTitle;
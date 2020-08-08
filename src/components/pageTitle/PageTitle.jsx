import React from 'react';
import style from './PageTitle.module.css';

function PageTitle(props) {
    return (
        <div className={style.page_title_container}>
            <span className={style.icon}>
                <i class={props.icon}/>
            </span>
            <h2>{props.title}.</h2>
        </div>
    )
}


export default PageTitle;
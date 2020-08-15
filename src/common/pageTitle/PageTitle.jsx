import React from 'react';
import style from './PageTitle.module.scss';

function PageTitle(props) {
    return (
        <div className={style.page_title_container}>
            <span className={style.icon}>
                <i style={{'color': props.mainColor}} className={props.icon}/>
            </span>
            <h2 style={{'color': props.mainColor}}>{props.title}.</h2>
        </div>
    )
}


export default PageTitle;
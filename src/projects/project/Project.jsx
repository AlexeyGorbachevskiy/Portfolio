import React from 'react';
import style from './Project.module.css';

function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.icon}>
                <a href="#">See</a>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}

export default Project;
import React from 'react';
import style from './Skill.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={style.icon_wrapper}>
                {/*<i class={`fa ${props.icon}`}/>*/}
                <FontAwesomeIcon className={style.icon} icon={props.icon} />
            </div>
            <div className={style.icon_text}>
                <h3>{props.icon_title}</h3>
                <p className={style.icon_description}>
                    {props.icon_text}
                </p>
            </div>
        </div>
    );
}

export default Skill;
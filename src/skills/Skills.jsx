import React from 'react';
import style from './Skills.module.css';
import Skill from "./skill/Skill";

function Skills() {
    return (
        <section className={style.skills_section}>
            <div className={style.container}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'Some Title'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit,'}
                    />
                    <Skill title={'Some Title'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit,'}
                    />
                    <Skill title={'Some Title'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit,'}
                    />
                    <Skill title={'Some Title'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit,'}
                    />




                </div>
            </div>
        </section>
    );
}

export default Skills;
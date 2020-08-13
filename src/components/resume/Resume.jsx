import React from 'react';
import style from './Resume.module.css';
import PageTitle from "../pageTitle/PageTitle";
import Skill from "./Skill/Skill";


function Resume() {

    const skills = [
        {
            icon: ['fab', 'js-square'],
            iconTitle: 'Javascript & Typescript',
            iconText: 'Types, ES6, Scope, Promises, Event Loop'
        },
        {icon: ['fab', 'react'], iconTitle: 'React & Redux', iconText: 'Hooks, ContextAPI, React-Redux, Thunks, HOC'},
        {icon: ['fa', 'code'], iconTitle: 'HTML & CSS', iconText: 'FlexBox, Grid, BEM, CSS Modules, Sass/Scss.'},

        {icon: ['fa', 'language'], iconTitle: 'English', iconText: 'Intermediate (B1) level'},
        {icon: ['fab', 'git-square'], iconTitle: 'GIT', iconText: 'Working Experience'},
        {icon: ['fab', 'quora'], iconTitle: 'Quality Assurance', iconText: 'ISTQB Certified Tester 2020'},

    ]

    const skill = skills.map(skillElement => {
        return (
            <Skill icon={skillElement.icon}
                   icon_title={skillElement.iconTitle}
                   icon_text={skillElement.iconText}
            />
        )
    })

    return (
        <div className={style.resume_container}>
            <div className={style.content_container}>
                <PageTitle title={'My Resume'} icon={'lnr lnr-license'}/>

                <div className={style.main_wrapper}>

                    <div className={style.content_wrapper}>

                        <div className={style.subheader}>
                            <h3>My Skills</h3>
                        </div>

                        <div className={style.content}>
                            {skill}
                        </div>


                    </div>

                </div>

            </div>
        </div>
    );
}

export default Resume;
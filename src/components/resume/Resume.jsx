import React from 'react';
import style from './Resume.module.scss';
import PageTitle from "../../common/pageTitle/PageTitle";
import Skill from "./Skill/Skill";
import styled from "styled-components";
import PageSubTitle from "../../common/pageSubTitle/PageSubTitle";


function Resume(props) {

    const skills = [
        {
            icon: ['fab', 'js-square'],
            iconTitle: 'Javascript & Typescript',
            iconText: 'Types, ES6, Scope, Closures, DOM, Promises, Event Loop'
        },
        {icon: ['fab', 'react'], iconTitle: 'React & Redux', iconText: 'Hooks, Context API, React-Redux, Thunks, HOC'},
        {icon: ['fa', 'code'], iconTitle: 'HTML & CSS', iconText: 'FlexBox, Grid, BEM, Pixel Perfect, Figma, CSS Modules, Sass/Scss.'},

        {icon: ['fa', 'language'], iconTitle: 'English', iconText: 'Intermediate (B1) level'},
        {icon: ['fab', 'git-square'], iconTitle: 'GIT', iconText: 'Working Experience'},
        {icon: ['fab', 'quora'], iconTitle: 'Quality Assurance', iconText: 'ISTQB Certified Tester 2020'},

    ]

    const skill = skills.map(skillElement => {
        return (
            <Skill mainColor={props.mainColor}
                   icon={skillElement.icon}
                   icon_title={skillElement.iconTitle}
                   icon_text={skillElement.iconText}
            />
        )
    })



    return (
        <div className={style.resume_container}>
            <div className={style.content_container}>
                <PageTitle mainColor={props.mainColor} title={'My Resume'} icon={'lnr lnr-license'}/>

                <div className={style.main_wrapper}>

                    <div className={style.content_wrapper}>

                        <PageSubTitle subTitle={'My Skills'} mainColor={props.mainColor}/>

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

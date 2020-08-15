import React from 'react';
import style from './Resume.module.scss';
import PageTitle from "../../common/pageTitle/PageTitle";
import Skill from "./Skill/Skill";
import styled from "styled-components";


function Resume(props) {

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
            <Skill mainColor={props.mainColor}
                   icon={skillElement.icon}
                   icon_title={skillElement.iconTitle}
                   icon_text={skillElement.iconText}
            />
        )
    })


    const SubheaderH3 = styled.div`
        border-bottom:  2px solid ${props => props.mainColor};
        
        &::before, &::after {
            background: ${props => props.mainColor};       
        }
    `

    return (
        <div className={style.resume_container}>
            <div className={style.content_container}>
                <PageTitle mainColor={props.mainColor} title={'My Resume'} icon={'lnr lnr-license'}/>

                <div className={style.main_wrapper}>

                    <div className={style.content_wrapper}>

                        <div className={style.subheader}>
                            {/*<h3 style={{'border-bottom-color': props.mainColor}}>My Skills</h3>*/}
                            <SubheaderH3 mainColor={props.mainColor} className={style.h3}>My Skills</SubheaderH3>
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
import React from 'react';
import style from './Portfolio.module.scss';
import PageTitle from "../../common/pageTitle/PageTitle";
import Project from "./project/Project";
import chatter from '../../assets/img/projects/chatter.png'
import todolist from '../../assets/img/projects/todolist.png'
import counter from '../../assets/img/projects/counter.png'
import weather from '../../assets/img/projects/weather_informer.png'
import tasks from '../../assets/img/projects/react_tasks.png'
import styled from "styled-components";

function Portfolio(props) {

    const chatterStyle = {background: `url(${chatter})`};
    const todoListStyle = {background: `url(${todolist})`};
    const counterStyle = {background: `url(${counter})`};
    const weatherStyle = {background: `url(${weather})`};
    const tasksStyle = {background: `url(${tasks})`};

    const projects = [
        {
            imageStyle: chatterStyle,
            description: 'some text gfgfghfghfhf fgf h fg',
            projectName: 'Social Network',
            link: 'https://alexeygorbachevskiy.github.io/Chatter/'
        },
        {
            imageStyle: todoListStyle,
            description: 'some text gfgfghfghfhf fgf h fg',
            projectName: 'TodoList',
            link: '#'
        },
        {
            imageStyle: counterStyle,
            description: 'some text gfgfghfghfhf fgf h fg',
            projectName: 'Counter',
            link: '#'
        },
        {
            imageStyle: weatherStyle,
            description: 'some text gfgfghfghfhf fgf h fg',
            projectName: 'Weather Informer',
            link: '#'
        },
        // {
        //     imageStyle: tasksStyle,
        //     description: 'some text gfgfghfghfhf fgf h fg',
        //     projectName: 'React Tasks',
        //     link: 'https://alexeygorbachevskiy.github.io/React_Tasks/'
        // },
    ];

    const project = projects.map(projectsElement => {
        return (
            <Project
                mainColor={props.mainColor}
                imageStyle={projectsElement.imageStyle}
                description={projectsElement.description}
                projectName={projectsElement.projectName}
                link={projectsElement.link}
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
        <div className={style.portfolio_container}>
            <div className={style.content_container}>
                <PageTitle mainColor={props.mainColor} title={'Portfolio'} icon={'lnr lnr-briefcase'}/>

                <div className={style.subheader}>
                    {/*<h3 style={{'border-bottom-color': props.mainColor}}>My Projects</h3>*/}
                    <SubheaderH3 mainColor={props.mainColor} className={style.h3}>My Skills</SubheaderH3>
                </div>

                <div className={style.main_wrapper}>

                    {project}

                </div>
            </div>
        </div>
    );
}

export default Portfolio;
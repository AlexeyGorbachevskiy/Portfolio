import React from 'react';
import style from './Portfolio.module.scss';
import PageTitle from "../../common/pageTitle/PageTitle";
import Project from "./project/Project";
import chatter from '../../assets/img/projects/chatter.png'
import todolist from '../../assets/img/projects/todolist.png'
import counter from '../../assets/img/projects/counter.png'
import weather from '../../assets/img/projects/weather_informer.png'
import tasks from '../../assets/img/projects/react_tasks.png'
import cards from '../../assets/img/projects/cards.png'
import styled from "styled-components";
import PageSubTitle from "../../common/pageSubTitle/PageSubTitle";

function Portfolio(props) {

    const chatterStyle = {background: `url(${chatter})`};
    const todoListStyle = {background: `url(${todolist})`};
    const cardsStyle = {background: `url(${cards})`};
    const counterStyle = {background: `url(${counter})`};
    const weatherStyle = {background: `url(${weather})`};
    const tasksStyle = {background: `url(${tasks})`};

    const projects = [
        {
            imageStyle: cardsStyle,
            description: 'In progress',
            projectName: 'Party Cards',
            link: 'https://alexeygorbachevskiy.github.io/PartyCards/'
        },
        {
            imageStyle: todoListStyle,
            description: 'Typescript, Hooks, Jest (Tdd), Redux, StoryBook, Material UI, Axios ',
            projectName: 'TodoList',
            link: 'https://alexeygorbachevskiy.github.io/ToDoList/'
        },
        {
            imageStyle: chatterStyle,
            description: 'Typescript, Hooks, Axios, Class/Func components, HOC(s), Redux-Form, React-Redux, Context API',
            projectName: 'Social Network',
            link: 'https://alexeygorbachevskiy.github.io/Chatter/'
        },

        {
            imageStyle: counterStyle,
            description: 'Typescript, Hooks, Function Components, CSS Modules',
            projectName: 'Counter',
            link: 'https://alexeygorbachevskiy.github.io/Counter/'
        },
        {
            imageStyle: weatherStyle,
            description: 'Javascript, Hooks, Fetch API, Function Components, CSS Modules',
            projectName: 'Weather Informer',
            link: 'https://alexeygorbachevskiy.github.io/Weather_Informer/'
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


    return (
        <div className={style.portfolio_container}>
            <div className={style.content_container}>
                <PageTitle mainColor={props.mainColor} title={'Portfolio'} icon={'lnr lnr-briefcase'}/>

                <PageSubTitle subTitle={'My Projects'} mainColor={props.mainColor}/>

                <div className={style.main_wrapper}>

                    {project}

                </div>
            </div>
        </div>
    );
}

export default Portfolio;

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
import webdev from '../../assets/img/projects/webdev.png'
import cartesian from '../../assets/img/projects/cartesian.png'
import styled from "styled-components";
import PageSubTitle from "../../common/pageSubTitle/PageSubTitle";

function Portfolio(props) {

    const chatterStyle = {background: `url(${chatter})`};
    const todoListStyle = {background: `url(${todolist})`};
    const cardsStyle = {background: `url(${cards})`};
    const counterStyle = {background: `url(${counter})`};
    const weatherStyle = {background: `url(${weather})`};
    const webdevStyle = {background: `url(${webdev})`};
    const cartesianStyle = {background: `url(${cartesian})`};
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
            description: 'Typescript, Hooks, Jest (Tdd), Redux, Formik, StoryBook, Material UI, Axios ',
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
            imageStyle: cartesianStyle,
            description: 'JavaScript,Webpack, Canvas, Local Storage',
            projectName: 'Cartesian Coordinates',
            link: 'https://alexeygorbachevskiy.github.io/cartesian-coordinates/'
        },

        {
            imageStyle: counterStyle,
            description: 'Local Storage, Typescript, Hooks, Function Components, CSS Modules',
            projectName: 'Counter',
            link: 'https://alexeygorbachevskiy.github.io/Counter/'
        },
        {
            imageStyle: weatherStyle,
            description: 'Javascript, Hooks, Fetch API, Function Components, CSS Modules',
            projectName: 'Weather Informer',
            link: 'https://alexeygorbachevskiy.github.io/Weather_Informer/'
        },
        {
            imageStyle: webdevStyle,
            description: 'Pixel Perfect, Figma. Layout for 1600px screen only. Task description: https://github.com/AlexeyGorbachevskiy/webdev',
            projectName: 'WebDev',
            link: 'https://alexeygorbachevskiy-webdev.netlify.app/'
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

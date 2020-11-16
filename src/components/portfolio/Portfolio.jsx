import React from 'react';
import style from './Portfolio.module.scss';
import PageTitle from "../../common/pageTitle/PageTitle";
import Project from "./project/Project";
import puzzle from '../../assets/img/projects/puzzle2.png';
import chatter from '../../assets/img/projects/chatter.png';
import todolist from '../../assets/img/projects/todolist.png';
import counter from '../../assets/img/projects/counter.png';
import weather from '../../assets/img/projects/weather_informer.png';
import tasks from '../../assets/img/projects/react_tasks.png';
import cards from '../../assets/img/projects/cards.png';
import webdev from '../../assets/img/projects/webdev.png';
import cartesian from '../../assets/img/projects/cartesian.png';
import shelter from '../../assets/img/projects/shelter.png';
import keyboard from '../../assets/img/projects/virtual-keyboard.png';
import momentum from '../../assets/img/projects/momentum2.png';
import styled from "styled-components";
import PageSubTitle from "../../common/pageSubTitle/PageSubTitle";

function Portfolio(props) {

    const puzzleStyle = {background: `url(${puzzle})`};
    const cardsStyle = {background: `url(${cards})`};
    const chatterStyle = {background: `url(${chatter})`};
    const todoListStyle = {background: `url(${todolist})`};
    const counterStyle = {background: `url(${counter})`};
    const weatherStyle = {background: `url(${weather})`};
    const webdevStyle = {background: `url(${webdev})`};
    const cartesianStyle = {background: `url(${cartesian})`};
    const shelterStyle = {background: `url(${shelter})`};
    const keyboardStyle = {background: `url(${keyboard})`};
    const momentumStyle = {background: `url(${momentum})`};
    const tasksStyle = {background: `url(${tasks})`};

    const projects = [
        {
            id: 1,
            imageStyle: cardsStyle,
            description: 'React, TypeScript, Redux, Formik, Axios, Ant Design. Features: Authentication, Registration, Restore Password, ' +
                'Profile data changing, Working with Tables (ajax): Pagination, Searching, Filtering, Sorting, Editing, Deleting, Creating',
            projectName: 'Party Cards',
            link: 'https://alexeygorbachevskiy.github.io/PartyCards/'
        },
        {
            id: 2,
            imageStyle: puzzleStyle,
            description: 'JavaScript, Scss,Webpack, Image splitting, Grid, Flex, Responsive & Adaptive, Drag&Drop, Move animation, DOM, Local Storage, Audio',
            projectName: 'Gem Puzzle',
            link: 'https://rolling-scopes-school.github.io/alexeygorbachevskiy-JS2020Q3/gem-puzzle/'
        },
        {
            id: 3,
            imageStyle: todoListStyle,
            description: 'React, Typescript, Hooks, Jest (Tdd), Redux, Formik, StoryBook, Material UI, Axios ',
            projectName: 'TodoList',
            link: 'https://alexeygorbachevskiy.github.io/ToDoList/'
        },
        {
            id: 4,
            imageStyle: chatterStyle,
            description: 'React, Typescript, Hooks, Axios, Class/Func components, HOC(s), Redux-Form, React-Redux, Context API',
            projectName: 'Social Network',
            link: 'https://alexeygorbachevskiy.github.io/Chatter/'
        },
        {
            id: 5,
            imageStyle: shelterStyle,
            description: 'JavaScript, DOM, Html/Css, Adaptive & Responsive, Pixel Perfect, Figma',
            projectName: 'Shelter',
            link: 'https://rolling-scopes-school.github.io/alexeygorbachevskiy-JS2020Q3/shelter/pages/main/'
        },
        {
            id: 6,
            imageStyle: momentumStyle,
            description: 'Analogue of the Google Chrome extension with the same name. JavaScript, Fetch API, Local Storage, DOM, Html/Css, Adaptivity',
            projectName: 'Momentum',
            link: 'https://rolling-scopes-school.github.io/alexeygorbachevskiy-JS2020Q3/momentum/'
        },

        {
            id: 7,
            imageStyle: cartesianStyle,
            description: 'JavaScript, Webpack, Canvas, Drag&Drop, Local Storage',
            projectName: 'Cartesian Coordinates',
            link: 'https://alexeygorbachevskiy.github.io/cartesian-coordinates/'
        },
        {
            id: 8,
            imageStyle: keyboardStyle,
            description: 'Vanilla JavaScript, DOM, Responsive design, Easy to integrate',
            projectName: 'Virtual Keyboard',
            link: 'https://rolling-scopes-school.github.io/alexeygorbachevskiy-JS2020Q3/virtual-keyboard/'
        },

        {
            id: 9,
            imageStyle: counterStyle,
            description: 'React, Local Storage, Typescript, Hooks, Function Components, CSS Modules',
            projectName: 'Counter',
            link: 'https://alexeygorbachevskiy.github.io/Counter/'
        },
        {
            id: 10,
            imageStyle: weatherStyle,
            description: 'React, Javascript, Hooks, Fetch API, Function Components, CSS Modules',
            projectName: 'Weather Informer',
            link: 'https://alexeygorbachevskiy.github.io/Weather_Informer/'
        },
        {
            id: 11,
            imageStyle: webdevStyle,
            description: 'Html/Css, Pixel Perfect, Figma, Layout for 1600px screen only',
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

    const project = projects.map((projectsElement, index) => {
        return (
            <Project
                key={index}
                id={projectsElement.id}
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

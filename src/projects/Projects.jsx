import React from 'react';
import style from './Projects.module.css';
import Project from "./project/Project";

function Projects() {
    return (
        <section className={style.projects_section}>
            <div className={style.container}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project title={'Some Title'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit,'}
                    />

                    <Project title={'Some Title'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit,'}
                    />
                    <Project title={'Some Title'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit,'}
                    />



                </div>
            </div>
        </section>
    );
}

export default Projects;
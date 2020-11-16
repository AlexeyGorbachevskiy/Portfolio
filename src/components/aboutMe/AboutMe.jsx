import React from 'react';
import style from './AboutMe.module.scss';
import PageTitle from "../../common/pageTitle/PageTitle";

function AboutMe(props) {
    return (
        <div className={style.aboutMe_container}>
            <div className={style.content_container}>
                <PageTitle mainColor={props.mainColor} title={'About Me'} icon={'lnr lnr-user'}/>
                <div className={style.content_wrapper}>

                    <div className={style.main_content}>
                        <h3>Frontend Developer</h3>
                        <p>
                            Hello, my name is Alexey Gorbachevskiy. I am a Frontend Developer with one year experience into web development field
                            with most of the React based solutions.
                            I graduated from Belarusian State University of Informatics and
                            Radioelectronics and I have expertise and skills in range of IT.

                        </p>
                        <p>
                            I attended front-end courses of IT-incubator. There I studied predominantly React/Redux
                            libraries and not only (see Resume page).
                            I participated in development of different applications (see Portfolio page).
                            Also I was attending Javascript course from Epam (Rolling Scopes).
                            At the moment I am working as a freelancer.
                            More projects there:
                            <a style={{'color': props.mainColor, 'border-bottom-color': props.mainColor}}
                               target={'_blank'}
                               href="https://github.com/AlexeyGorbachevskiy"> https://github.com/AlexeyGorbachevskiy</a>
                        </p>
                        <p>Thank you for visiting.</p>
                    </div>

                    <div className={style.personal_information}>
                        <h3>Personal Information</h3>
                        <ul>
                            <li>
                                <span style={{'border-bottom-color': props.mainColor}}
                                      className={style.title}>Name:</span>
                                <span className={style.value}>Alexey Gorbachevskiy</span>
                            </li>
                            <li>
                                <span style={{'border-bottom-color': props.mainColor}}
                                      className={style.title}>Age:</span>
                                <span className={style.value}>24</span>
                            </li>
                            <li>
                                <span style={{'border-bottom-color': props.mainColor}}
                                      className={style.title}>Residence:</span>
                                <span className={style.value}>Minsk, Belarus</span>
                            </li>
                            <li>
                                <span style={{'border-bottom-color': props.mainColor}}
                                      className={style.title}>Address:</span>
                                <span className={style.value}>Oops</span>
                            </li>
                            <li>
                                <span style={{'border-bottom-color': props.mainColor}}
                                      className={style.title}>Email:</span>
                                <span className={style.value}>alexeygorbachevskiyy@gmail.com</span>
                            </li>
                            <li>
                                <span style={{'border-bottom-color': props.mainColor}}
                                      className={style.title}>GitHub:</span>
                                <span className={style.value}>github.com/AlexeyGorbachevskiy</span>
                            </li>
                            <li>
                                <span style={{'border-bottom-color': props.mainColor}}
                                      className={style.title}>Phone:</span>
                                <span className={style.value}>Temporally Unavailable</span>
                            </li>
                            <li>
                                <span style={{'border-bottom-color': props.mainColor}}
                                      className={style.title}>Job:</span>
                                <span className={style.value}>Available</span>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className={style.signature}>
                    <img src={process.env.PUBLIC_URL + '/images/signature.png'} alt="Some signature"/>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;

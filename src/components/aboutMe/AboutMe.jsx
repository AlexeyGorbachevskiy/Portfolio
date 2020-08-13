import React from 'react';
import style from './AboutMe.module.css';
import PageTitle from "../pageTitle/PageTitle";

function AboutMe() {
    return (
        <div className={style.aboutMe_container}>
            <div className={style.content_container}>
                <PageTitle title={'About Me'} icon={'lnr lnr-user'}/>
                <div className={style.content_wrapper}>
                    <div className={style.main_content}>
                        <h3>Frontend Developer</h3>
                        <p>
                            Hello, my name is Alexey Gorbachevskiy. I graduated
                            from Belarusian State University of Informatics and
                            Radioelectronics.
                            I am a Frontend Developer and I have expertise and skills in range of IT.
                        </p>
                        <p>
                            I attended front-end courses of IT-incubator. There I studied predominantly React/Redux
                            libraries
                            and not only (see Resume page).
                            Also, I participated in development of different applications (see Portfolio page).
                        </p>
                        <p>Thank you for visiting.</p>
                    </div>

                    <div className={style.personal_information}>
                        <h3>Personal Information</h3>
                        <ul>
                            <li>
                                <span className={style.title}>Name:</span>
                                <span className={style.value}>Alexey Gorbachevskiy</span>
                            </li>
                            <li>
                                <span className={style.title}>Age:</span>
                                <span className={style.value}>23</span>
                            </li>
                            <li>
                                <span className={style.title}>Residence:</span>
                                <span className={style.value}>Minsk, Belarus</span>
                            </li>
                            <li>
                                <span className={style.title}>Address:</span>
                                <span className={style.value}>Oops</span>
                            </li>
                            <li>
                                <span className={style.title}>Email:</span>
                                <span className={style.value}>alexeygorbachevskiyy@gmail.com</span>
                            </li>
                            <li>
                                <span className={style.title}>Phone:</span>
                                <span className={style.value}>+375 (29) 636-17-79</span>
                            </li>
                            <li>
                                <span className={style.title}>Job:</span>
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
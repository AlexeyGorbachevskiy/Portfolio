import React from 'react';
import style from './AboutMe.module.css';
import PageTitle from "../common/pageTitle/PageTitle";

function AboutMe() {
    return (
        <div className={style.aboutMe_container}>
            <div className={style.content_container}>
                <PageTitle/>
                <div className={style.content_wrapper}>
                    <div className={style.main_content}>
                        <h3>Frontend Developer</h3>
                        <p>Dolor reprehenderit aut repudiandae maiores recusandae.
                            Consequatur dolor nisi labore commodi ipsa?
                            Excepturi velit laboriosam at voluptatibus cupiditate est
                            vel. Dolorem praesentium itaque fugiat placeat quas
                            consequatur? Obcaecati natus rerum
                        </p>
                        <p>Consectetur consectetur nesciunt nesciunt blanditiis amet? Quod quis unde aliquid excepturi laudantium?
                            Illo architecto aliquam velit illo magnam neque perferendis sint
                            Incidunt eius ipsa inventore labore eos velit. Minus hic magni reiciendis necessitatibus ex
                            Quidem officia deleniti accusamus obcaecati dolores.
                            Porro culpa quibusdam impedit porro praesentium excepturi. Alias ab consequatur?
                        </p>
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
                    <img src={process.env.PUBLIC_URL+'/images/signature.png'} alt="Some signature"/>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
import React from 'react';
import style from './Nav.module.scss';
import {NavLink} from "react-router-dom";


function Nav(props) {
    const navContainerStyle = {
        left: '0',
        transition: 'all .3s ease-in-out',
    }


    return (

        <div className={style.nav_container} style={props.isMenuDisplayed ? navContainerStyle : {}}>

            <div className={style.img_wrapper}>
                <h2>Alexey</h2>
                <img src={process.env.PUBLIC_URL + '/images/profile_img.jpg'} alt="profile-img"/>
            </div>
            <nav className={style.nav_menu}>
                <ul>
                    <li>
                        <NavLink to='/home' activeClassName={style.activeLink} className={style.link}>
                            <span><i className="lnr lnr-home"/></span> HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/aboutMe' activeClassName={style.activeLink} className={style.link}>
                            <span><i className="lnr lnr-user"/></span> ABOUT ME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/resume' activeClassName={style.activeLink} className={style.link}>
                            <span><i className="lnr lnr-license"/></span> RESUME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/projects' activeClassName={style.activeLink} className={style.link}>
                            <span><i className="lnr lnr-briefcase"/></span> PORTFOLIO
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' activeClassName={style.activeLink} className={style.link}>
                            <span><i className="lnr lnr-envelope"/></span> CONTACT
                        </NavLink>
                    </li>

                </ul>
            </nav>
            <div className={style.nav_footer}>
                <ul>
                    <li>
                        <a href="#">
                            <i className="fa fa-facebook-square"/>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i className="fa fa-twitter-square"/>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i className="fa fa-youtube-square"/>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i className="fa fa-vk"/>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i className="fa fa-instagram"/>
                        </a>
                    </li>
                </ul>

                <div className={style.copyright}>
                    <p>2020 © Alexey Gorbachevskiy. <br/>
                        All Right Reserved.</p>
                </div>

            </div>
        </div>

    );
}

export default Nav;
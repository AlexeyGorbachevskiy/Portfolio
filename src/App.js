import React, {useState} from 'react';
import './App.css';
import Main from "./components/main/Main";
import Nav from "./components/nav/Nav";
import {Route, Redirect} from "react-router-dom";
import AboutMe from "./components/aboutMe/AboutMe";
import HeaderMobile from "./components/headerMobile/HeaderMobile";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import ThemeToggle from "./components/themeToggle/ThemeToggle";
import mainColor from './common/styles/sass/variables.scss'

function App() {

    const [isMenuDisplayed, setMenuDisplayed] = useState(false);

    //Color from scss variables
    const style = {
        color: 'var(--mainColor)',
    };


    // let [mainColor, setMainColor] = useState(style.color);
    // blue, red, green, orange, pink, purple


    const onChangeMainColor = (e) => {
        // const color=window.getComputedStyle(e.target).backgroundColor;
        // e.target.style.backgroundColor='green'


        console.log(mainColor)
    }


    return (
        <div className="App">
            <HeaderMobile isMenuDisplayed={isMenuDisplayed}
                          setMenuDisplayed={setMenuDisplayed}
            />
            <ThemeToggle onChangeMainColor={onChangeMainColor}/>
            <Nav isMenuDisplayed={isMenuDisplayed}/>
            <Route exact path='/' render={() => <Redirect to={'/home'}/>}/>
            <Route exact path='/Portfolio' render={() => <Redirect to={'/home'}/>}/>
            <Route path='/home' render={() => <Main/>}/>
            <Route path='/aboutMe' render={() => <AboutMe/>}/>
            <Route path='/resume' render={() => <Resume/>}/>
            <Route path='/projects' render={() => <Portfolio/>}/>
            <Route path='/contact' render={() => <Contact/>}/>
        </div>
    );
}

export default App;

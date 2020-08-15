import React, {useEffect, useState} from 'react';
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
import scssMainColor from './common/styles/sass/variables.scss'


function App() {


    const [isMenuDisplayed, setMenuDisplayed] = useState(false);

    // scssMainColor.mainColor => mainColor wrapped into object when he is exported from scss variables
    const [mainColor, setMainColor] = useState(scssMainColor.mainColor);


    const onChangeMainColor = (e) => {
        setMainColor(window.getComputedStyle(e.target).backgroundColor);
    }


    return (
        <div className="App">
            <HeaderMobile isMenuDisplayed={isMenuDisplayed}
                          setMenuDisplayed={setMenuDisplayed}
            />
            <ThemeToggle onChangeMainColor={onChangeMainColor}/>
            <Nav mainColor={mainColor} isMenuDisplayed={isMenuDisplayed}/>
            <Route exact path='/' render={() => <Redirect to={'/home'}/>}/>
            <Route exact path='/Portfolio' render={() => <Redirect to={'/home'}/>}/>
            <Route path='/home' render={() => <Main mainColor={mainColor}/>}/>
            <Route path='/aboutMe' render={() => <AboutMe mainColor={mainColor}/>}/>
            <Route path='/resume' render={() => <Resume mainColor={mainColor}/>}/>
            <Route path='/projects' render={() => <Portfolio mainColor={mainColor}/>}/>
            <Route path='/contact' render={() => <Contact mainColor={mainColor}/>}/>
        </div>
    );
}

export default App;

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
import {PageTransition} from '@steveeeie/react-page-transition';
import {Switch} from "react-router";

function App() {

    // for mobile
    const [isMenuDisplayed, setMenuDisplayed] = useState(false);

    // scssMainColor.mainColor => mainColor wrapped into object when he is exported from scss variables
    const [mainColor, setMainColor] = useState(scssMainColor.mainColor);


    //for settings select
    const [selectedValue, setSelectedValue] = useState('');
    //for page transition animation
    const [animationValue, setAnimationValue] = useState('fall');

    const onChangeMainColor = (e) => {
        if (e.target.tagName === 'SPAN') {
            setMainColor(window.getComputedStyle(e.target).backgroundColor);
        }
    }

    const onSelectPageAnimation = (e) => {
        setSelectedValue(e.target.value);

        if (e.target.value === '0') {
            e.target.value = Math.floor(1 + Math.random() * (10 + 1 - 1)).toString();
        }

        switch (e.target.value) {

            case '1': {
                setAnimationValue('moveToLeftFromRight')
                break;
            }
            case '2': {
                setAnimationValue('newspaper')
                break;
            }
            case '3': {
                setAnimationValue('cubeToRight')
                break;
            }
            case '4': {
                setAnimationValue('roomToBottom')
                break;
            }
            case '5': {
                setAnimationValue('fall')
                break;
            }
            case '6': {
                setAnimationValue('slides')
                break;
            }
            case '7': {
                setAnimationValue('slide')
                break;
            }
            case '8': {
                setAnimationValue('carouselToLeft')
                break;
            }
            case '9': {
                setAnimationValue('fadeFromRight')
                break;
            }
            case '10': {
                setAnimationValue('flipTop')
                break;
            }
            default: {
                setAnimationValue('fall')
                break;
            }

        }
    }


    return (
        <div className="App">
            <HeaderMobile isMenuDisplayed={isMenuDisplayed}
                          setMenuDisplayed={setMenuDisplayed}
            />
            <ThemeToggle onChangeMainColor={onChangeMainColor}
                         onSelectPageAnimation={onSelectPageAnimation}
                         selectedValue={selectedValue}
            />
            <Nav mainColor={mainColor} isMenuDisplayed={isMenuDisplayed}/>

            <Route
                render={({location}) => {
                    return (
                        <PageTransition
                            preset={animationValue}
                            transitionKey={location.pathname}
                        >
                            <Switch location={location}>

                                <Route exact path='/' render={() => <Redirect to={'/home'}/>}/>
                                <Route exact path='/Portfolio' render={() => <Redirect to={'/home'}/>}/>
                                <Route path='/home' render={() => <Main mainColor={mainColor}/>}/>
                                <Route path='/aboutMe' render={() => <AboutMe mainColor={mainColor}/>}/>
                                <Route path='/resume' render={() => <Resume mainColor={mainColor}/>}/>
                                <Route path='/projects' render={() => <Portfolio mainColor={mainColor}/>}/>
                                <Route path='/contact' render={() => <Contact mainColor={mainColor}/>}/>

                            </Switch>
                        </PageTransition>
                    );
                }}
            />


        </div>
    );
}

export default App;

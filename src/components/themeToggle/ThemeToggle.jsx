import React, {useState} from 'react';
import style from './ThemeToggle.module.scss'


function ThemeToggle(props) {

    const [isSettingsMenuDisplayed, setSettingsMenuDisplayed] = useState(false);


    const onToggleBtnClick = () => {

        if (!isSettingsMenuDisplayed) {

            setSettingsMenuDisplayed(true);

        } else {

            setSettingsMenuDisplayed(false);
        }
    }

    const onChangeMainColor = (e) => {
        props.onChangeMainColor(e)
    }

    const onSelectPageAnimation = (e) => {
        props.onSelectPageAnimation(e);
    }

    return (
        <div
            className={!isSettingsMenuDisplayed ? style.theme_toggle_container : style.theme_toggle_container + ' ' + style.theme_toggle_container__displayed}
        >

            <div
                className={style.toggle_button}
                onClick={onToggleBtnClick}
            >
                   <span>
                       <i className={'fa fa-cog'}/>
                   </span>
            </div>

            <div className={style.theme_menu}>

                <div className={style.page_transitions}>
                    <h4>Page Animation</h4>
                    <select onChange={onSelectPageAnimation}
                            value={props.selectedValue}
                            name="page_animation"
                            id={style.page_animation_select}
                    >
                        <option>Choose</option>
                        <option value="0">Random</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                </div>


                <div className={style.theme_color}>
                    <h4>Colors</h4>
                    <ul onClick={onChangeMainColor}>
                        <li>
                            <span className={style.blue}/>
                        </li>
                        <li>
                            <span className={style.red}/>
                        </li>
                        <li>
                            <span className={style.green}/>
                        </li>
                        <li>
                            <span className={style.orange}/>
                        </li>
                        <li>
                            <span className={style.pink}/>
                        </li>
                        <li>
                            <span className={style.purple}/>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}


export default ThemeToggle;
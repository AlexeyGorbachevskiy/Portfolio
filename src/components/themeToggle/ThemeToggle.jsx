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

    const onChangeMainColor=(e)=>{
        props.onChangeMainColor(e)
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
import React from 'react';
import style from './HeaderMobile.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function HeaderMobile(props) {

    const onMenuBarClick = () => {
        if (props.isMenuDisplayed) {
            props.setMenuDisplayed(false)
        } else {
            props.setMenuDisplayed(true)
        }
    }


    return (
        <div className={style.header_mobile}>
            <h2>Alexey Gorbachevskiy</h2>
            <span onClick={onMenuBarClick} className={style.menu_bar}>
                {/*<i className="fa fa-bars"/>*/}
                <FontAwesomeIcon className={style.icon} icon={['fas', 'bars']}/>
            </span>
        </div>
    )
}

export default HeaderMobile;
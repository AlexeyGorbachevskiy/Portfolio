import React from 'react';
import style from './HeaderMobile.module.css'

function HeaderMobile(props) {

    const onMenuBarClick = () => {
        if (props.isClickedOnMenu) {
            props.setClickedOnMenu(false)
        } else {
            props.setClickedOnMenu(true)
        }
    }



    return (
        <div className={style.header_mobile}>
            <h2>Alexey Gorbachevskiy</h2>
            <span autofocus onBlur={()=>alert('hi')} onClick={onMenuBarClick} className={style.menu_bar}>
                    <i className="fa fa-bars"/>
                </span>
        </div>
    )
}

export default HeaderMobile;
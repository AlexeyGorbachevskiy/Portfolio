import React from 'react';
import style from "./PageSubTitle.module.scss";
import styled from "styled-components";


function PageSubTitle(props) {

    const SubheaderH3 = styled.div`
        border-bottom:  2px solid ${props => props.mainColor};
        
        &::before, &::after {
            background: ${props => props.mainColor};       
        }
    `

    return (
        <div className={style.subheader}>
            {/*<h3 style={{'border-bottom-color': props.mainColor}}>My Skills</h3>*/}
            <SubheaderH3 mainColor={props.mainColor} className={style.h3}>{props.subTitle}</SubheaderH3>
        </div>
    )
}


export default PageSubTitle;
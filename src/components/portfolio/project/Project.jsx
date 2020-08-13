import React, {useState} from 'react';
import style from './Project.module.css';

function Project(props) {
    const [isLinkDisplayed,setLinkDisplayed] = useState(false);

    let linkStyle={};
    if(isLinkDisplayed){
        linkStyle={'visibility':'visible'}
    }


    return (
        <div className={style.project}>
            <div className={style.project_img_wrapper} style={props.imageStyle}
                 onMouseOver={()=>setLinkDisplayed(true)}
                 onMouseOut={()=>setLinkDisplayed(false)}
            >

                <div  className={style.link_wrapper}
                      style={linkStyle}
                >
                    <a target="_blank" href={props.link}>{props.projectName}</a>
                </div>
            </div>

            <div className={style.project_description}>
                {props.description}
            </div>
        </div>
    );
}

export default Project;
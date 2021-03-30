import React, {useState} from 'react';
import style from './Project.module.scss';
import Tilt from 'react-tilt';

function Project(props) {
    const [isLinkDisplayed, setLinkDisplayed] = useState(false);

    let linkStyle = {};
    if (isLinkDisplayed) {
        linkStyle = {'visibility': 'visible'}
    }


    return (
        <div className={style.project}>

            {/*react-tilt library*/}
            <Tilt className={style.tilt} options={{max: 25}}>

                <div className={style.project_img_wrapper} style={props.imageStyle}
                     onMouseOver={() => setLinkDisplayed(true)}
                     onMouseOut={() => setLinkDisplayed(false)}
                >

                    <div className={style.link_wrapper}
                         style={linkStyle}
                    >
                        <a style={{'color': props.mainColor}} target="_blank" href={props.link}>{props.projectName}</a>
                    </div>
                </div>

            </Tilt>


            <div className={style.project_description}>
                {/*{props.id===10 && <><br/> <br/></>}*/}
                {props.description}
            </div>
        </div>
    );
}

export default Project;

import React from 'react';
import style from './Main.module.css';

function Main() {


    return (
        <div className={style.intro}>

            <div className={style.video}>
                <video className={style.video_media}
                       src={process.env.PUBLIC_URL + '/video/road.mp4'}
                       autoPlay muted loop
                />
            </div>

            <div className={style.content}>
                <h1>Alexey <span>Gorbachevskiy</span></h1>
                <p><span>I am a</span> <b>Frontend Developer</b></p>
            </div>

        </div>
    );
}

export default Main;
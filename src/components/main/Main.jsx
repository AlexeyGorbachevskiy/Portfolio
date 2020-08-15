import React from 'react';
import style from './Main.module.scss';
import ReactTypingEffect from 'react-typing-effect'

function Main(props) {


    return (
        <div className={style.intro}>

            <div className={style.video}>
                <video className={style.video_media}
                       src={process.env.PUBLIC_URL + '/video/road.mp4'}
                       autoPlay muted loop
                />
            </div>

            <div className={style.content}>
                <h1>Alexey <span style={{'color':props.mainColor}}>Gorbachevskiy</span></h1>

                <p><span>I am a </span>
                    <b>
                        {/*react-typing-effect library*/}
                        <ReactTypingEffect
                            style={{'border-bottom-color':props.mainColor}}
                            className={style.animated_text}
                            eraseDelay={2000}
                            typingDelay={200}
                            speed={20}
                            text={['Frontend Developer', 'React Developer', 'JavaScript Developer']}
                        />
                    </b>

                </p>
            </div>

        </div>
    );
}

export default Main;
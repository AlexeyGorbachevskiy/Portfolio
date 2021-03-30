import React, {useState} from 'react';
import style from './Contact.module.scss';
import PageTitle from "../../common/pageTitle/PageTitle";
import Button from "@material-ui/core/Button";
import PageSubTitle from "../../common/pageSubTitle/PageSubTitle";
import {api} from "../../api/api";

function Contact(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [successfulMessage, setSuccessfulMessage] = useState(false);
    const [response, setResponse] = useState('');


    const clearAllFields = () => {
        setName('');
        setEmail('');
        setMessage('');
    }

    const onNameInputChange = (e) => {
        setName(e.currentTarget.value)
    }
    const onEmailInputChange = (e) => {
        setEmail(e.currentTarget.value)
    }
    const onMessageInputChange = (e) => {
        setMessage(e.currentTarget.value)
    }


    const sendForm = (e) => {
        e.preventDefault();

        if (name.trim() === '' | email.trim() === '' | message.trim() === '') {
            setError(true)
            return
        } else {
            setError(false)
        }

        // two conditions for gmail
        // 1 - enable less secure apps  https://www.google.com/settings/security/lesssecureapps
        // 2 - approve https://accounts.google.com/b/0/DisplayUnlockCaptcha
        api.sendMessage(name, email, message)
            .then((res) => {
                clearAllFields();
                if(res){
                    setResponse(res.data)
                    setSuccessfulMessage(true)
                    setTimeout(() => {
                        setSuccessfulMessage(false)
                    }, 2000)
                }

            })

    }


    return (
        <div className={style.contact_container}>
            <div className={style.content_container}>
                <PageTitle mainColor={props.mainColor} title={'Contact Me'} icon={'lnr lnr-envelope'}/>
                <div className={style.main_wrapper}>
                    <div className={style.form_wrapper}>


                        <PageSubTitle subTitle={'Let\'s Talk'} mainColor={props.mainColor}/>


                        <form id={style.contact_form}>

                            <div className={style.fields_wrapper}>

                                <div className={style.name_and_email_wrapper}>
                                   <span className={style.name_wrapper}>
                                       <input style={error ? {'borderColor': 'red'} : {}}
                                              onChange={onNameInputChange}
                                              value={name}
                                              placeholder={'Name'} type="text" id={style.name}/>
                                       {/*<CustomInput variant={'outlined'} id={style.name} placeholder={'Name'}/>*/}
                                   </span>
                                    <span className={style.email_wrapper}>
                                       <input style={error ? {'borderColor': 'red'} : {}}
                                              onChange={onEmailInputChange}
                                              value={email}
                                              placeholder={'Email'} type="text" id={style.email}/>
                                        {/* <CustomInput variant={'outlined'} id={style.email} placeholder={'Email'}/>*/}
                                   </span>
                                </div>

                                <div className={style.message_wrapper}>
                                    <textarea style={error ? {'borderColor': 'red'} : {}}
                                              onChange={onMessageInputChange}
                                              value={message}
                                              placeholder={'Message'} type="text" id={style.message}/>
                                </div>
                                {
                                    error ?
                                        <span style={{
                                            'fontSize': '16px',
                                            'borderRadius': '4px',
                                            'padding': '5px',
                                            'color': 'red',
                                            // 'background': 'red'
                                        }}>Please, fill in all fields.</span>
                                        : ''
                                }
                                {
                                    successfulMessage ?
                                        <span style={{
                                            'position': 'absolute',
                                            'z-index': '3000',
                                            'fontSize': '18px',
                                            'borderRadius': '4px',
                                            'padding': '10px',
                                            'background': props.mainColor
                                        }}>{response ? response : 'Form has been sent'}</span>
                                        : ''
                                }


                                <Button
                                    onClick={sendForm}
                                    id={style.send_btn}
                                    style={{'color': props.mainColor, 'border-color': props.mainColor}}
                                    type={'submit'}
                                    variant="outlined"
                                    color="primary"
                                >
                                    Send Message
                                </Button>

                            </div>

                        </form>

                        <div className={style.contact_footer}>
                            <div className={style.link_wrapper}>
                                <span><i style={{'color': props.mainColor}} className={'fa fa-paper-plane'}/></span>
                                <h5>@AlexeyGorbachevskiy</h5>
                            </div>
                            <div className={style.link_wrapper}>
                                <span>
                                     <i style={{'color': props.mainColor}} className={'fa fa-map-marker'}/>
                                </span>

                                <h5>Minsk, Belarus</h5>
                            </div>
                            <div className={style.link_wrapper}>
                                <span>
                                     <i style={{'color': props.mainColor}} className={'fa fa-phone'}/>
                                </span>
                                <h5>Temporally Unavailable</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

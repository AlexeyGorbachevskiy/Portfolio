import React from 'react';
import style from './Contact.module.scss';
import PageTitle from "../../common/pageTitle/PageTitle";
import Button from "@material-ui/core/Button";
import PageSubTitle from "../../common/pageSubTitle/PageSubTitle";
import {requests} from "../../requests/requests";


function Contact(props) {

    const sendForm = async () => {
        const result = await requests.sendMessage('Alex', 'some', 'Hello')
        console.log(result)
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
                                       <input placeholder={'Name'} type="text" id={style.name}/>
                                       {/*<CustomInput variant={'outlined'} id={style.name} placeholder={'Name'}/>*/}
                                   </span>
                                    <span className={style.email_wrapper}>
                                       <input placeholder={'Email'} type="text" id={style.email}/>
                                        {/* <CustomInput variant={'outlined'} id={style.email} placeholder={'Email'}/>*/}
                                   </span>
                                </div>

                                <div className={style.message_wrapper}>
                                    <textarea placeholder={'Message'} type="text" id={style.message}/>
                                </div>


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
                                <h5>Alexey Gorbachevskiy</h5>
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
                                <h5>+375 (29) 636-17-79</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
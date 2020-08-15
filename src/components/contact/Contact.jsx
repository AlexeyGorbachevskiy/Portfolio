import React from 'react';
import style from './Contact.module.scss';
import PageTitle from "../../common/pageTitle/PageTitle";
import Button from "@material-ui/core/Button";
import styled from "styled-components";


function Contact(props) {

    const SubheaderH3 = styled.div`
        border-bottom:  2px solid ${props => props.mainColor};
        
        &::before, &::after {
            background: ${props => props.mainColor};       
        }
    `


    return (
        <div className={style.contact_container}>
            <div className={style.content_container}>
                <PageTitle mainColor={props.mainColor} title={'Contact Me'} icon={'lnr lnr-envelope'}/>
                <div className={style.main_wrapper}>
                    <div className={style.form_wrapper}>

                        <div className={style.subheader}>
                            {/*<h3 style={{'border-bottom-color': props.mainColor}}>Let's Talk</h3>*/}
                            <SubheaderH3 mainColor={props.mainColor} className={style.h3}>My Skills</SubheaderH3>
                        </div>


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
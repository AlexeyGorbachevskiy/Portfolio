import React from 'react';
import style from './Contact.module.css';
import PageTitle from "../pageTitle/PageTitle";

function Contact() {
    return (
        <div className={style.contact_container}>
            <div className={style.content_container}>
                <PageTitle title={'Contact Me'} icon={'lnr lnr-envelope'}/>
                <div className={style.main_wrapper}>
                    <div className={style.form_wrapper}>

                        <div className={style.subheader}>
                            <h3>Let's Talk</h3>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
import React from 'react';
import style from './Contacts.module.css';

function Contacts() {
    return (
        <section className={style.contacts_section}>

            <div className={style.container}>
                <h2>Contact</h2>
                    <form className={style.contacts} action="#">
                        <input placeholder={'Name'} className={style.name} type="text"/>
                        <input placeholder={'Email'} className={style.email} type="text"/>
                        <textarea placeholder={'Your message'} className={style.message} name='textarea' />
                    </form>
                <button className={style.send_btn}>Send</button>
            </div>
        </section>
    );
}

export default Contacts;
import React from 'react'
import styles from './Contacts.module.scss'

export default function Contacts({ buttonThemeActive }) {
    return (
        <div className={`${styles.contacts} ${buttonThemeActive ? styles.contactsDark : ''}`}>
            <div className=""><span>Contacts</span></div>
            <h3>Location</h3>
            <div className="">Saint-Petersburh, Russia</div>
            <h3>Telegram / WhatsApp</h3>
            <div className="">+7 (953) 158-26-48</div>
            <h3>Email</h3>
            <div className="">milusyuriy@gmail.com</div>
        </div>
    )
}

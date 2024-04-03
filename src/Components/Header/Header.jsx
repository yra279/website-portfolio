import { useRef, useState } from 'react';
import styles from './Header.module.scss';
import ButtonPage from '../buttonPage/buttonPage';  // Обратите внимание на изменение имени компонента
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import imgSun from '../../img/sun.4d47962acd6c83e7e7aca592ec39545f.svg'
import imgMoon from '../../img/moon.829f022e764b1d37016e364c5447dfdb.svg'

function Header({
    activeId, setActiveId, buttonThemeActive, setButtonThemeActive
}) {

    const clickLinkPage = (ref) => {
        setActiveId(ref.current.id);
    }

    const clickButtonTheme = () => {
        setButtonThemeActive(!buttonThemeActive);
    }

    return (
        <header className={`${styles.header} .container-fluid`}>
            <div className='row'>
                <div className='col-2'></div>
                <div className={`${styles.logo} col-5`}>
                    <b>Developer</b> portfolio
                </div>

                <div className='col-2' style={{ marginTop: '5px' }}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-3' style={{ width: '72px', marginRight: '5px' }}>
                                <ButtonPage
                                    id='1'
                                    className='col-10'
                                    col='col-3'
                                    onClick={clickLinkPage}
                                    active={activeId == 1}
                                >
                                    Home
                                </ButtonPage>
                            </div>
                            <div className='col-4' style={{ width: '92px', marginRight: '2.5px' }}>
                                <ButtonPage
                                    id='2'
                                    className='col-8'
                                    col='col-4'
                                    onClick={clickLinkPage}
                                    active={activeId == 2}
                                >
                                    Projects
                                </ButtonPage>
                            </div>
                            <div className='col-5' style={{ width: '121px' }}>
                                <ButtonPage
                                    id='3'
                                    className='col-6'
                                    col='col-5'
                                    onClick={clickLinkPage}
                                    active={activeId == 3}
                                >
                                    Contacts
                                </ButtonPage>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col' style={{ marginTop: '5px' }}>
                    <div className={`${styles.buttonTheme} ${buttonThemeActive ? styles.buttonThemeActive : styles.buttonThemeNotActive}`} onClick={clickButtonTheme}>
                        <img
                            className={styles.darkMode}
                            src={imgSun}
                            alt="Light mode"
                        />

                        <img
                            className={styles.darkMode}
                            src={imgMoon}
                            alt="Dark mode"
                        />

                    </div>
                </div>
            </div>
        </header >
    );
}

export default Header;

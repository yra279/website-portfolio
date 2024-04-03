import React from "react";
import styles from './Main.module.scss'

function Main({ buttonThemeActive }) {
    return (
        <main>
            <section className={styles['main__section--1']}>
                <div>
                    <span>
                        <strong>
                            <span style={{ fontSize: '60px' }}>
                                Hi, my name is <span style={{ color: '#5c62ec' }}>Yuri</span>
                            </span>
                            <br />
                            a frontend developer
                        </strong>
                        <br />
                        <span style={{ fontSize: '18px' }}>
                            with passion for learning and creating.
                        </span>
                    </span>
                    <br />
                    <button className={styles.button}>
                        Download CV
                    </button>
                </div>
            </section>

            <section className={buttonThemeActive ? styles['main__section--2-dark'] : styles['main__section--2-light']}>
                <div>
                <span>
                    Frontend
                </span>
                
                JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM,
                <br />
                BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
                </div>

                <div style={{ marginTop: '50px'}}>
                    <span>
                        Backend
                    </span>
                    
                    
                    NodeJS, MySQL, MongoDB, PHP, Laravel
                </div>
            </section>
        </main>
    );
}


export default Main;
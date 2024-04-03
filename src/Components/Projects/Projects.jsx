import React from 'react'
import styles from './Projects.module.scss'
import { givCartoonInfoProjects } from '../../store/selectors/cartoonInfoProject-selectors';
import { useSelector } from 'react-redux'

export default function Projects({ toPageProject, buttonThemeActive }) {
    const listProjects = useSelector(givCartoonInfoProjects);

    return (
        <div style={{backgroundColor: buttonThemeActive ? '#252526' : ''}}>
            <span className={styles.title}>Projects</span>
            <div className={buttonThemeActive ? styles.darkStyleProjects : styles.lightStyleProjects}>

                {
                    listProjects.map(({ urlPhoto, title, id }) => (
                        <div className={buttonThemeActive ? styles.darkCartoonElem : styles.lightCartoonElem}>
                            <img
                                src={urlPhoto}
                                alt=""
                                className={styles.photoElem}
                            />
                            <span>{title}</span>
                            <button className={styles.button} onClick={() => toPageProject(id)}>
                                Open Project
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

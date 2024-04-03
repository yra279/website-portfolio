import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import PageProject from '../PageProject/PageProject';
import Projects from '../Projects/Projects';
import styles from './Hub.module.scss'
import React, { useState } from 'react';


function Hub() {
    const [activeId, setActiveId] = useState(1);
    const [buttonThemeActive, setButtonThemeActive] = useState(true);
    const [idProject, setIdProject] = useState();
    const [toPageProject, setToPageProject] = useState(false);

    const funcToPageProject = (id) => {
        setIdProject(id);
        setToPageProject(true);
    }

    const funcClosePageProject = () => {
        setIdProject(0);
        setToPageProject(false);
    }

    return (
        <div>
            <Header
                activeId={activeId}
                setActiveId={(id) => { setActiveId(id); funcClosePageProject(); }}
                buttonThemeActive={buttonThemeActive}
                setButtonThemeActive={setButtonThemeActive}
            />
            {toPageProject ?
                <PageProject buttonThemeActive={buttonThemeActive} id={idProject} /> :
                activeId == 1 ? (
                    <Main buttonThemeActive={buttonThemeActive} />
                ) : activeId == 2 ? (
                    <Projects buttonThemeActive={buttonThemeActive} toPageProject={funcToPageProject} />
                ) : (
                    <Contacts buttonThemeActive={buttonThemeActive} />
                )
            }
            <Footer />
        </div>
    );
}
export default Hub;
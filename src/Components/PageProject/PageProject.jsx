import React from 'react';
import iconGitHub from '../../img/gitHub.db1e3cfa3aa61658d837d82e113dc1fe.svg'
import { useSelector } from 'react-redux';
import { givInfoProject } from '../../store/selectors/infoProject-selectors';
import './PageProject.scss';
import BtnGitHub from '../btnGitHub/BtnGitHub';

export default function PageProject({ id, buttonThemeActive }) {
    const infoProject = useSelector(givInfoProject).filter(ida => ida.id === id)[0];

    return (
        <div className={buttonThemeActive ? 'darkProjectPage' : 'lightProjectPage'}>
            <span>
                Project
            </span>

            <img src={infoProject.urlImg} alt="" className='projectBackground' />

            <span className="">
                {infoProject.stack}
            </span>

            <BtnGitHub link={infoProject.gitHubLink} />
        </div>
    )
}

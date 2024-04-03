import React, { useEffect, useRef } from 'react';
import styles from './buttonPage.module.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';


function ButtonPage({ active, children, id, onClick, className }) {
    const ref = useRef();
    


    
    return (
        <>
            <div className={`${styles.button}`} id={id} onClick={() => onClick(ref)} ref={ref} >
                <div className='container'>
                    <div className='row'>
                        <div className={className}>
                            {children}

                            <div className={`${active ? styles.decorationText : ''}`}></div>

                        </div>

                    </div>

                </div>
            </div>
        </>

    );
}

export default ButtonPage;

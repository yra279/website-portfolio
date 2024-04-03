import React from "react";
import styles from './Footer.module.scss'
import iconVK from '../../img/vk.ffb489eeac4ab842395ffb315910ea7f.svg'
import iconInstagram from '../../img/instagram.c877a8275355fec38548544a6d0ab3b4.svg'
import iconTwitter from '../../img/twitter.d4b0a40866d7b735834b96db6728afc1.svg'
import iconGitHub from '../../img/gitHub.db1e3cfa3aa61658d837d82e113dc1fe.svg'
import iconIn from '../../img/linkedIn.c05a2ae5b158581b0f27510e1d79e379.svg'


function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.iconsBox}`} style={{width: '310px'}}>
                <div className="row">
                    <div className={`col ${styles.iconSmall}`} style={{marginTop: '1.5%'}}>
                        <img src={iconVK} alt="" />
                    </div>

                    <div className="col">
                        <img src={iconInstagram} alt="" />
                    </div>

                    <div className={`col ${styles.iconSmall}`} style={{marginTop: '1.5%'}}>
                        <img src={iconTwitter} alt="" />
                    </div>

                    <div className="col">
                        <img src={iconGitHub} alt="" />
                    </div>

                    <div className="col">
                        <img src={iconIn} alt="" />
                    </div>
                </div>

                <div className="row" style={{marginTop: '20px'}}>
                    <div className="col-2"></div>
                    <p className="col">
                        © 2024 frontend-dev.com
                    </p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
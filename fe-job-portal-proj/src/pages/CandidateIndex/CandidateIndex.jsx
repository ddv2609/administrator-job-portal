import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from "../../components/FooterMain/Footer";
import HeaderCadidateIdex from '../../components/Header/Header_CandidateIndex';
import styles from "./CadidateIndex.module.css";

function CandidateIndex() {

    return (
        <div className={styles.container}>
            <HeaderCadidateIdex />
            <div className={styles.content}>
                <Outlet />
            </div>
            <div className={styles.footer_main}>
                <Footer />
            </div>
        </div>
    );
}

export default CandidateIndex;

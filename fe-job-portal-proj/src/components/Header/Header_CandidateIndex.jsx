import React from 'react';
import { Layout } from "antd";
import styles from "./Header.module.css";
import { Link } from 'react-router-dom';


function Header_CandidateIndex(props) {
    return (
        <div>
            <Layout>
                <div className={styles.headerEmployeer_index}>
                    <div className={styles.headerEmployeer_logo}>
                        <Link to="/candidate" style={{
                            display: "flex",
                        }}>
                            <img src="/logo.png" alt="logo" />
                            <h1>Portal</h1>
                        </Link>

                    </div>
                    <div className={styles.nav}>
                        <ul className={styles.navLists}>
                            <li className={styles.menu_dropdonw_company}>
                                <a href="#company">Việc làm</a>
                                <div className={styles.dropdown_items_company}>
                                    <ul style={{ textDecoration: "none", listStyleType: "none" }}>
                                        <li>
                                            <a href="#danh sách công ty">
                                                <span class="material-symbols-outlined">
                                                    work
                                                </span>
                                                Việc làm đã ứng tuyển
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#danh sách công ty">
                                                <span class="material-symbols-outlined">
                                                    favorite
                                                </span>
                                                Việc đã lưu
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className={styles.menu_dropdonw_hackjob}>
                                <a href="#guide">Hồ sơ và CV</a>
                                <div
                                    className={styles.dropdonw_items_hackjob}
                                    style={{
                                        marginLeft: "20px",
                                        height: "100px",
                                    }}
                                >
                                    <ul style={{ textDecoration: "none", listStyleType: "none" }}>

                                        <li>
                                            <Link to="/cv-management">
                                                <span className="material-symbols-outlined">
                                                    publish
                                                </span>
                                                Tải CV lên
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.header_task_profile}>
                        <div className={styles.header_task_icon}>
                            <div className={styles.header_task_icon_noti}>
                                <a href="#notification">
                                    <span class="material-symbols-outlined" >
                                        notifications
                                    </span>
                                </a>
                            </div>
                            <div className={styles.header_task_icon_forum}>
                                <a href="#massage" >
                                    <span class="material-symbols-outlined">
                                        forum
                                    </span>
                                </a>
                            </div>

                        </div>
                        <div className={styles.header_profile}>
                            <a href="#profile" >
                                <img
                                    src="https://www.w3schools.com/howto/img_avatar.png"
                                    alt="profile"
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "50%",
                                    }}
                                />
                            </a>
                            <div className={styles.functuon_profile}>
                                <div className={styles.profile_inf}>
                                    <img
                                        src="https://www.w3schools.com/howto/img_avatar.png"
                                        alt="profile"
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                        }}
                                    />
                                    <p style={{
                                        marginLeft: "20px",
                                    }}>Phạm Thanh Tú</p>
                                </div>
                                <div className={styles.function_list_profile}>
                                    <div className={styles.edit_inf}>
                                        <span class="material-symbols-outlined">
                                            edit_document
                                        </span>
                                        <a href="#edit">Chỉnh sửa thông tin</a>
                                    </div>
                                    <div className={styles.logout}>
                                        <span class="material-symbols-outlined">
                                            logout
                                        </span>
                                        <a href="#logout">Đăng xuất</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout >
        </div >
    );
}

export default Header_CandidateIndex;
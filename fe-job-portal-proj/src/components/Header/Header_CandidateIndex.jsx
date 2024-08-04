import { Layout } from "antd";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";


function Header_CandidateIndex(props) {
    const [user, setUser] = useState({
        name: '',
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/candidate/info/'
                    , { withCredentials: true }
                );
                const userData = response.data.info.member;
                setUser({
                    name: userData.fullName,
                    avatar: userData.avatar || 'https://www.w3schools.com/howto/img_avatar.png',
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);
    
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
                                <a href="/candidate/cv-management">Hồ sơ và CV</a>
                                <div
                                    className={styles.dropdonw_items_hackjob}
                                    style={{
                                        marginLeft: "20px",
                                        height: "100px",
                                    }}
                                >
                                    <ul style={{ textDecoration: "none", listStyleType: "none" }}>

                                        <li>
                                            <Link to="/candidate/cv-management">
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
                            <a href="#profile">
                                <img
                                    src={user.avatar}
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
                                        src={user.avatar}
                                        alt="profile"
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                        }}
                                    />
                                    <p style={{ marginLeft: "20px" }}>{user.name}</p>
                                </div>
                                <div className={styles.function_list_profile}>
                                    <div className={styles.edit_inf}>
                                        <span className="material-symbols-outlined">
                                            edit_document
                                        </span>
                                        <a href="/candidate/update-info">Chỉnh sửa thông tin</a>
                                    </div>
                                    <div className={styles.logout}>
                                        <span className="material-symbols-outlined">
                                            logout
                                        </span>
                                        <a href="">Đăng xuất</a>
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
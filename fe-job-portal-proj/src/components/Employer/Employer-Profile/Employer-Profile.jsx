import React from 'react';
import styles from './Employer-Profile.module.css';
import { useNavigate } from 'react-router-dom';

const CompanyProfile = () => {

    const navigate = useNavigate();
    return (
        <div>

        <div className={styles.container}>
            <div className={styles.header}>
                <img
                    src="/email.png"
                    alt="Company Logo"
                    className={styles.logo}
                />
                <h1 className={styles.companyName}>Ptit</h1>
            </div>
            <div className={styles.details}>   
            <div>
                    <span className={styles.gender}>Giới Tính: </span>
                    <span>Nam</span>
                </div>
                <div>
                    <span className={styles.dob}>Ngày Sinh: </span>
                    <span>11/04/2000</span>
                </div>             
                <div>
                    <span className={styles.address}>Địa chỉ: </span>
                    <span>123 Đường ABC, Quận 1, Thành phố Hồ Chí Minh</span>
                </div>
                <div>
                    <span className={styles.email}>Email: </span>
                    <span>1@gmail.com</span>
                </div>
                <div>
                    <span className={styles.phonenumber}>Số điện thoại: </span>
                    <span>2323232323</span>
                </div>
            </div>
            <div className={styles.jobActions}>
            <button className={styles.editButton} onClick={() => navigate('/employer/employer-editprofile')} >Sửa</button>
          </div>   
            
        </div>
        </div>
    );
};

export default CompanyProfile;


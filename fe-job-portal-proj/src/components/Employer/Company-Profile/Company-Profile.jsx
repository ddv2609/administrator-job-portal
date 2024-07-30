import React from 'react';
import styles from './Company-Profile.module.css';
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
                <div className={styles.h}>
                <p className={styles.introduction}>Giới thiệu về công ty:</p>
                <p>Chúng tôi là một công ty hàng đầu trong lĩnh vực XYZ, cam kết mang đến sản phẩm và dịch vụ chất lượng cao.
                Chúng tôi là một công ty hàng đầu trong lĩnh vực XYZ, cam kết mang đến sản phẩm và dịch vụ chất lượng cao.
                Chúng tôi là một công ty hàng đầu trong lĩnh vực XYZ, cam kết mang đến sản phẩm và dịch vụ chất lượng cao.
                Chúng tôi là một công ty hàng đầu trong lĩnh vực XYZ, cam kết mang đến sản phẩm và dịch vụ chất lượng cao.
                Chúng tôi là một công ty hàng đầu trong lĩnh vực XYZ, cam kết mang đến sản phẩm và dịch vụ chất lượng cao.
                </p>
                </div>                
                <div>
                    <span className={styles.address}>Địa chỉ: </span>
                    <span>123 Đường ABC, Quận 1, Thành phố Hồ Chí Minh</span>
                </div>
                <div>
                    <span className={styles.phonenumber}>Số điện thoại: </span>
                    <span>2323232323</span>
                </div>
                <div>
                    <span className={styles.employees}>Số lượng nhân lực: </span>
                    <span>100</span>
                </div>
            </div>
            <div className={styles.jobActions}>
            <button className={styles.editButton} onClick={() => navigate('/employer/company-editprofile')} >Sửa</button>
          </div>   
            
        </div>
        </div>
    );
};

export default CompanyProfile;


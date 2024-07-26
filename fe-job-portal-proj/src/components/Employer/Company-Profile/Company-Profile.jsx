import React from 'react';
import styles from './Company-Profile.module.css';

const CompanyProfile = () => {
    return (
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
                    <span>123 Đường ABC, Quận 1, Thành phố Hồ Chí Minh, Việt Nam</span>
                </div>
                <div>
                    <p className={styles.website}>
                        Trang web: <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">www.example.com</a>
                    </p>
                </div>
                <div>
                    <span className={styles.employees}>Số lượng nhân lực: </span>
                    <span>100+</span>
                </div>
            </div>
        </div>
    );
};

export default CompanyProfile;


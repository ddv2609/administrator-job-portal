import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from "../../components/FooterMain/Footer";
import HeaderCadidateIdex from '../../components/Header/Header_CandidateIndex';
import styles from "./CadidateIndex.module.css";

function CandidateIndex(props) {
    // const [selectedRole, setSelectedRole] = useState("all");
    // const [selectedRoleJob, setSelectedRoleJob] = useState("all");

    // const roles = [
    //     { label: "Tất cả tỉnh/thành phố", value: "all" },
    //     { label: "Hà Nội", value: "hanoi" },
    //     { label: "Đà Nẵng ", value: "danang" },
    //     { label: "Hồ Chí Minh", value: "HCM" },
    //     { label: "Cần Thơ", value: "cantho" },
    //     { label: "Đồng Nai", value: "dongnai" },
    //     { label: "Bình Dương", value: "binhduong" },
    //     { label: "Bắc Ninh", value: "bacninh" },
    //     { label: "Hải Phòng", value: "haiphong" },
    //     { label: "Quảng Ninh", value: "quangninh" },
    //     { label: "Khác", value: "other" },
    // ];

    // const rolesJob = [
    //     { label: "Tất cả ngành nghề", value: "all" },
    //     { label: "IT-Phần mềm", value: "it" },
    //     { label: "Kế toán", value: "accountant" },
    //     { label: "Bán hàng", value: "sales" },
    //     { label: "Marketing", value: "marketing" },
    //     { label: "Nhân sự", value: "hr" },
    //     { label: "Hành chính", value: "admin" },
    //     { label: "Xây dựng", value: "construction" },
    //     { label: "Khác", value: "other" },
    // ];

    // const handleChange = (value) => {
    //     setSelectedRole(value);
    // };

    // const handleChangeJob = (value) => {
    //     setSelectedRoleJob(value);
    // };

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

import { Layout } from 'antd';
import React, { useState } from 'react';
import CVList from '../../components/CandidateCV/CVList';
import CVUpload from '../../components/CandidateCV/CVUpload';
import UserInfo from '../../components/CandidateCV/UserInfo';
import Footer from "../../components/FooterMain/Footer";
import HeaderCadidateIdex from '../../components/Header/Header_CandidateIndex';


const { Sider, Content } = Layout;

const contentStyle = {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    margin: '20px 10px 20px 100px',
};
const siderStyle = {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    margin: '20px 100px 20px 10px',
    display: 'inline-block',
};

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    minHeight: '100vh',
};


const CVManagementPage = () => {
    const [cvs, setCvs] = useState([]);

    const handleUploadSuccess = (newCv) => {
        setCvs(prevCvs => [...prevCvs, newCv]);
    };

    const handleDelete = (cvId) => {
        setCvs(prevCvs => prevCvs.filter(cv => cv.id !== cvId));
    };

    const user = {
        name: "Dương Hồng Đức",
        email: "hongduc20062002@gmail.com",
        phone: "0339230195",
        address: "PX, Hà Nội",
        major: "CNTT"
    };
    return (
        <Layout style={layoutStyle}>
            <HeaderCadidateIdex />
            <Layout style={{ paddingTop: 64 }}>
                <Content style={contentStyle}>
                    <div>
                        <h1>Hồ sơ & CV</h1>
                        <CVUpload onUploadSuccess={handleUploadSuccess} />
                        <CVList cvs={cvs} onDelete={handleDelete} />
                    </div>
                </Content>
                <Sider width="30%" style={siderStyle}>
                    <div>
                        <UserInfo user={user} />
                    </div>
                </Sider>
            </Layout>
            <Footer />
        </Layout>
    );
};

export default CVManagementPage;

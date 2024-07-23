import { Layout } from 'antd';
import React, { useState } from 'react';
import CVList from '../../components/CandidateCV/CVList';
import CVUpload from '../../components/CandidateCV/CVUpload';
import UserInfo from '../../components/CandidateCV/UserInfo';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {   
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff'
};
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
};
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
};
const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
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
            <Header style={headerStyle}></Header>
            <Layout>
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
            <Footer style={footerStyle}></Footer>
        </Layout>
    );
};

export default CVManagementPage;

import { Layout } from 'antd';
import React, { useState } from 'react';
import CVList from '../../components/CandidateCV/CVList';
import CVUpload from '../../components/CandidateCV/CVUpload';

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
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
    margin: '10px 10px 10px 50px',
};
const siderStyle = {
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
    margin: '10px 50px 10px 10px',
};
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
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

    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>Header</Header>
            <Layout>
                <Content style={contentStyle}>
                    <div>
                        <h1>CV Management</h1>
                        <CVUpload onUploadSuccess={handleUploadSuccess} />
                        <CVList cvs={cvs} onDelete={handleDelete} />
                    </div>
                </Content>
                <Sider width="25%" style={siderStyle}>
                    Sider
                </Sider>
            </Layout>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    );
};

export default CVManagementPage;

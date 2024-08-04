import { Button, Form, Input, Layout, message } from 'antd';
import axios from 'axios';
import React, { useEffect } from 'react';
import Footer from "../../components/FooterMain/Footer";
import HeaderCadidateIdex from '../../components/Header/Header_CandidateIndex';

const { Sider, Content } = Layout;

const contentStyle = {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    margin: '20px 10px 20px 100px',
    width: "50%",
};

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    minHeight: '100vh',
};

const UpdateCandidateInfo = () => {
    const [form] = Form.useForm();

    useEffect(() => {
        // Fetch current user info to populate the form
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/candidate/info/'
                    , { withCredentials: true }
                );
                const { info } = response.data;
                form.setFieldsValue({
                    fullName: info.member.fullName,
                    tel: info.member.tel,
                });
            } catch (error) {
                message.error('Error fetching user info');
            }
        };

        fetchUserInfo();
    }, [form]);

    const onFinish = async (values) => {
        try {
            await axios.post('http://localhost:8000/api/candidate/info/',
                values
                , { withCredentials: true }
            );
            message.success('Thông tin đã được cập nhật thành công');
        } catch (error) {
            message.error('Có lỗi xảy ra khi cập nhật thông tin');
        }
    };

    return (
        <Layout style={layoutStyle}>
            <HeaderCadidateIdex />
            <Layout style={{ paddingTop: 64 }}>
                <Content style={contentStyle}>
                    <div>
                        <h2>Chỉnh sửa thông tin cá nhân</h2>
                        <Form
                            form={form}
                            name="update_info"
                            layout="vertical"
                            onFinish={onFinish}
                        >
                            <Form.Item
                                label="Họ và tên"
                                name="fullName"
                                rules={[{ required: true, message: 'Vui lòng nhập họ và tên của bạn!' }]}
                            >
                                <Input placeholder="Nhập họ và tên của bạn" />
                            </Form.Item>
                            <Form.Item
                                label="Số điện thoại"
                                name="tel"
                                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại của bạn!' }]}
                            >
                                <Input placeholder="Nhập số điện thoại của bạn" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Cập nhật
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Content>
            </Layout>
            <Footer />
        </Layout>
    );
};

export default UpdateCandidateInfo;

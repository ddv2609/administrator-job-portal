
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Avatar from "../Avatar/Avatar";

const userInfoStyle = {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
};

const UserInfo = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/candidate/info/',
                    { withCredentials: true }
                );
                const userData = response.data.info.member;
                setUser({
                    name: userData.fullName,
                    email: userData.email,
                    phone: userData.tel,
                    address: userData.address,
                });
            } catch (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.error('Error response:', error.response.data);
                    console.error('Error status:', error.response.status);
                    console.error('Error headers:', error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error('Error request:', error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.error('Error message:', error.message);
                }
                console.error('Error config:', error.config);
            }
        };

        fetchUserData();
    }, []);
    return (
        <div style={userInfoStyle}>
            <div>
            <Avatar
                API={{
                    upload: "http://localhost:8000/api/candidate/avatar",
                    delete: "http://localhost:8000/api/candidate/avatar"
                }}
            /> <span style={{ fontSize: '24px' }}>{user.name}</span>
                <p>Chào mừng bạn trở lại, <strong style={{ color: "#00CC00" }}>{user.name}</strong>. Hãy làm nổi bật hồ sơ của mình nhé!</p>
            </div>
            <div>
                <h2>Thông tin cá nhân</h2>
                <p><strong>Tên:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Số điện thoại:</strong> {user.phone}</p>
                <p><strong>Địa chỉ:</strong> {user.address}</p>

            </div>

        </div>
    );
};

export default UserInfo;

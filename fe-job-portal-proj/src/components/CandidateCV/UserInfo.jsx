import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React from 'react';

const UserInfo = ({ user }) => {
    return (
        <div>
            <div>
                <Avatar size={64} icon={<UserOutlined />} /> <span>{user.name}</span>
                <p>Chào mừng bạn trở lại, {user.name}. Hãy làm nổi bật hồ sơ của mình nhé!</p>
            </div>
            <div>
                <h2>Thông tin cá nhân</h2>
                <p><strong>Tên:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Số điện thoại:</strong> {user.phone}</p>
                <p><strong>Địa chỉ:</strong> {user.address}</p>
                <p><strong>Chuyên ngành:</strong> {user.major}</p>
            </div>
            
        </div>
    );
};

export default UserInfo;

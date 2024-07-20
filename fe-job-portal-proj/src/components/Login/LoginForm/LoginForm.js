import { Button, Form, Input, message, Select } from "antd";
import { MdEmail } from "react-icons/md";
import { BsShieldLockFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

import axios from "axios";

import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginForm({ changeRole }) {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  const roles = [
    { label: "Ứng viên", value: "candidate" },
    { label: "Nhà tuyển dụng", value: "employer" },
    { label: "Quản trị viên", value: "admin" },
  ];

  const handleSubmitLoginFrm = (values) => {
    setLoading(true);
    axios.post("http://localhost:8000/auth/login", values)
      .then(res => {
        console.log(res.data);
        messageApi.success("Đăng nhập thành công", 1).then(() => nav("/"));
      })
      .catch(err => {
        console.error(err.response.data);
        messageApi.error(`Đăng nhập thất bại. ${err.response.data.message}!`, 10);
      })
      .finally(() => setLoading(false))
  }

  const handleSelectRole = (item) => {
    changeRole(item);
  }

  return (
    <div className={styles.login}>
      {contextHolder}
      <Form
        layout="vertical"
        onFinish={handleSubmitLoginFrm}
      >
        <Form.Item
          label={<span className={styles.lbLoginFrm}>Email</span>}
          name="email"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập địa chỉ email của bạn',
            },
            {
              type: 'email',
              message: 'Email bạn nhập không hợp lệ',
            }
          ]}
        >
          <Input size="large" placeholder="Email" className={styles.field}
            addonBefore={<span className={styles.icon}><MdEmail /></span>} />
        </Form.Item>

        <Form.Item
          label={<span className={styles.lbLoginFrm}>Mật khẩu</span>}
          name="password"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mật khẩu của bạn',
            },
          ]}
        >
          <Input.Password size="large" placeholder="Mật khẩu" className={styles.field}
            addonBefore={<span className={styles.icon}><BsShieldLockFill /></span>} />
        </Form.Item>

        <Form.Item label={<span className={styles.lbLoginFrm}>Bạn là:</span>} name="role" initialValue={"candidate"}>
          <Select
            style={{ width: "50%" }}
            defaultValue={roles[0]}
            size="large"
            suffixIcon={<span className={styles.icon}><FaUserAlt /></span>}
            options={roles}
            onChange={handleSelectRole}
          />
        </Form.Item>

        <div className={styles.forgotPassword}>
          <span
            className={styles.resetPassword}
            onClick={() => { nav("/reset-password") }}
          >Quên mật khẩu</span>
        </div>

        <Form.Item>
          <Button
            type="primary"
            block size="large"
            htmlType="submit" loading={loading}
            className={styles.btnLogin}
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
import { Button, Form, Input } from "antd";
import { MdEmail } from "react-icons/md";
import { BsShieldLockFill } from "react-icons/bs";

import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const nav = useNavigate();

  const handleSubmitLoginFrm = (values) => {
    console.log("Submit login form")
    console.log(values)
  }

  return (
    <div className={styles.login}>
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
            htmlType="submit"
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